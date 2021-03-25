// import free tests
import { freeTests } from '../assets';

export default function checkPremium(premium, code) {

  if (!premium && !freeTests.includes(code)) {
    return false;
  }
  return true;
}
