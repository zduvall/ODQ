from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import Test, db
from app.forms import TestForm
from .auth_routes import validation_errors_to_error_messages

test_routes = Blueprint("tests", __name__)


# @test_routes.route("/<int:userId>")
# @login_required
# def getClients(userId):
#     """
#     Gets all clients of the identified (logged-in) user
#     """
#     clients = Client.query.filter_by(userId=userId).all()
#     return {"clients": [client.to_dict() for client in clients]}


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
        print(new_test)
    #     db.session.add(new_test)
    #     db.session.commit()
    #     return new_test.to_dict()

    # print("-------errors-------", form.errors)
    # return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @test_routes.route("/<int:clientId>", methods=["PUT"])
# @login_required
# def updateClient(clientId):
#     """
#     Update a client
#     """
#     form = ClientForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]

#     if form.validate_on_submit():

#         client_to_update = Client.query.get(clientId)

#         client_to_update.userId = form.data["userId"]
#         client_to_update.birthYear = form.data["birthYear"]
#         client_to_update.code = form.data["code"]
#         client_to_update.curClient = form.data["curClient"]

#         db.session.add(client_to_update)
#         db.session.commit()
#         return client_to_update.to_dict()

#     print("-------errors-------", form.errors)
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @test_routes.route("/<int:clientId>", methods=["DELETE"])
# @login_required
# def deleteClient(clientId):
#     """
#     Deletes a client
#     """
#     client_to_delete = Client.query.get(clientId)
#     if client_to_delete:
#         db.session.delete(client_to_delete)
#         db.session.commit()
#         return "deleted"
#     else:
#         print(f"-------- no client found with id {clientId} -------- ")
#         return {"errors": "No client found with given id"}