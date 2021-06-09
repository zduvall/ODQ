// scales
// ACE
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

// GAD-7 and PHQ-9
export const scaleFrequency = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'Several days' },
  { value: 2, label: 'More than half the days' },
  { value: 3, label: 'Nearly every day' },
];

export const scaleFrequency2 = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Sometimes' },
  { value: 2, label: 'Often' },
  { value: 3, label: 'Nearly Always' },
];

// PCL-5
export const scaleIntensity = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'A little bit' },
  { value: 2, label: 'Moderately' },
  { value: 3, label: 'Quite a bit' },
  { value: 4, label: 'Extremely' },
];

// GAD-7 and PHQ-9
export const scaleDifficulty = [
  { value: 0, label: 'Not difficult at all' },
  { value: 1, label: 'Somewhat difficult' },
  { value: 2, label: 'Very Difficult' },
  { value: 3, label: 'Extremely Difficult' },
];

// SWLS
export const scaleAgreement7 = [
  { value: 0, label: 'Strongly Disagree' },
  { value: 1, label: 'Disagree' },
  { value: 2, label: 'Slightly Disagree' },
  { value: 3, label: 'Neither Agree or Disagree' },
  { value: 4, label: 'Slightly Agree' },
  { value: 5, label: 'Agree' },
  { value: 6, label: 'Strongly Agree' },
];

// BGQ
export const scaleAgreement3 = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'Somewhat' },
  { value: 2, label: 'A lot' },
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
