import { useState, FormEvent, ChangeEvent } from 'react';
//import { AuthError, AuthErrorCodes } from 'firebase/auth';

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      //store.dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      // if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
      //   alert('Email is already in use. Can not create user.');
      // } else {
      //   console.log('user sign up failed', error);
      // }
    }
  };

  return (
    <div className="auth__container">
      <header>
        <div className="auth__greeting">
          <h1>Registration</h1>
        </div>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
      </header>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="text-field">
          <label htmlFor="displayName">Name</label>
          <input
            name="displayName"
            type="text"
            onChange={handleChange}
            value={displayName}
            required={true}
          />
          <span className="text-field__helper">Enter your name</span>
        </div>

        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" onChange={handleChange} value={email} required={true} />
          <span className="text-field__helper">Enter valid email address</span>
        </div>

        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            required={true}
          />
          <span className="text-field__helper">Enter min 6 characters</span>
        </div>

        <div className="text-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            required={true}
          />
          <span className="text-field__helper">Repeat password</span>
        </div>

        <div className="auth__actions">
          <button className="auth__sign-up" type="submit" disabled>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
