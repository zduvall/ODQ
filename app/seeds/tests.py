from app.models import db, Test, Client, User
from datetime import datetime, timedelta
import json
import random


# Adds a demo user
def seed_tests():

    user = User.query.filter_by(firstName="Demo").first()
    client_1 = Client.query.filter_by(code="JosS-01.08.21").first()
    jos_S_tests = [
        # GAD-7 ---------------------------------------------------------------
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="GAD7",
            res={
                "s1q1": "3",
                "s1q2": "2",
                "s1q3": "3",
                "s1q4": "3",
                "s1q5": "3",
                "s1q6": "2",
                "s1q7": "3",
                "s2q1": "3",
            },
            timeComp=datetime(2021, 1, 8, 11, 31, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
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
            clientId=client_1.id,
            testCode="GAD7",
            res={
                "s1q1": "2",
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
            clientId=client_1.id,
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
            clientId=client_1.id,
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
            clientId=client_1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "1",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "2",
                "s1q7": "0",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 12, 10, 45, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "3",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "2",
                "s1q7": "0",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 19, 10, 45, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="GAD7",
            res={
                "s1q1": "1",
                "s1q2": "1",
                "s1q3": "1",
                "s1q4": "1",
                "s1q5": "0",
                "s1q6": "1",
                "s1q7": "0",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 2, 26, 10, 45, 0, 0),
        ),
        # PHQ-9 ---------------------------------------------------------------
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "3",
                "s1q2": "3",
                "s1q3": "2",
                "s1q4": "2",
                "s1q5": "3",
                "s1q6": "3",
                "s1q7": "3",
                "s1q8": "3",
                "s1q9": "3",
                "s2q1": "3",
            },
            timeComp=datetime(2021, 1, 8, 11, 31, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "3",
                "s1q2": "3",
                "s1q3": "3",
                "s1q4": "2",
                "s1q5": "1",
                "s1q6": "3",
                "s1q7": "3",
                "s1q8": "2",
                "s1q9": "3",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 15, 8, 27, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "2",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "2",
                "s1q5": "2",
                "s1q6": "1",
                "s1q7": "2",
                "s1q8": "2",
                "s1q9": "1",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 22, 10, 15, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "2",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "2",
                "s1q5": "3",
                "s1q6": "2",
                "s1q7": "1",
                "s1q8": "3",
                "s1q9": "2",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 1, 29, 11, 22, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "3",
                "s1q2": "2",
                "s1q3": "2",
                "s1q4": "1",
                "s1q5": "2",
                "s1q6": "1",
                "s1q7": "2",
                "s1q8": "2",
                "s1q9": "1",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 5, 13, 1, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "1",
                "s1q2": "1",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "2",
                "s1q7": "2",
                "s1q8": "2",
                "s1q9": "0",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 12, 10, 45, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "1",
                "s1q2": "1",
                "s1q3": "1",
                "s1q4": "1",
                "s1q5": "3",
                "s1q6": "1",
                "s1q7": "2",
                "s1q8": "0",
                "s1q9": "1",
                "s2q1": "2",
            },
            timeComp=datetime(2021, 2, 19, 10, 45, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "1",
                "s1q2": "3",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "2",
                "s1q7": "2",
                "s1q8": "2",
                "s1q9": "1",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 2, 26, 10, 45, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "1",
                "s1q2": "2",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "1",
                "s1q7": "2",
                "s1q8": "1",
                "s1q9": "1",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 3, 5, 10, 11, 0, 0),
        ),
        Test(
            userId=user.id,
            clientId=client_1.id,
            testCode="PHQ9",
            res={
                "s1q1": "1",
                "s1q2": "2",
                "s1q3": "1",
                "s1q4": "2",
                "s1q5": "0",
                "s1q6": "1",
                "s1q7": "2",
                "s1q8": "1",
                "s1q9": "1",
                "s2q1": "1",
            },
            timeComp=datetime(2021, 3, 12, 11, 34, 0, 0),
        ),
    ]

    db.session.bulk_save_objects(jos_S_tests)

    clients = Client.query.all()

    codes = ["GAD7", "PHQ9"]

    test_template = {
        "GAD7": [
            "s1q1",
            "s1q2",
            "s1q3",
            "s1q4",
            "s1q5",
            "s1q6",
            "s1q7",
            "s2q1",
        ],
        "PHQ9": [
            "s1q1",
            "s1q2",
            "s1q3",
            "s1q4",
            "s1q5",
            "s1q6",
            "s1q7",
            "s1q8",
            "s1q9",
            "s2q1",
        ],
    }

    for client in clients:
        if client.code == client_1.code:
            continue

        tests = []

        rnd_code = random.choice(codes)

        yr = int("20" + client.code[-2:])
        mth = int(client.code[-8:-6])
        dy = int(client.code[-5:-3])
        start_date = datetime(yr, mth, dy, 8, 0, 0)

        rand_end = random.randrange(5, 12)
        for x in range(1, rand_end):

            min_scr = 2 if x == 1 else 1 if x < rand_end / 2 else 0
            max_scr = 3 if x < rand_end / 2 else 2

            tests.append(
                Test(
                    userId=user.id,
                    clientId=client.id,
                    testCode=rnd_code,
                    res={
                        key: random.randrange(min_scr, max_scr) for key in test_template[rnd_code]
                    },
                    timeComp=start_date + timedelta(days=7 * x),
                )
            )
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
