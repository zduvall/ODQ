import Type from './Type';
import Access from './Access';
import Billing from './Billing';
import InvitationToSubscribe from './InvitationToSubscribe';
import NextPayment from './NextPayment';

export default function AccountDetails({ sessionUser }) {

  return (
    <div className='lft-align'>
      <Type subType={sessionUser.subType} />

      <Access subType={sessionUser.subType} />

      <Billing subType={sessionUser.subType} customer={sessionUser?.customer} />

      {!sessionUser.subType && <InvitationToSubscribe />}
      {!!sessionUser.subType && (
        <NextPayment nextBillDate={sessionUser?.customer?.nextBillDate} />
      )}
    </div>
  );
}
