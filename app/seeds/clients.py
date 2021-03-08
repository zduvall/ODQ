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
            code="JonD-12.13.20",
            curClient=False,
        ),
        Client(
            userId=user1.id,
            birthYear="1996",
            code="SuzQ-12.15.20",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1992",
            code="PauS-01.27.20",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1987",
            code="ZacD-02.05.20",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="2002",
            code="MckA-02.06.21",
            curClient=False,
        ),
        Client(
            userId=user1.id,
            birthYear="2012",
            code="AnnT-02.16.21",
            curClient=False,
        ),
        Client(
            userId=user1.id,
            birthYear="2007",
            code="BraM-02.19.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1968",
            code="ChaE-03.01.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1979",
            code="SarD-03.06.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1939",
            code="DonT-03.06.21",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="2010",
            code="JosS-03.08.21",
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
