from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, Length


class NewCustomerForm(FlaskForm):
    name = StringField(
        "name",
        validators=[
            DataRequired(message="Please provide a name"),
            Length(min=1, max=100, message="Please limit name to 100 characters"),
        ],
    )
    email = StringField(
        "email",
        validators=[
            DataRequired(message="Please ensure email is valid"),
            Email(message="Please ensure email is valid"),
        ],
    )
    city = StringField(
        "city",
        validators=[
            DataRequired(message="Please provide a city"),
            Length(min=1, max=100, message="Please limit city to 100 characters"),
        ],
    )
    line1 = StringField(
        "line1",
        validators=[
            DataRequired(message="Please provide an address"),
            Length(min=1, max=100, message="Please limit address to 100 characters"),
        ],
    )
    state = StringField(
        "state",
        validators=[
            DataRequired(message="Please provide a state"),
            Length(min=1, max=100, message="Please limit state to 100 characters"),
        ],
    )
    country = StringField(
        "country",
        validators=[
            DataRequired(message="Please provide a country"),
            Length(min=1, max=100, message="Please limit country to 100 characters"),
        ],
    )
    postal_code = StringField(
        "postal_code",
        validators=[
            DataRequired(message="Please provide a zip code"),
            Length(min=1, max=12, message="Please limit zip code to 12 characters"),
        ],
    )
    userId = IntegerField(
        "userId", validators=[DataRequired(message="Please associate a user")]
    )
