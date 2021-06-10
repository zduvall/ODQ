import { horizontalAnnotation, scaleFrequency2 } from './zUtils';

const LDQ = {
  abbr: 'LDQ',
  code: 'LDQ',
  name: 'Leeds Dependence Questionnaire',
  description:
    'The LDQ is a 10-item questionnaire designed to measure severity of dependence on any drug including alcohol.',
  target: 'substance dependence',
  link: 'https://www.result4addiction.net/compare-universal-dependence', // alternative: 'https://pubmed.ncbi.nlm.nih.gov/8044122/'
  instructions:
    'In answering this questionnaire think about the last month and your main substance groups. Please indicate the answers that are most appropriate to you.',
  score:
    'Scores of 0, 1, 2, and 3 are assigned to the response categories, respectively, of “Never,” “Sometimes,” “Often,” and “Nearly Always.” A total score on the LDQ for the ten items ranges from 0 to 30.',
  interpretation:
    'Dependence is a continuous data variable; however, suggested cut-off scores are: low dependence <=10; moderate dependence 11-20; severe dependence >=21. The reliable change score is >=4, and functional population scores are male <10 female <5.',
  selfAdmin: true,
  minMinutes: 2,
  maxMinutes: 5,
  attribution:
    'Raistrick, D., Bradshaw, J., Tober, G., et al. (1994) Development of the Leeds Dependence Questionnaire (LDQ): a questionnaire to measure alcohol and opiate dependence in the context of a treatment evaluation package. Addiction, 89, 563–72.',
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
          Number(res.s1q9) +
          Number(res.s1q10);
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
            max: 30,
            min: 0,
            stepSize: 5,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation('0', 'low dependence', 'transparent'),
        horizontalAnnotation('11', 'moderate dependence'),
        horizontalAnnotation('21', 'severe dependence'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions:
        'Think about your drinking and drug use over the last month...',
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem: 'Do you find yourself thinking about when you will next be able to have another drink or take drugs?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Is drinking or taking drugs more important than anything else you might do during the day?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'Do you feel that your need for drink or drugs is too strong to control?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Do you plan your days around getting and taking drink or drugs?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'Do you drink or take drugs in a particular way to increase the effect it gives you?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem: 'Do you drink or take drugs morning, afternoon and evening?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem: 'Do you feel you have to carry on drinking or taking drugs once you have started?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem: 'Is getting an effect more important than the particular drink or drug you take?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem: 'Do you want to take more drink or drugs when the effects start to wear off?',
          scale: scaleFrequency2,
        },
        {
          id: 's1q10',
          type: 'Radio',
          stem: 'Do you find it diffcult to cope with life without drink or drugs?',
          scale: scaleFrequency2,
        },
      ],
    },
  ],
};

export default LDQ;
