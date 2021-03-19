// import { horizontalAnnotation } from './index';
import {
  horizontalAnnotation,
  scaleFrequency,
  scaleDifficulty,
} from './zUtils';

// const scaleFrequency = [
//   { value: 0, label: 'Not at all' },
//   { value: 1, label: 'Several days' },
//   { value: 2, label: 'More than half the days' },
//   { value: 3, label: 'Nearly every day' },
// ];

// const scaleDifficulty = [
//   { value: 0, label: 'Not difficult at all' },
//   { value: 1, label: 'Somewhat difficult' },
//   { value: 2, label: 'Very Difficult' },
//   { value: 3, label: 'Extremely Difficult' },
// ];

const GAD7 = {
  id: 2,
  abbr: 'GAD-7',
  code: 'GAD7',
  name: 'Generalized Anxiety Disorder-7',
  description:
    'A 7-item self-administered test used to assess the severity of generalized anxiety disorder. Each item asks the individual to rate the severity of his or her symptoms over the past two weeks. Response options include "not at all", "several days", "more than half the days" and "nearly every day".',
  link: 'https://pubmed.ncbi.nlm.nih.gov/16717171/',
  instructions:
    'This questionnaire is an important part of providing you with the best health care possible. Your answers will help in understanding problems that you may have. Please answer every question to the best of your ability unless you are requested to skip over a question.',
  audience:
    'The GAD-7 has been validated for primary care patients, general population, and adolescents with GAD',
  score:
    'This is calculated by assigning scores of 0, 1, 2, and 3 to the response categories, respectively, of “not at all,” “several days,” “more than half the days,” and “nearly every day.” GAD-7 total score for the seven items ranges from 0 to 21.',
  interpretation:
    '0–4: minimal anxiety, 5–9: mild anxiety, 10–14: moderate anxiety, 15–21: severe anxiety ',
  selfAdmin: true,
  minMinutes: 1,
  maxMinutes: 2,
  attribution:
    'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.',
  thankYou: 'Thank you for completing the GAD-7.',
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
          Number(res.s1q7);
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
            max: 21,
            min: 0,
            stepSize: 3,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation('0', 'minimal anxiety', 'transparent'),
        horizontalAnnotation('5', 'mild anxiety'),
        horizontalAnnotation('10', 'moderate anxiety'),
        horizontalAnnotation('15', 'severe anxiety'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions:
        'Over the last 2 weeks, how often have you been bothered by the following problems?',
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem: 'Feeling nervous, anxious or on edge?',
          scale: scaleFrequency,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Not being able to stop or control worrying?',
          scale: scaleFrequency,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'Worrying too much about different things?',
          scale: scaleFrequency,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Trouble relaxing?',
          scale: scaleFrequency,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'Being so restless that it is hard to sit still?',
          scale: scaleFrequency,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem: 'Becoming easily annoyed or irritable?',
          scale: scaleFrequency,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem: 'Feeling afraid as if something awful might happen?',
          scale: scaleFrequency,
        },
      ],
    },
    {
      id: 2,
      instructions: 'Social impact:',
      questions: [
        {
          id: 's2q1',
          type: 'Radio',
          stem:
            'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
          scale: scaleDifficulty,
        },
      ],
    },
  ],
};

export default GAD7;
