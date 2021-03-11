import GAD7 from './GAD7';
import PHQ9 from './PHQ9';

const tests = { GAD7, PHQ9 };

export function horizontalAnnotation(yValue, title) {
  return {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: yValue,
    borderColor: 'rgb(32, 156, 238)',
    borderWidth: 1,
    borderDash: [2, 2],
    label: {
      yPadding: 0,
      xPadding: 0,
      backgroundColor: 'rgb(249, 252, 255)',
      cornerRadius: 10,
      fontColor: 'rgb(32, 156, 238)',
      enabled: true,
      fontStyle: 'normal',
      content: title,
    },
  };
}

export default tests;
