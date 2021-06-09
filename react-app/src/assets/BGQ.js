import { horizontalAnnotation, scaleFrequency2 } from './zUtils';

const BGQ = {
  abbr: 'BGQ',
  code: 'BGQ',
  name: 'Brief Grief Questionnaire',
  description:
    'The BCQ is a 5-item self-report or interview instrument for screening complicated grief. The BCQ is particularly useful for clinicians or programs looking to measure the extent of complicated grief symptoms before, during and after an intervention. .',
  target: 'substance dependence',
  link: 'https://socialsuitehq.com/product/brief-grief-questionnaire-bgq/',
  instructions:
    'Please indicate the answers that are most appropriate to you based on the scale provided.',
  score:
    'The BGQ scale ranges from 0 to 2, with 0 = “Not at all”, 1 = “Somewhat”, and 2 = “A lot”.',
  interpretation:
    'A score of 5 or more may be suggestive of the presence of complicated grief; however, a full evaluation by a clinician is necessary to make this diagnosis.',
  selfAdmin: true,
  minMinutes: 2,
  maxMinutes: 5,
  attribution: 'Dr Katherine Shear, Dr Susan Essock',
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
        horizontalAnnotation('1', 'low dependence', 'transparent'),
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

export default BGQ;
