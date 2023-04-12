import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const styles = {
	formBody: {
	  margin: '0 auto',
	  // border: "2px solid red",
	  display: 'flex',
	  justifyContent: 'center',
	  flexDirection: 'column',
	  width: '40%',
	  minWidth: '200px'
	},
	mainBody: {
	  margin: '0 auto',
	  // border: '2px solid black',
	  display: 'flex',
	  justifyContent: 'center',
	  flexDirection: 'column',
	  alignItems: 'center',
	  backgroundColor: 'rgba(0, 0, 100, 0.563)',
	  paddingTop: '2rem',
	  paddingBottom: '3rem',
	  maxWidth: '40%',
	  minWidth: '250px',
	  borderRadius: '3px'
	  
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
	  backgroundColor: 'lightblue',
	  color: 'black',
	  fontSize: '1.5rem',
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

export const Register = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [addUser, { error, data }] = useMutation(ADD_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// window.location.href='/showcase'
		console.log(formState);

		try {
			const { data } = await addUser({
				variables: { ...formState },
			});

			Auth.login(data.addUser.token);
			window.location.href = "/showcase";
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-lg-10">
				<div style={styles.mainBody}>
					<h4 className="galleryTitle">
						Sign Up
					</h4>
					<div className="card-body">
						{data ? (
							<p>
								Success! You may now head{" "}
								<Link to="/showcase">
									back to the homepage.
								</Link>
							</p>
						) : (
							<form style={styles.formBody} onSubmit={handleFormSubmit}>
								<input
									style={styles.formInput}
									placeholder="Your username"
									name="username"
									type="text"
									value={formState.name}
									onChange={handleChange}
								/>
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
									id="signupSubmitButton"
									style={styles.buttonSubmit}
									type="submit"
								>
									submit
								</button>
								<div style={styles.reroute}>
                  <p>Already registered? Go <Link to="/login" style={styles.linkSpan}>here</Link></p>
                </div>
							</form>
						)}

						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

