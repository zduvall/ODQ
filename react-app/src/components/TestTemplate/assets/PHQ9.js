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
    'The Patient Health Questionnaire (PHQ) is a self-administered version of the PRIME-MD diagnostic instrument for common mental disorders. The PHQ-9 is the depression module, which scores each of the 9 DSM-IV criteria as “0” (not at all) to “3” (nearly every day)',
  link: 'https://www.phqscreeners.com/',
  instructions:
    'This questionnaire is an important part of providing you with the best health care possible. Your answers will help in understanding problems that you may have. Please answer every question to the best of your ability unless you are requested to skip over a question.',
  audience:
    'PHQ-9 has good reliability and validity, and high adaptability for patients with MDD in psychiatric hospital. It is a simple, rapid, effective, and reliable tool for screening and evaluation of the severity of depression.',
  score: '',
  interpretation: '',
  selfAdmin: true,
  minMinutes: 1,
  maxMinutes: 2,
  attribution:
    'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.',
  thankYou: 'Thank you for completing the PHQ-9.',
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
          stem: 'Little interest or pleasure in doing things',
          scale: scale1,
        },
        {
          id: 's1q2',
          type: 'Radio',
          stem: 'Feeling down, depressed, or hopeless',
          scale: scale1,
        },
        {
          id: 's1q3',
          type: 'Radio',
          stem: 'Trouble falling or staying asleep, or sleeping too much',
          scale: scale1,
        },
        {
          id: 's1q4',
          type: 'Radio',
          stem: 'Feeling tired or having little energy',
          scale: scale1,
        },
        {
          id: 's1q5',
          type: 'Radio',
          stem: 'Poor appetite or overeating',
          scale: scale1,
        },
        {
          id: 's1q6',
          type: 'Radio',
          stem:
            'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
          scale: scale1,
        },
        {
          id: 's1q7',
          type: 'Radio',
          stem:
            'Trouble concentrating on things, such as reading the newspaper or watching television',
          scale: scale1,
          pagebreak: true,
        },
        {
          id: 's1q8',
          type: 'Radio',
          stem:
            'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
          scale: scale1,
          pagebreak: true,
        },
        {
          id: 's1q9',
          type: 'Radio',
          stem:
            'Thoughts that you would be better off dead or of hurting yourself in some way',
          scale: scale1,
          pagebreak: true,
        },
      ],
    },
    {
      id: 2,
      instructions:
        'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
      scale: scale2,
      questions: [
        {
          id: 's2q1',
          type: 'Radio',
          stem: 'Please select the most accurate respose',
          scale: scale2,
        },
      ],
    },
  ],
};

export default PHQ9;
