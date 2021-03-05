from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import db, Client
from app.forms import ClientForm
from .auth_routes import validation_errors_to_error_messages

client_routes = Blueprint("clients", __name__)


@client_routes.route("/<int:userId>")
@login_required
def getClients(userId):
    """
    Gets all clients of the identified user
    """
    clients = Client.query.filter_by(userId=userId).all()
    return {"clients": [client.to_dict() for client in clients]}


@client_routes.route("/", methods=["POST"])
# @login_required
def createClient():
    """
    Creates a new client
    """
    form = ClientForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        client = Client(
            userId=form.data["userId"],
            birthYear=form.data["birthYear"],
            code=form.data["code"],
            curClient=form.data["curClient"],
        )
        db.session.add(client)
        db.session.commit()
        return client.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@client_routes.route("/<int:clientId>", methods=["PUT"])
# @login_required
def updateClient(clientId):
    """
    Update a client
    """
    form = ClientForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        client_to_update = Client.query.get(clientId)

        client_to_update.userId = form.data["userId"]
        client_to_update.birthYear = form.data["birthYear"]
        client_to_update.code = form.data["code"]
        client_to_update.curClient = form.data["curClient"]

        db.session.add(client_to_update)
        db.session.commit()
        return client_to_update.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@client_routes.route("/<int:clientId>", methods=["DELETE"])
@login_required
def deleteClient(clientId):
    """
    Deletes a client
    """
    client_to_delete = Client.query.get(clientId)
    if client_to_delete:
        db.session.delete(client_to_delete)
        db.session.commit()
        return "deleted"
    else:
        print(f"-------- no client found with id {clientId} -------- ")
        return {"errors": "No client found with given id"}


# @client_routes.route('/<int:id>')
# @login_required
# def client(id):
#     client = Client.query.get(id)
#     return client.to_dict()
