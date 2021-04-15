from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import Test, Client, db
from app.forms import TestForm
from .auth_routes import validation_errors_to_error_messages

test_routes = Blueprint("tests", __name__)


@test_routes.route("/", methods=["POST"])
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


@test_routes.route("/toggle-seen", methods=["PUT"])
@login_required
def updateTest():
    """
    Toggle unseen tests to be seen
    """

    tests_to_update = request.json["unseenTests"]
    clientId = request.json["clientId"]

    for test in tests_to_update:
        test_to_update = Test.query.get(test["id"])
        test_to_update.userSeen = True
        db.session.add(test_to_update)

    db.session.commit()

    client_with_updated_tests = Client.query.get(clientId)

    return client_with_updated_tests.to_dict()


@test_routes.route("/<int:clientId>/<int:testId>", methods=["DELETE"])
@login_required
def deleteTest(clientId, testId):
    """
    Deletes a test
    """
    test_to_delete = Test.query.get(testId)
    if test_to_delete:
        db.session.delete(test_to_delete)
        db.session.commit()

        client_w_test = Client.query.get(clientId)
        return client_w_test.to_dict()
    else:
        print(f"-------- no test found with id {testId} -------- ")
        return {"errors": "No test found with given id"}