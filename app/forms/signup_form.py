from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    data = field.data
    user = User.query.filter(User.email == data).first()
    if user:
        raise ValidationError(f"A user is already registered with the email {data}")


class SignUpForm(FlaskForm):
    firstName = StringField(
        "firstName",
        validators=[
            DataRequired(message="Please provide a first name"),
            Length(
                min=1, max=50, message="Please limit first name to 50 characters"
            ),
        ],
    )
    lastName = StringField(
        "lastName",
        validators=[
            DataRequired(message="Please provide a last name"),
            Length(
                min=1, max=50, message="Please limit last name to 50 characters"
            ),
        ],
    )
    email = StringField(
        "email",
        validators=[
            DataRequired(message="Please ensure email is valid"),
            Email(message="Please ensure email is valid"),
            user_exists,
        ],
    )
    password = StringField(
        "password", validators=[DataRequired(message="Please ensure passowrd fields match")]
    )
