// import free tests
import { freeTests } from '../assets';

export default function checkPremium(code, subType) {

  if (!subType && !freeTests.includes(code)) {
    return false;
  }
  return true;
}
