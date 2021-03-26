export async function createCustomer(billingEmail) {
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

// // if above doesn't work, switch to this -- using .then()

// function createCustomer() {
//   let billingEmail = document.querySelector('#email').value;
//   return fetch('/create-customer', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: billingEmail,
//     }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       // result.customer.id is used to map back to the customer object
//       return result;
//     });
// }
