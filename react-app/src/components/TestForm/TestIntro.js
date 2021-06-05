export default function TestIntro({ length }) {
  return (
    <div className='site__sub-section flex-dir-col'>
      <p className='cntr-txt-sml-margin'>
        Thank you for taking {length} to complete this questionnaire!
      </p>
      <p className='cntr-txt-sml-margin'>
        Your mental health provider sent this from eDOT to help measure and
        track your progress. Using evidence-based tools like this can help you
        reach better and quicker positive outcomes and equip your provider to
        best help you.
      </p>
    </div>
  );
}
