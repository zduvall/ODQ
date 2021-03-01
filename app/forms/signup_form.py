from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    data = field.data
    user = User.query.filter(User.email == data or User.username == data).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(message='Username must be between 1 and 30 characters.'),user_exists])
    email = StringField('email', validators=[DataRequired(message='Must input valid email!'), user_exists])
    password = StringField('password', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    stateAbbr = StringField('stateAbbr', validators=[DataRequired(), Length(
        min=2, max=2, message='Must provide a state abbreviation.')])
