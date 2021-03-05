from datetime import date

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError, Length


def validate_year(form, birthYear):
    year = date.today().year
    try:
        if birthYear > year:
            raise ValueError()
    except (ValueError):
        raise ValidationError("Please provide a valid birth year")


class ClientForm(FlaskForm):
    userId = IntegerField(
        "userId", validators=[DataRequired(message="Please associate a professional.")]
    )
    birthYear = IntegerField(
        "birthYear",
        validators=[
            DataRequired(message="Please provide a birth year"),
            NumberRange(min=1900, message="Please provide a birth year after 1900"),
        ],
    )
    code = StringField(
        "code",
        validators=[
            DataRequired(message="Please provide a client code."),
            Length(max=10, message="Please limit client code to 10 characters."),
        ],
    )
    curClient = BooleanField("curClient", default=True)
