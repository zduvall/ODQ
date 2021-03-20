// scales
export const scaleYesNo = [
  {
    value: 0,
    label: 'No',
  },
  {
    value: 1,
    label: 'Yes',
  },
];

export const scaleFrequency = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'Several days' },
  { value: 2, label: 'More than half the days' },
  { value: 3, label: 'Nearly every day' },
];

export const scaleDifficulty = [
  { value: 0, label: 'Not difficult at all' },
  { value: 1, label: 'Somewhat difficult' },
  { value: 2, label: 'Very Difficult' },
  { value: 3, label: 'Extremely Difficult' },
];

// for chart annotations
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
