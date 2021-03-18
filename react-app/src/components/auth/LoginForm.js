import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

// import thunks
import { loginUser } from '../../store/session';

// import css
import './Auth.css';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (sessionUser) {
    return <Redirect to='/dashboard' />;
  }

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);

    // const allFields = [email, password];

    // allFields.forEach((field) => {
    //   if (field === '') {
    //     setErrors(['Please fill out all fields.']);
    //   }
    // });

    // if (errors.length) {
    //   // setErrors([]); // this is because the set errors is too slow, so I have to reset it before clicking submit again
    //   return;
    // }
    const user = await dispatch(loginUser(email, password));

    if (!user.errors) {
      console.log('logged in');
      history.push('/dashboard');
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div className='form-container'>
      <h1 className='primary-title'>Log In</h1>
      <form className='form auth__form' onSubmit={onLogin}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='form__row'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className='form__input auth__form__input'
          />
        </div>
        <div className='form__row'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className='form__input auth__form__input'
          />
        </div>
        <div className='form__row'>
          <button className='primary-button form__button' type='submit'>
            Login
          </button>
        </div>
        <p className='auth__sml-txt'>
          Login with{' '}
          <span
            className='clickable-link'
            onClick={() => {
              setEmail('demo@dot-21.com');
              setPassword('2345');
            }}
          >
            demo credentials
          </span>{' '}
          to test application.
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
