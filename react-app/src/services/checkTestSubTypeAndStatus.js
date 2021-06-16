// import free tests
import { freeTests } from '../assets';

export default function checkTestSubTypeAndStatus(code, sessionUser) {
  const { subStatus, lastBillDate } = sessionUser.customer;

  // when they have an active subscription or it's a free test, just return true always
  if (subStatus === 'active' || freeTests.includes(code)) return true;

  const { subType } = sessionUser;

  // if the subscription type is not premium and the test is not free, false
  if (!subType && !freeTests.includes(code)) {
    return false;
  }
  // if the subscription type is premium and status is no longer active, they have one month of service from the last billing (so return false after 1 month)
  if (subType && subStatus !== 'active') {
    const endServiceDate = new Date(lastBillDate);
    endServiceDate.setMonth(endServiceDate.getMonth() + 1);

    if (new Date() > endServiceDate) {
      return false;
    }
  }
  // in all other cases (subscriptin isn't active, but it's been less than one month since last bill) default to true
  return true;
}

// I ordered these so the more time intensive condition (3rd if) is only run after other checks, so it doesn't run unnecessarily
