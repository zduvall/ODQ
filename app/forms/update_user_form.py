import phonenumbers

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


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
            # user_exists,
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
        "phone",
        # validators=[],
    )

    def validate_phone(self, phone):
        try:
            p = phonenumbers.parse(phone.data)
            if not phonenumbers.is_valid_number(p):
                raise ValueError()
        except (phonenumbers.phonenumberutil.NumberParseException, ValueError):
            raise ValidationError('Invalid phone number')
