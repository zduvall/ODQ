import { horizontalAnnotation } from './index';

const scale1 = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'Several days' },
  { value: 2, label: 'More than half the days' },
  { value: 3, label: 'Nearly every day' },
];

const scale2 = [
  { value: 0, label: 'Not difficult at all' },
  { value: 1, label: 'Somewhat difficult' },
  { value: 2, label: 'Very Difficult' },
  { value: 3, label: 'Extremely Difficult' },
];

const PHQ9 = {
  id: 2,
  abbr: 'PHQ-9',
  code: 'PHQ9',
  name: 'Patient Health Questionnaire-9',
  description:
    'A 9-item self-administered test used to assess the severity of major depressive disorder. Each item asks the individual to rate the severity of his or her symptoms over the past two weeks. Response options include "not at all", "several days", "more than half the days" and "nearly every day".',
  link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1495268/',
  instructions:
    'This questionnaire is an important part of providing you with the best health care possible. Your answers will help in understanding problems that you may have. Please answer every question to the best of your ability unless you are requested to skip over a question.',
  audience:
    'PHQ-9 has good reliability and validity, and high adaptability for patients with MDD in psychiatric hospital. It is a simple, rapid, effective, and reliable tool for screening and evaluation of the severity of depression.',
  score: '',
  interpretation:
    '0-4: minimal depression, 5-9: mild depression, 10-14: moderate depression, 15-19: moderately severe depression, 20-27: severe depression',
  selfAdmin: true,
  minMinutes: 1,
  maxMinutes: 3,
  attribution:
    'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.',
  thankYou: 'Thank you for completing the PHQ-9.',
  chartData: {
    datapoints: (tests) => {
      const points = [];
      tests.forEach((test) => {
        const res = JSON.parse(test.res);
        const sumRes =
          Number(res.s1q1) +
          Number(res.s1q2) +
          Number(res.s1q3) +
          Number(res.s1q4) +
          Number(res.s1q5) +
          Number(res.s1q6) +
          Number(res.s1q7) +
          Number(res.s1q8) +
          Number(res.s1q9);
        points.push(sumRes);
      });
      return points;
    },
  },
  chartOptions: {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 27,
            min: 0,
            stepSize: 3,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation('0', 'minimal depression', 'transparent'),
        horizontalAnnotation('5', 'mild depression'),
        horizontalAnnotation('10', 'moderate depression'),
        horizontalAnnotation('15', 'moderately severe depression'),
        horizontalAnnotation('20', 'severe depression'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions:
        'Over the last 2 weeks, how often have you been bothered by the following problems?',
      scale: scale1,
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem: 'Little interest or pleasure in doing things?',
          scale: scale1,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Feeling down, depressed, or hopeless?',
          scale: scale1,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'Trouble falling or staying asleep, or sleeping too much?',
          scale: scale1,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Feeling tired or having little energy?',
          scale: scale1,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'Poor appetite or overeating?',
          scale: scale1,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem:
            'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?',
          scale: scale1,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem:
            'Trouble concentrating on things, such as reading the newspaper or watching television?',
          scale: scale1,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem:
            'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?',
          scale: scale1,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem:
            'Thoughts that you would be better off dead or of hurting yourself in some way?',
          scale: scale1,
        },
      ],
    },
    {
      id: 2,
      instructions: 'Social impact:',
      scale: scale2,
      questions: [
        {
          id: 's2q1',
          type: 'Radio',
          stem:
            'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
          scale: scale2,
        },
      ],
    },
  ],
};

export default PHQ9;
