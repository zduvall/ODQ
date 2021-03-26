export default async function createCustomer(billingEmail) {
  const res = fetch('/create-customer', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: billingEmail,
    }),
  });
  const { customer } = res.json();
  return customer;
}
