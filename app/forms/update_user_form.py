import phonenumbers

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def validate_phone(form, phone):
    if not phone.data:
        return
    try:
        p = phonenumbers.parse(phone.data)
        if not phonenumbers.is_valid_number(p):
            raise ValueError()
    except (phonenumbers.phonenumberutil.NumberParseException, ValueError):
        raise ValidationError("Please ensure phone number is valid")


class UpdateUserForm(FlaskForm):
    firstName = StringField(
        "firstName",
        validators=[
            DataRequired(message="Please provide a first name."),
            Length(
                min=1, max=50, message="First name must be between 1 and 50 characters."
            ),
        ],
    )
    lastName = StringField(
        "lastName",
        validators=[
            DataRequired(message="Please provide a last name."),
            Length(
                min=1, max=50, message="Last name must be between 1 and 50 characters."
            ),
        ],
    )
    email = StringField(
        "email",
        validators=[
            DataRequired(message="Please ensure email is valid."),
            Email(message="Please ensure email is valid."),
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
                # min=1,
                max=20,
                message="Please limit license to 20 characters.",
            )
        ],
    )
    pxName = StringField(
        "pxName",
        validators=[
            Length(
                # min=1,
                max=100,
                message="Please limit practice name to 100 characters.",
            )
        ],
    )
    phone = StringField(
        "phone",
        validators=[validate_phone],
    )
