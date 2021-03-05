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
            code="JonD020521",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1996",
            code="SuzQ021521",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1992",
            code="PauS022721",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="1987",
            code="ZacD030521",
            curClient=True,
        ),
        Client(
            userId=user1.id,
            birthYear="2002",
            code="MckA030621",
            curClient=True,
        ),
        Client(
            userId=user2.id,
            birthYear="1900",
            code="DonT030621",
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
