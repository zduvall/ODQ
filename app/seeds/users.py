from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user
def seed_users():

    users = [
        User(
            username="Demo",
            email="demo@aa.io",
            password="password",
            city="Salt Lake",
            stateAbbr="UT",
        ),
        User(
            username="Demo2",
            email="demo2@aa.io",
            password="password",
            city="Provo",
            stateAbbr="UT",
        ),
    ]

    db.session.bulk_save_objects(users)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute("TRUNCATE users CASCADE;")
    db.session.commit()
