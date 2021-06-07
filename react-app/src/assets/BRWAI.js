import { horizontalAnnotation, scaleAgreement } from './zUtils';

const SWLS = {
  abbr: 'BR-WAI',
  code: 'BRWAI',
  name: 'Satisfaction with Life Scale',
  description:
    "The SWLS is a short 5-item instrument designed to measure global cognitive judgments of satisfaction with one's life.",
  target: 'life satisfaction',
  link: 'http://labs.psychology.illinois.edu/~ediener/SWLS.html',
  instructions:
    'Below are five statements with which you may agree or disagree. Please be open and honest in your responding.',
  score:
    'Each of the options on the 7-point likert scale correspond with the numbers 1 - 7 (1 being "Strongly Disagree" and 7 being "Strongly Agree") respectively. Add up the points from each chosen response to get the total score.',
  interpretation:
    'Higher scores indicate higher levels of satisfaction with life as follows: 30 – 35 high satisfaction; 25 - 29 moderately high satisfaction; 20 – 24 average satisfaction; 15 – 19 below average satisfaction; 10 – 14 dissatisfaction; 5 – 9 extreme dissatisfaction.',
  selfAdmin: true,
  minMinutes: 0,
  maxMinutes: 1,
  attribution:
    'Developed by Ed Diener, Robert A. Emmons, Randy J. Larsen and Sharon Griffin.',
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
          5;
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
            max: 35,
            min: 5,
            stepSize: 5,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation('5', 'extreme dissatisfaction', 'transparent'),
        horizontalAnnotation('10', 'dissatisfaction'),
        horizontalAnnotation('15', 'below average satisfaction'),
        horizontalAnnotation('20', 'average satisfaction'),
        horizontalAnnotation('25', 'moderately high satisfaction'),
        horizontalAnnotation('30', 'high satisfaction'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions: 'How much do you agree or disagree with each statement?',
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem: 'In most ways my life is close to my ideal.',
          scale: scaleAgreement,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'The conditions of my life are excellent.',
          scale: scaleAgreement,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'I am satisfied with life.',
          scale: scaleAgreement,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'So far I have gotten the important things I want in life.',
          scale: scaleAgreement,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'If I could live my life over, I would change almost nothing.',
          scale: scaleAgreement,
        },
      ],
    },
  ],
};

export default SWLS;
