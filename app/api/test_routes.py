from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import Test, db
from app.forms import TestForm
from .auth_routes import validation_errors_to_error_messages

test_routes = Blueprint("tests", __name__)


@test_routes.route("/<int:userId>")
@login_required
def getTests(userId):
    """
    Gets all tests associated with the identified (logged-in) user
    """
    tests = Test.query.filter_by(userId=userId).all()
    return {"tests": [test.to_dict() for test in tests]}


@test_routes.route("/", methods=["POST"])
# @login_required
def createTest():
    """
    Creates a new test
    """

    form = TestForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_test = Test(
            userId=form.data["userId"],
            clientId=form.data["clientId"],
            testCode=form.data["testCode"],
            res=form.data["res"],
        )
        db.session.add(new_test)
        db.session.commit()
        return new_test.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @test_routes.route("/<int:testId>", methods=["PUT"])
# @login_required
# def updateTest(testId):
#     """
#     Update a test
#     """
#     form = testForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]

#     if form.validate_on_submit():

#         test_to_update = Test.query.get(testId)

#         test_to_update.userId = form.data["userId"]
#         test_to_update.birthYear = form.data["birthYear"]
#         test_to_update.code = form.data["code"]
#         test_to_update.curTest = form.data["curTest"]

#         db.session.add(test_to_update)
#         db.session.commit()
#         return test_to_update.to_dict()

#     print("-------errors-------", form.errors)
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@test_routes.route("/<int:testId>", methods=["DELETE"])
@login_required
def deleteTest(testId):
    """
    Deletes a test
    """
    test_to_delete = Test.query.get(testId)
    if test_to_delete:
        db.session.delete(test_to_delete)
        db.session.commit()
        return "deleted"
    else:
        print(f"-------- no test found with id {testId} -------- ")
        return {"errors": "No test found with given id"}