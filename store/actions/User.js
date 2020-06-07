export const ADD_USER = 'ADD_USER';

export const addUser = (email, password) => {
	console.log(email, password);
	return {
		type: ADD_USER,
		userData: { email: email, password: password }
	};
};
