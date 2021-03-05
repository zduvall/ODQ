from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import db, Client
from app.forms import ClientForm

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


# @client_routes.route('/<int:id>')
# @login_required
# def client(id):
#     client = Client.query.get(id)
#     return client.to_dict()
