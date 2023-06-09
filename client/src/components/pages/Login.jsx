import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const styles = {
  formBody: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '40%',
    minWidth: '200px'
  },
  mainBody: {
    margin: '10rem auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 100, 0.563)',
    paddingTop: '2rem',
    paddingBottom: '3rem',
    maxWidth: '40%',
    minWidth: '250px',
    borderRadius: '10px',
	  boxShadow: '10px 10px 10px black'
    
  },
  formInput: {
    marginTop: '1rem',
    borderStyle: 'none',
    height: '2rem'
  },

  buttonSubmit: {
    marginTop: '1rem',
    borderStyle: 'none',
    height: '2rem',
    backgroundColor: 'darkgray',
    color: 'whitesmoke',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    maxWidth: '30%',
    minWidth: '100px'
  },

  reroute: {
    display: 'flex',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    justifyContent: 'center',
    marginTop: '2rem',
    color: 'whitesmoke',
    
  },

  linkSpan: {
    textDecoration: 'none',
    color: 'red'
  }
}

export const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      window.location.href='/showcase'
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
        <div style={styles.mainBody}>
          <h4 className="galleryTitle">Login</h4>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/showcase">back to the homepage.</Link>
              </p>
            ) : (
              <form style={styles.formBody} onSubmit={handleFormSubmit}>
                <input
                  style={styles.formInput}
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  style={styles.formInput}
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  // style={styles.formInput}
                  id="loginSubmitButton"
                  style={styles.buttonSubmit}
                  // style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  submit
                </button>
                <div style={styles.reroute}>
                  <p>Need to sign up? Go <Link to="/register" style={styles.linkSpan}>here</Link></p>
                </div>
              </form>
              
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
  );
};