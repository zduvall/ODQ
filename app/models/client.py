from .db import db


class Client(db.Model):
    __tablename__ = "clients"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    birthYear = db.Column(db.Integer, nullable=False)
    code = db.Column(db.String(15), unique=True, nullable=False)
    curClient = db.Column(db.Boolean, nullable=False)

    pro = db.relationship("User", back_populates="clients")
    tests = db.relationship(
        "Test", back_populates="client", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "birthYear": self.birthYear,
            "code": self.code,
            "curClient": self.curClient,
            "pro": self.pro.to_dict(),
            "tests": {test.id: test.to_dict() for test in self.tests},
            "lastTestTime": self.tests[-1].to_dict()["timeComp"]
            if self.tests
            else None,
            "unseenTests": [test.to_dict()["testCode"] for test in self.tests if not test.to_dict()["userSeen"]]
            if self.tests
            else False,
        }
