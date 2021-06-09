import { horizontalAnnotation, scaleAgreement3 } from './zUtils';

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
          Number(res.s1q5);
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
          stem: 'How much are you having trouble accepting the death of ________________ ?',
          scale: scaleAgreement3,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'How much does your grief (sadness and longing) interfere with your life?',
          scale: scaleAgreement3,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'How much are you having images or thoughts of ________________ when s/he died or other images or thoughts about ________________ that really bother you?',
          scale: scaleAgreement3,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Are there things you used to do when ________________ was alive that you don’t feel comfortable doing anymore, that you avoid? Like going somewhere you went with him/her, or doing things you used to enjoy together? Or avoiding looking at pictures or talking about ________________ ? How much are you avoiding these things?',
          scale: scaleAgreement3,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'How much are you feeling cut off or distant from other people since ________________ died, even people you used to be close to like family or friends?',
          scale: scaleAgreement3,
        },
      ],
    },
  ],
};

export default BGQ;
