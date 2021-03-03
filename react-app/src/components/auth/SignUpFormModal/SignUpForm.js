import { useState } from 'react';
// import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// redux store
import { signUpUser } from '../../../store/session';

function SignUpFormPage() {
  const dispatch = useDispatch();
  // const history = useHistory()

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);

    const allFields = [firstName, lastName, email, password, repeatPassword];

    allFields.forEach((field) => {
      if (field === '') {
        setErrors(['Please fill out all fields']);
      }
    });

    const validEmail = /^[A-Za-z0-9_.]+@\w+.\w+.\w+/;
    if (!validEmail.test(email)) {
      setErrors((prevErrors) => [
        ...prevErrors,
        'Please ensure email is valid',
      ]);
    }

    if (password !== repeatPassword || password === '') {
      setErrors((prevErrors) => [
        ...prevErrors,
        'Please ensure the passowrd fields match',
      ]);
    }

    const user = await dispatch(
      signUpUser(firstName, lastName, email, password)
    );
    if (!user.errors) {
      console.log('logged in!!!!');
      // history.push('/')
      // return <Redirect to='/' />;
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error) => (
          <div key={error}>{error}</div>
        ))}
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          required
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
}

export default SignUpFormPage;
