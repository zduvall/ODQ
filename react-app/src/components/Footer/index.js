import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__text'>
        Designed & created by Zachary Duvall, LCSW
      </p>
      <button
        onClick={() =>
          (window.location = 'https://www.linkedin.com/in/zachary-duvall/')
        }
      >
        <i
          title='https://www.linkedin.com/in/zachary-duvall/'
          className='fab fa-linkedin fa-lg footer__icon'
        ></i>
      </button>
      <button onClick={() => (window.location = 'https://github.com/zduvall')}>
        <i
          title='https://github.com/zduvall'
          className='fab fa-github-square fa-lg footer__icon'
        ></i>
      </button>
    </div>
  );
}
