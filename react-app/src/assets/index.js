import ACE from './ACE';
import LDQ from './LDQ';
import GAD7 from './GAD7';
import PCL5 from './PCL5';
import PHQ9 from './PHQ9';
import SWLS from './SWLS';

// if add new tests, also update test_form.py
const tests = { ACE, LDQ, GAD7, PCL5, PHQ9, SWLS };
// if change free tests, also update client_routes.py
export const freeTests = [ACE.code, SWLS.code];

export function horizontalAnnotation(
  yValue,
  title,
  borderColor = 'rgb(32, 156, 238)'
) {
  return {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: yValue,
    borderColor,
    borderWidth: 1,
    borderDash: [2, 2],
    label: {
      yAdjust: -6,
      yPadding: 0,
      xPadding: 0,
      backgroundColor: 'transparent',
      cornerRadius: 10,
      fontColor: 'rgb(32, 156, 238)',
      enabled: true,
      fontStyle: 'normal',
      content: title,
    },
  };
}

export default tests;
