import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

// import thunks
import { signUpUser } from '../../store/session';

// import css
import './Auth.css';

function SignUpFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (sessionUser) {
    return <Redirect to='/' />;
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);

    // const allFields = [firstName, lastName, email, password, confirmPassword];

    // allFields.forEach((field) => {
    //   if (field === '') {
    //     setErrors(['Please fill out all fields.']);
    //   }
    // });

    // const validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w?/;
    // if (!validEmail.test(email)) {
    //   setErrors((prevErrors) => [
    //     ...prevErrors,
    //     'Please ensure email is valid.',
    //   ]);
    // }

    // if (password !== confirmPassword || password === '') {
    //   setErrors((prevErrors) => [
    //     ...prevErrors,
    //     'Please ensure passowrd fields match.',
    //   ]);
    // }

    // if (errors.length) {
    //   // setErrors([]); // this is because the set errors is too slow, so I have to reset it before clicking submit again
    //   return;
    // }

    const user = await dispatch(
      signUpUser(firstName, lastName, email, password)
    );
    if (!user.errors) {
      console.log('logged in');
      history.push('/dashboard');
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div className='form-container'>
      <h1 className='primary-title'>Sign Up</h1>
      <form className='form auth__form' onSubmit={onSignUp}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='form__row'>
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
            className='form__input auth__form__input'
          ></input>
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
            className='form__input auth__form__input'
          ></input>
        </div>
        <div className='form__row'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className='form__input auth__form__input'
          ></input>
        </div>
        <div className='form__row'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='form__input auth__form__input'
          ></input>
          <input
            name='confirm_password'
            type='password'
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            className='form__input auth__form__input'
          ></input>
        </div>
        <div className='form__row'>
          <button className='primary-button form__button' type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormPage;
