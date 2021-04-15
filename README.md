# [eDOT](https://edot.herokuapp.com/)

![Welcome to eDOT](https://dot-aws.s3-us-west-1.amazonaws.com/edot-preview-small.png)

**[Electronic Diagnostic and Outcome Testing](https://edot.herokuapp.com/)** for therapists and other helping professionals. A web application to allow users to diagnose and track client progress using evidence based diagnostic and outcome questionnaires.

Try the live site [here](https://edot.herokuapp.com/) and check out a [demo video](https://youtu.be/56xb_IM6Nfs) on YouTube.

Visit the [site wiki](https://github.com/zduvall/eDOT/wiki) to see the database schema, routes, user stories, and feature list.

[![Contributors](https://img.shields.io/github/contributors/zduvall/eDOT?style=for-the-badge)](https://www.github.com/zduvall/eDOT/contributors)
[![Open Issues](https://img.shields.io/github/issues/zduvall/eDOT?style=for-the-badge)](https://www.github.com/zduvall/eDOT/issues)
[![Stars](https://img.shields.io/github/stars/zduvall/eDOT?style=for-the-badge)](https://www.github.com/zduvall/eDOT/stargazers)

## Tech Stack

### [eDOT](https://eDOT.herokuapp.com/) uses the following tools, frameworks, and key packages:

- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [Chart.js](https://www.chartjs.org/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [Flask-Login](https://flask-login.readthedocs.io/en/latest/)
- [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/#)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [Heroku](https://dashboard.heroku.com/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/))
- [React](https://reactjs.org/)
- [React ChartJS](https://reactchartjs.github.io/react-chartjs-2/#/)
- [React StripeJS](https://stripe.com/docs/stripe-js/react)
- [Redux](https://react-redux.js.org/)
- [Stripe API](https://stripe.com/docs/api)

## Code Snippets

Here is the code that verifies if a URL for a client to take a test is valid.

It checks by verifying that (1) the hashed portion of the url is accurate, (2) the client is associated with the user, and (3) the user has access to the test if it is a premium test.

```js
useEffect(() => {
  const expectedEncURL = CryptoJS.SHA3(`${clientId}x$${testCode}%-${userId}5z`)
    .toString()
    .slice(0, 15);

  if (expectedEncURL !== encURL) {
    setValidUrl(false);
    return;
  }

  async function checkValidUserClientCombo() {
    const res = await fetch(
      `/api/clients/check-test-link/${userId}/${clientId}/${testCode}`
    );
    const validUCCombo = await res.json();
    if (res.ok) setValidUrl(validUCCombo);
  }
  checkValidUserClientCombo();
}, [userId, clientId, encURL, testCode]);
```

Here is the associated backend api route:

```py
@client_routes.route("/check-test-link/<int:userId>/<int:clientId>/<path:testCode>")
def checkClientAndPro(userId, clientId, testCode):
    """
    Used to confirm that a test link is valid (url for connected client and professional)
    """

    client = Client.query.get(clientId)

    freeTests = ["ACE", "SWLS"]
    user = User.query.get(userId)
    if not user.subType and testCode not in freeTests:
        return json.dumps(False)

    if client:
        validUrl = client.pro.id == userId
        return json.dumps(validUrl)
    return json.dumps(False)
```

If all of those validations pass, the person attempting to complete the test must also verify their birth year (to make sure the right person is taking the test). They have 5 attempts:

```js
async function handleSubmit(e) {
  e.preventDefault();
  if (!year) {
    setWrongYear(true);
    setAttempts((prev) => prev - 1);
    return;
  }
  const res = await fetch(`/api/clients/check-year/${clientId}/${year}`);
  const validated = await res.json();
  if (validated) {
    setShowTest(true);
  } else {
    setAttempts((prev) => prev - 1);
    setWrongYear(true);
  }
}
```

Here is the associated backend code:

```py
@client_routes.route("/check-year/<int:clientId>/<int:yearToCheck>")
def checkBirthYear(clientId, yearToCheck):
    """
    Checks if birth year sent in body matches birth year of client
    """

    client = Client.query.get(clientId)

    validated = client.birthYear == yearToCheck
    return json.dumps(validated)
```
