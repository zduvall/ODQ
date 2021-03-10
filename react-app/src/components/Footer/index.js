import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__text'>Designed & created by Zachary Duvall, LCSW</p>
      <i
        onClick={() =>
          window.open('https://www.linkedin.com/in/zachary-duvall/', '_blank')
        }
        title='https://www.linkedin.com/in/zachary-duvall/'
        className='fab fa-linkedin fa-lg footer__icon'
      ></i>
      <i
        onClick={() => window.open('https://github.com/zduvall', '_blank')}
        title='https://github.com/zduvall'
        className='fab fa-github-square fa-lg footer__icon'
      ></i>
    </div>
  );
}
