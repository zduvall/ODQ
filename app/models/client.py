from .db import db


class Client(db.Model):
    __tablename__ = "clients"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    birthYear = db.Column(db.Integer, nullable=False)
    code = db.Column(db.String(15), nullable=False)
    curClient = db.Column(db.Boolean, nullable=False, default=True)

    pro = db.relationship("User", back_populates="clients")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "birthYear": self.birthYear,
            "code": self.code,
            "curClient": self.curClient,
            # "pro": self.pro.to_dict(),
        }
