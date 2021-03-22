import { horizontalAnnotation, scaleIntensity } from './zUtils';

const PCL5 = {
  id: 4,
  abbr: 'PCL-5',
  code: 'PCL5',
  name: 'PTSD Checklist for DSM-5',
  description:
    'The PCL-5 is a 20-item self-report measure that assesses the 20 DSM-5 symptoms of PTSD. The PCL-5 has a variety of purposes, including: (1) monitoring symptom change during and after treatment, (2) screening individuals for PTSD, and (3) making a provisional PTSD diagnosis. \n \n The gold standard for diagnosing PTSD is a structured clinical interview such as the Clinician-Administered PTSD Scale (CAPS-5). When necessary, the PCL-5 can be scored to provide a provisional PTSD diagnosis.',
  link: 'https://www.cdc.gov/violenceprevention/aces/index.html',
  instructions:
    'Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem carefully and then choose the most appropriate response to indicate how much you have been bothered by that problem in the past month.',
  score:
    'A total symptom severity score (range: 0 - 80) can be obtained by summing the scores for each of the 20 items. \n \n DSM-5 symptom cluster severity scores can be obtained by summing the scores for the items within a given cluster, i.e., cluster B (items 1-5), cluster C (items 6-7), cluster D (items 8-14), and cluster E (items 15-20).',
  interpretation:
    'A provisional PTSD diagnosis can be made by treating each item rated as 2 = "Moderately" or higher as a symptom endorsed, then following the DSM-5 diagnostic rule which requires at least: 1 B item (questions 1-5), 1 C item (questions 6-7), 2 D items (questions 8-14), 2 E items (questions 15-20). \n \n Initial research suggests that a PCL-5 cutoff score between 31-33 is indicative of probable PTSD across samples. However, additional research is needed. Further, because the population and the purpose of the screening may warrant different cutoff scores, users are encouraged to consider both of these factors when choosing a cutoff score.',
  selfAdmin: true,
  minMinutes: 5,
  maxMinutes: 10,
  attribution:
    "This measure was developed by staff at VA's National Center for PTSD and is in the public domain and not copyrighted. In accordance with the American Psychological Associations ethical guidelines, this instrument is intended for use by qualified health professionals and researchers.",
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
          Number(res.s1q10) +
          Number(res.s1q11) +
          Number(res.s1q12) +
          Number(res.s1q13) +
          Number(res.s1q14) +
          Number(res.s1q15) +
          Number(res.s1q16) +
          Number(res.s1q17) +
          Number(res.s1q18) +
          Number(res.s1q19) +
          Number(res.s1q20);
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
            max: 80,
            min: 0,
            stepSize: 10,
          },
        },
      ],
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [
        horizontalAnnotation('31', ''),
        horizontalAnnotation('32', ''),
        horizontalAnnotation('33', 'Probable PTSD (see instructions)'),
      ],
    },
  },
  sections: [
    {
      id: 1,
      instructions: 'In the past month, how much were you bothered by:',
      questions: [
        {
          id: 's1q1',
          type: 'Radio',
          stem:
            'Repeated, disturbing, and unwanted memories of the stressful experience?',
          scale: scaleIntensity,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Repeated, disturbing dreams of the stressful experience?',
          scale: scaleIntensity,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem:
            'Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?',
          scale: scaleIntensity,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem:
            'Feeling very upset when something reminded you of the stressful experience?',
          scale: scaleIntensity,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem:
            'Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?',
          scale: scaleIntensity,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem:
            'Avoiding memories, thoughts, or feelings related to the stressful experience?',
          scale: scaleIntensity,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem:
            'Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?',
          scale: scaleIntensity,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem:
            'Trouble remembering important parts of the stressful experience?',
          scale: scaleIntensity,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem:
            'Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?',
          scale: scaleIntensity,
        },
        {
          id: 's1q10',
          type: 'Radio',
          stem:
            'Blaming yourself or someone else for the stressful experience or what happened after it?',
          scale: scaleIntensity,
        },
        {
          id: 's1q11',
          type: 'Radio',
          stem:
            'Having strong negative feelings such as fear, horror, anger, guilt, or shame?',
          scale: scaleIntensity,
        },
        {
          id: 's1q12',
          type: 'Radio',
          stem: 'Loss of interest in activities that you used to enjoy?',
          scale: scaleIntensity,
        },
        {
          id: 's1q13',
          type: 'Radio',
          stem: 'Feeling distant or cut off from other people?',
          scale: scaleIntensity,
        },
        {
          id: 's1q14',
          type: 'Radio',
          stem:
            'Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?',
          scale: scaleIntensity,
        },
        {
          id: 's1q15',
          type: 'Radio',
          stem: 'Irritable behavior, angry outbursts, or acting aggressively?',
          scale: scaleIntensity,
        },
        {
          id: 's1q16',
          type: 'Radio',
          stem:
            ' Taking too many risks or doing things that could cause you harm?',
          scale: scaleIntensity,
        },
        {
          id: 's1q17',
          type: 'Radio',
          stem: 'Being “superalert” or watchful or on guard?',
          scale: scaleIntensity,
        },
        {
          id: 's1q18',
          type: 'Radio',
          stem: 'Feeling jumpy or easily startled?',
          scale: scaleIntensity,
        },
        {
          id: 's1q19',
          type: 'Radio',
          stem: 'Having difficulty concentrating?',
          scale: scaleIntensity,
        },
        {
          id: 's1q20',
          type: 'Radio',
          stem: 'Trouble falling or staying asleep?',
          scale: scaleIntensity,
        },
      ],
    },
  ],
};

export default PCL5;
