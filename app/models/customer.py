from .db import db


class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(
        db.Integer, db.ForeignKey("users.id"), unique=True, nullable=False
    )
    stripeCustomerId = db.Column(db.String(255), unique=True, nullable=False)
    stripeSubId = db.Column(db.String(255), unique=True)
    brand = db.Column(db.String(50))
    last4 = db.Column(db.Integer)
    expMonth = db.Column(db.Integer)
    expYear = db.Column(db.Integer)

    user = db.relationship("User", back_populates="customer")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "stripeCustomerId": self.stripeCustomerId,
            "stripeSubId": self.stripeSubId,
            "brand": self.brand,
            "last4": self.last4,
            "expMonth": self.expMonth,
            "expYear": self.expYear,
        }
