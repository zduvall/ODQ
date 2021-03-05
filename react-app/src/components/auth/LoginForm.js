import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
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

    const allFields = [email, password];

    allFields.forEach((field) => {
      if (field === '') {
        setErrors(['Please fill out all fields.']);
      }
    });

    if (errors.length) return;

    const user = await dispatch(loginUser(email, password));

    if (!user.errors) {
      console.log('logged in');
      history.push('/dashboard');
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div className='auth-form-container'>
      <h1 className='primary-title'>Log In</h1>
      <form className='auth-form' onSubmit={onLogin}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='auth-form__row'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            // required
            onChange={(e) => setEmail(e.target.value)}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__row'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            // required
            onChange={(e) => setPassword(e.target.value)}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__row'>
          <button className='button-primary auth-button' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
