import ACE from './ACE';
import GAD7 from './GAD7';
import PHQ9 from './PHQ9';

const tests = { ACE, GAD7, PHQ9 };

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
