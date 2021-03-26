import os
import stripe

from flask import Blueprint, jsonify, request

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/account/apikeys

# set up stripe
stripe_keys = {
    "secret_key": os.environ["STRIPE_SECRET_KEY"],
    "publishable_key": os.environ["STRIPE_PUBLISHABLE_KEY"],
    "price_id": os.environ["STRIPE_PRICE_ID"],
}

stripe.api_key = stripe_keys["secret_key"]

payment_routes = Blueprint("payments", __name__)


@payment_routes.route("/config")
def get_publishable_key():
    stripe_config = {"publicKey": stripe_keys["publishable_key"]}
    return jsonify(stripe_config)


# from: https://stripe.com/docs/billing/subscriptions/fixed-price

# @payment_routes.route("/stripe-webhook", methods=["POST"])
# def webhook_received():
#     # You can use webhooks to receive information about asynchronous payment events.
#     # For more about our webhook events check out https://stripe.com/docs/webhooks.
#     webhook_secret = os.getenv("STRIPE_WEBHOOK_SECRET")
#     request_data = json.loads(request.data)

#     if webhook_secret:
#         # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
#         signature = request.headers.get("stripe-signature")
#         try:
#             event = stripe.Webhook.construct_event(
#                 payload=request.data, sig_header=signature, secret=webhook_secret
#             )
#             data = event["data"]
#         except Exception as e:
#             return e
#         # Get the type of webhook event sent - used to check the status of PaymentIntents.
#         event_type = event["type"]
#     else:
#         data = request_data["data"]
#         event_type = request_data["type"]

#     data_object = data["object"]

#     if event_type == "invoice.paid":
#         # Used to provision services after the trial has ended.
#         # The status of the invoice will show up as paid. Store the status in your
#         # database to reference when a user accesses your service to avoid hitting rate
#         # limits.
#         print(data)

#     if event_type == "invoice.payment_failed":
#         # If the payment fails or the customer does not have a valid payment method,
#         # an invoice.payment_failed event is sent, the subscription becomes past_due.
#         # Use this webhook to notify your user that their payment has
#         # failed and to retrieve new card details.
#         print(data)

#     if event_type == "customer.subscription.deleted":
#         # handle subscription cancelled automatically based
#         # upon your subscription settings. Or if the user cancels it.
#         print(data)

#     return jsonify({"status": "success"})
