import Type from './Type';
import Access from './Access';
import Billing from './Billing';
import InvitationToSubscribe from './InvitationToSubscribe';
import NextPayment from './NextPayment';

export default function AccountDetails({ sessionUser }) {
  const { brand, last4, expMonth, expYear, nextBillDate } =
    sessionUser.customer || {}; // in case there isn't a customer attached yet.

  return (
    <div className='lft-align'>
      <Type subType={sessionUser.subType} />

      <Access subType={sessionUser.subType} />

      <Billing
        subType={sessionUser.subType}
        brand={brand}
        last4={last4}
        expMonth={expMonth}
        expYear={expYear}
      />

      {!sessionUser.subType && <InvitationToSubscribe />}
      {!!sessionUser.subType && <NextPayment nextBillDate={nextBillDate} />}
    </div>
  );
}
