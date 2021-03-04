from flask import Blueprint, jsonify, session, request
from flask_login import login_required

from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms import UpdateUserForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint("auth", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            # errorMessages.append(f"{field} : {error}")
            errorMessages.append(error)
    return errorMessages


@auth_routes.route("/")
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {"errors": ["Unauthorized"]}, 401


@auth_routes.route("/login", methods=["POST"])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually so validate_on_submit can be used
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data["email"]).first()
        login_user(user)
        return user.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route("/logout")
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {"message": "User logged out"}


@auth_routes.route("/signup", methods=["POST"])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        user = User(
            firstName=form.data["firstName"],
            lastName=form.data["lastName"],
            email=form.data["email"],
            password=form.data["password"],
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route("/signup/<userId>", methods=["PUT"])
# @login_required
def update(userId):
    """
    Updates User Info
    """
    form = UpdateUserForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    user_to_update = User.query.get(userId)

    user_to_update.firstName = form.data["firstName"],
    user_to_update.lastName = form.data["lastName"],
    user_to_update.email = form.data["email"],
    # user_to_update.password = form.data["password"],
    user_to_update.lic = form.data["lic"],
    user_to_update.pxName = form.data["pxName"],
    user_to_update.phone = form.data["phone"],

    if form.validate_on_submit():
        db.session.add(user_to_update)
        db.session.commit()
        # login_user(user)
        return user_to_update.to_dict()

    print("-------errors-------", form.errors)
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route("/unauthorized")
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {"errors": ["Unauthorized"]}, 401
