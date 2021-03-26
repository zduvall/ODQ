from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user
def seed_users():

    demo = User(
        firstName="Demo",
        lastName="Pro",
        email="demo@edot.com",
        password="2345@#$%",
        lic="LCSW",
        pxName="Pro Counseling Demo LLC",
        phone="+18012401234",
        premium=True,
    )
    demo2 = User(
        firstName="Demo2",
        lastName="Pro",
        email="demo2@edot.com",
        password="2345",
    )

    db.session.add(demo)
    db.session.add(demo2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    # db.session.execute("TRUNCATE users CASCADE;")
    db.session.commit()
