from datetime import date

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import (
    DataRequired,
    ValidationError,
    Length,
    NumberRange,
    InputRequired,
    AnyOf
)


def validate_year(form, birthYear):
    year = date.today().year
    if birthYear.data > year:
        raise ValidationError("Please provide a valid birth year")


class MyBooleanField(BooleanField):
    def __init__(self, label=None, validators=None, false_values=None, **kwargs):
        # don't accept blank as False, so that default will trigger
        super(MyBooleanField, self).__init__(label, validators, (False, 'false', 0, '0'), **kwargs)

    def process_formdata(self, valuelist):
        if not valuelist or valuelist[0] == '' or valuelist[0] is None:
            self.data = self.default
        elif valuelist[0] in self.false_values:
            self.data = False
        else:
            self.data = True


class ClientForm(FlaskForm):
    userId = IntegerField(
        "userId", validators=[DataRequired(message="Please associate a professional")]
    )
    birthYear = IntegerField(
        "birthYear",
        validators=[
            DataRequired(message="Please provide a birth year"),
            NumberRange(min=1900, message="Please provide a birth year after 1900"),
            validate_year,
        ],
    )
    code = StringField(
        "code",
        validators=[
            DataRequired(message="Please provide a client code"),
            Length(max=15, message="Please limit client code to 10 characters"),
        ],
    )
    curClient = MyBooleanField(validators=[AnyOf([True, False], message='Must provide a client status')])
