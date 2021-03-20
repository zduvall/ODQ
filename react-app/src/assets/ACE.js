import { horizontalAnnotation, scaleYesNo, scaleDifficulty } from './zUtils';

const ACE = {
  id: 3,
  abbr: 'ACE',
  code: 'ACE',
  name: 'Adverse Childhood Experience Questionnaire',
  description:
    'A 10-item self-administered test used to identify childhood experiences of abuse and neglect. Research behind the ACE questionnaire found that childhood trauma and stress early in life can impoair social, emotional, and cognitive development, and correlate with a higher liklihood of developing general health problems in adulthood.',
  link: 'https://www.cdc.gov/violenceprevention/aces/index.html',
  instructions:
    'This Questionnaire will be asking you some questions about events that happened during your childhood; specifically the first 18 years of your life. The information you provide by answering these questions will allow us to better understand problems that may have occurred early in your life and allow us to explore how those problems may be impacting the challenges you are experiencing today. This can be very helpful in the success of your treatment.',
  audience:
    'The ACE is a reliable, valid and economic screen for retrospective assessment of adverse childhood experiences. It Has adequate internal consistency (Cronbach’s alpha = .88).',
  score:
    'For each question a "yes" answer is worth 1 point and a "no" answer is worth 0 points. At the end, the points for all questions is added up out of a maximum of 10 points.',
  interpretation:
    'The higher the ACE Score, the greater the likelihood that a person will develop one or more of various physical, social, mental, and behavioral problems',
  selfAdmin: true,
  minMinutes: 3,
  maxMinutes: 5,
  attribution:
    'The original ACE study was a joint effort between the Centers for Disease Control and Prevention (CDC) and Kaiser Permanente in San Diego, California.',
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
            max: 10,
            min: 0,
            stepSize: 2,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation(
          '0',
          'Score of 0: 37.6% (general pop.)',
          'transparent'
        ),
        horizontalAnnotation('1', 'Score of 1: 22.7%'),
        horizontalAnnotation('2', 'Score of 2: 12.9%'),
        horizontalAnnotation('3', 'Score of 3: 9%'),
        horizontalAnnotation('4', 'Score of 4+: 17.8%'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions:
        'While you were growing up, during your first 18 years of life:',
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem:
            'Did a parent or other adult in the household often (1) swear at you, insult you, put you down, or humiliate you? and/or (2) act in a way that made you afraid that you might be physically hurt?',
          scale: scaleYesNo,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem:
            'Did a parent or other adult in the household often (1) push, grab, slap, or throw something at you? and/or (2) ever hit you so hard that you had marks or were injured?',
          scale: scaleYesNo,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem:
            'Did an adult or person at least 5 years older than you ever (1) touch or fondle you or have you touch their body in a sexual way? and/or (2) or try to or actually have oral, anal, or vaginal sex with you?',
          scale: scaleYesNo,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem:
            'Did you often feel that (1) no one in your family loved you or thought you were important or special? and/or (2) your family didn’t look out for each other, feel close to each other, or support each other?',
          scale: scaleYesNo,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem:
            'Did you often feel that (1) you didn’t have enough to eat, had to wear dirty clothes, and had no one to protect you? and/or (2) your parents were too drunk or high to take care of you or take you to the doctor if you needed it?',
          scale: scaleYesNo,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem: 'Were your parents ever separated or divorced?',
          scale: scaleYesNo,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem:
            'Were any of your parents or other adult caregivers: (1) often pushed, grabbed, slapped, or had something thrown at them? and/or (2) sometimes or often kicked, bitten, hit with a fist, or hit with something hard? and/or (3) ever repeatedly hit over at least a few minutes or threatened with a gun or knife?',
          scale: scaleYesNo,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem:
            'Did you live with anyone who was a problem drinker or alcoholic or who used street drugs?',
          scale: scaleYesNo,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem:
            'Was a household member depressed or mentally ill or did a household member attempt suicide?',
          scale: scaleYesNo,
        },
        {
          id: 's1q10',
          type: 'Radio',
          stem: 'Did a household member go to prison?',
          scale: scaleYesNo,
        },
      ],
    },
  ],
};

export default ACE;
