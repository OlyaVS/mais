import { useState, FormEvent, ChangeEvent } from 'react';

const SignInForm = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      //store.dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      console.log('user sign in with email failed', error);
    }
  };

  const signInWithGoogle = async () => {
    //store.dispatch(googleSignInStart());
  };

  return (
    <div className="auth__container">
      <header>
        <div className="auth__greeting">
          <h1>Welcome Back</h1>
        </div>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
      </header>
      <form className="auth__form" onSubmit={handleSubmit}>
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
          <span className="text-field__helper">Enter valid password</span>
        </div>

        <div className="auth__actions">
          <button className="auth__sign-in" type="submit" disabled>
            Sign In
          </button>
          <button className="auth__google" onClick={signInWithGoogle} type="button" disabled>
            Google Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
