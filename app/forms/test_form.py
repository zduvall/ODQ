import json
from datetime import date

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, ValidationError


def validate_code(form, testCode):
    valid_codes = ["ACE", "LDQ", "GAD7", "PCL5", "PHQ9", "SWLS"]
    if testCode.data not in valid_codes:
        raise ValidationError("Please provide a valid test code")


class JSONField(StringField):
    def _value(self):
        return json.dumps(self.data) if self.data else ""

    def process_formdata(self, valuelist):
        if valuelist:
            try:
                self.data = json.loads(valuelist[0])
            except ValueError:
                raise ValueError("This field contains invalid JSON")
        else:
            self.data = None

    def pre_validate(self, form):
        super().pre_validate(form)
        if self.data:
            try:
                json.dumps(self.data)
            except TypeError:
                raise ValueError("This field contains invalid JSON")


class TestForm(FlaskForm):
    userId = IntegerField(
        "userId", validators=[DataRequired(message="Please associate a professional")]
    )
    clientId = IntegerField(
        "userId", validators=[DataRequired(message="Please associate a client")]
    )
    testCode = StringField(
        "testCode",
        validators=[
            DataRequired(message="Please provide a test code"),
            validate_code,
        ],
    )
    res = JSONField("res")
    timeComp = DateTimeField("timeComp")
