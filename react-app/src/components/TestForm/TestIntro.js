export default function TestIntro({ length }) {
  return (
    <div className='site__sub-section flex-dir-col'>
      <p className='cntr-txt-sml-margin'>
        Thank you for taking {length} to complete this questionnaire!
      </p>
      <p className='cntr-txt-sml-margin'>
        Your therapist sent this link from eDOT to help measure and track your
        progress. Using these evidence based measurement tools can help equip
        you and your therapist to have better and quicker positive outcomes.
      </p>
    </div>
  );
}
