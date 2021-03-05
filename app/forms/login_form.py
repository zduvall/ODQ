from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def password_matches_and_user_exists(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data["email"]
    user = User.query.filter(User.email == email).first()
    if not user or not user.check_password(password):
        raise ValidationError("Invalid credentials. Please try again")


class LoginForm(FlaskForm):
    email = StringField("email", validators=[DataRequired()])
    password = StringField(
        "password", validators=[DataRequired(), password_matches_and_user_exists]
    )
