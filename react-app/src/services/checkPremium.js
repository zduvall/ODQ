// import free tests
import { freeTests } from '../assets';

export default function checkPremium(code, premium = true) {
  if (!premium && !freeTests.includes(code)) {
    return false;
  }
  return true;
}
