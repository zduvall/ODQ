// import free tests
import { freeTests } from '../assets';

export default function checkTestAndSubType(code, subType) {
  if (!subType && !freeTests.includes(code)) {
    return false;
  }
  return true;
}

// I need to also make this check if the subscription is active
// also maybe I should rename this function? because it's also checking if a test (don't remember why)
