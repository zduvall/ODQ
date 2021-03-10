from app.models import db, Client, User


# Adds a demo user
def seed_clients():

    user_1 = User.query.filter_by(firstName="Demo").first()

    clients = [
        Client(
            userId=user_1.id,
            birthYear="1992",
            code="JilX-11.27.19",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1992",
            code="PauS-06.23.20",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1987",
            code="ZacD-08.01.20",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1980",
            code="JonD-10.13.20",
            curClient=False,
        ),
        Client(
            userId=user_1.id,
            birthYear="1996",
            code="SuzQ-10.15.20",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="2002",
            code="MckA-12.06.20",
            curClient=False,
        ),
        Client(
            userId=user_1.id,
            birthYear="2012",
            code="AnnT-12.16.20",
            curClient=False,
        ),
        Client(
            userId=user_1.id,
            birthYear="2007",
            code="BraM-12.19.20",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1968",
            code="ChaE-01.01.21",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1979",
            code="SarD-01.06.21",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="1939",
            code="DonT-01.06.21",
            curClient=True,
        ),
        Client(
            userId=user_1.id,
            birthYear="2010",
            code="JosS-01.08.21",
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
