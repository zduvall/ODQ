from app.models import db, Test, Client, User
from datetime import datetime
import json


# Adds a demo user
def seed_tests():

    user = User.query.filter_by(firstName="Demo").first()
    client1 = Client.query.filter_by(code="JosS-01.08.21").first()
    client2 = Client.query.filter_by(code="DonT-01.06.21").first()

    tests = [
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "3",
                "s1q2": "2",
                "s1q3": "3",
                "s1q4": "2",
                "s1q5": "3",
                "s1q6": "2",
                "s1q7": "3",
                "s2q1": "3",
            },
            timeComp=datetime(2021, 1, 8, 11, 31, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "3",
                "s1q2": "3",
                "s1q3": "3",
                "s1q4": "2",
                "s1q5": "3",
                "s1q6": "3",
                "s1q7": "3",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 15, 8, 27, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "2",
                "s1q5": "2",
                "s1q6": "1",
                "s1q7": "2",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 22, 10, 15, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "2",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "2",
                "s1q5": "3",
                "s1q6": "1",
                "s1q7": "2",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 29, 11, 22, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "1",
                "s1q5": "2",
                "s1q6": "1",
                "s1q7": "1",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 5, 13, 1, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "1",
                "s1q3": "1",
                "s1q4": "1",
                "s1q5": "0",
                "s1q6": "1",
                "s1q7": "0",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 12, 10, 45, 0, 0),
        ),
    ]

    db.session.bulk_save_objects(tests)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the clients table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tests():
    db.session.execute("TRUNCATE tests RESTART IDENTITY CASCADE;")
    # db.session.execute("TRUNCATE tests CASCADE;")
    db.session.commit()
