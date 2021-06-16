// import free tests
import { freeTests } from '../assets';

export default function checkTestSubTypeAndStatus(code, subType) {
  const subStatus = {};

  if (!subType && !freeTests.includes(code)) {
    return false;
  }
  return true;
}

// I need to also make this check if the subscription is active
