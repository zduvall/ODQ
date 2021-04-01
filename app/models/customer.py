from .db import db


class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # userId = db.Column(db.Integer, db.ForeignKey("users.id"), unique=True, nullable=False)
    stripeCustomerId = db.Column(db.String(255), unique=True, nullable=False)
    stripeSubscriptionId = db.Column(db.String(255), unique=True)

    user = db.relationship("User", back_populates="customer")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "stripeCustomerId": self.stripeCustomerId,
            "stripeSubscriptionId": self.stripeSubscriptionId,
        }
