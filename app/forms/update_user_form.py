import phonenumbers

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def validate_phone(form, field):
    if len(field.data) > 16:
        raise ValidationError("Invalid phone number.")
    try:
        input_number = phonenumbers.parse(field.data)
        if not (phonenumbers.is_valid_number(input_number)):
            raise ValidationError("Invalid phone number.")
    except:
        input_number = phonenumbers.parse("+1" + field.data)
        if not (phonenumbers.is_valid_number(input_number)):
            raise ValidationError("Invalid phone number.")


class UpdateUserForm(FlaskForm):
    firstName = StringField(
        "firstName",
        validators=[
            # DataRequired(message="First Name cannot be empty."),
            Length(
                min=1, max=50, message="First name must be between 1 and 50 characters."
            ),
        ],
    )
    lastName = StringField(
        "lastName",
        validators=[
            # DataRequired(message="Last Name cannot be empty."),
            Length(
                min=1, max=50, message="Last name must be between 1 and 50 characters."
            ),
        ],
    )
    email = StringField(
        "email",
        validators=[
            # DataRequired(message="Please ensure email is valid."),
            Email(message="Please ensure email is valid."),
            user_exists,
        ],
    )
    # password = StringField(
    #     "password"
    #     # "password", validators=[DataRequired(message="Please ensure passowrd fields match.")]
    # )
    lic = StringField(
        "lic",
        validators=[
            Length(
                min=1,
                max=10,
                message="License abbreviation must be between 1 and 10 characters.",
            )
        ],
    )
    pxName = StringField(
        "pxName",
        validators=[
            Length(
                min=1,
                max=100,
                message="Practice name must be between 1 and 100 characters.",
            )
        ],
    )
    phone = StringField(
        "pxName",
        validators=[validate_phone],
    )
