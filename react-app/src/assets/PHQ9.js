import {
  horizontalAnnotation,
  scaleFrequency,
  scaleDifficulty,
} from './zUtils';

const PHQ9 = {
  id: 2,
  abbr: 'PHQ-9',
  code: 'PHQ9',
  name: 'Patient Health Questionnaire-9',
  description:
    'A 9-item self-administered test used to assess the severity of major depressive disorder. Each item asks the individual to rate the severity of his or her symptoms over the past two weeks. Response options include "not at all", "several days", "more than half the days" and "nearly every day".',
  target: 'depression',
  link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1495268/',
  instructions:
    'This questionnaire is an important part of providing you with the best health care possible. Your answers will help in understanding problems that you may have. Please answer every question to the best of your ability unless you are requested to skip over a question.',
  score:
    'Scores of 0, 1, 2, and 3 are assigned to the response categories, respectively, of “not at all,” “several days,” “more than half the days,” and “nearly every day.” PHQ-9 total score for the 9 items ranges from 0 to 27.',
  interpretation:
    '0-4: minimal depression, 5-9: mild depression, 10-14: moderate depression, 15-19: moderately severe depression, 20-27: severe depression',
  selfAdmin: true,
  minMinutes: 1,
  maxMinutes: 3,
  attribution:
    'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc.',
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
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem: 'Little interest or pleasure in doing things?',
          scale: scaleFrequency,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Feeling down, depressed, or hopeless?',
          scale: scaleFrequency,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'Trouble falling or staying asleep, or sleeping too much?',
          scale: scaleFrequency,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Feeling tired or having little energy?',
          scale: scaleFrequency,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'Poor appetite or overeating?',
          scale: scaleFrequency,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down?',
          scale: scaleFrequency,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
          scale: scaleFrequency,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?',
          scale: scaleFrequency,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem: 'Thoughts that you would be better off dead or of hurting yourself in some way?',
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
          stem: 'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
          scale: scaleDifficulty,
        },
      ],
    },
  ],
};

export default PHQ9;
