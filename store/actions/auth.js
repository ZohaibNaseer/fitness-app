export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const SIGNUPCOMPLETE = 'SIGNUPCOMPLETE';
export const SIGNOUT = 'SIGNOUT';
export const UPDATE_USER_MODEL = 'UPDATE_USER_MODEL';

export const signup = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgOxm3ozMLxZr1hGnJs4PX5EYdTf9dLeI',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true
				})
			}
		);

		if (!response.ok) {
			const errorResData = await response.json();
			const errorId = errorResData.error.message;
			let message = 'wrong email and password!';
			if (errorId === 'EMAIL_EXISTS') {
				message = 'This email exists already!';
			}
			throw new Error(message);
		}
		const resData = await response.json();
		console.log(resData);
		console.log('Auth Token : ' + resData.idToken);
		dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId, isSignupComplete: false });
	};
};

export const signupcomplete = (isSignupComplete) => {
	return async (dispatch) => {
		console.log(isSignupComplete);
		dispatch({ type: SIGNUPCOMPLETE, isSignupComplete: isSignupComplete });
	};
};

export const signout = (isSignOut) => {
	return async (dispatch) => {
		console.log(isSignOut);
		dispatch({ type: SIGNOUT, isSignupComplete: isSignOut });
	};
};

export const login = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgOxm3ozMLxZr1hGnJs4PX5EYdTf9dLeI',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true
				})
			}
		);

		if (!response.ok) {
			const errorResData = await response.json();
			const errorId = errorResData.error.message;
			let message = 'wrong email and password!';
			if (errorId === 'EMAIL_NOT_FOUND') {
				message = 'This email could not be found';
			} else if (errorId === 'INVALID_PASSWORD') {
				message = 'This password is invalid!';
			}
			throw new Error(message);
		}

		const resData = await response.json();
		console.log(resData);
		dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId, isSignupComplete: true });
	};
};

export const updateUserModel = (email, password, isMale, feet, inches, cm) => {
	console.log('cm : ' + cm);
	return {
		type: UPDATE_USER_MODEL,
		email: email,
		password: password,
		isMale: isMale,
		feet: feet,
		inches: inches,
		cm: cm
	};
};
