from werkzeug.security import generate_password_hash
from app.models import db, Client, User


# Adds a demo user
def seed_clients():

    user1 = User.query.filter_by(firstName="Demo").first()
    user2 = User.query.filter_by(firstName="Demo2").first()

    clients = [
        Client(
            userId=user1.id,
            birthYear="1980",
            code="JonD-02.05.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1996",
            code="SuzQ-02.15.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1992",
            code="PauS-02.27.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1987",
            code="ZacD-03.05.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="2002",
            code="MckA-03.06.21",
            curClient=False,
        ),
        Client(
            userId=user2.id,
            birthYear="1900",
            code="DonT-03.06.21",
            curClient=True,
        ),
    ]

    db.session.bulk_save_objects(clients)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the clients table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_clients():
    db.session.execute("TRUNCATE clients RESTART IDENTITY CASCADE;")
    # db.session.execute("TRUNCATE clients CASCADE;")
    db.session.commit()
