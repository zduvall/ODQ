// import free tests
import { freeTests } from '../assets';

export default function checkSubType(code, subType) {

  if (!subType && !freeTests.includes(code)) {
    return false;
  }
  return true;
}
