import { LOGIN, SIGNUP, SIGNUPCOMPLETE, SIGNOUT, UPDATE_USER_MODEL } from '../actions/auth';
import User from '../../models/userModel';

const initialState = {
	user: null,
	token: null,
	userId: null,
	isSignupComplete: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				token: action.token,
				userId: action.userId,
				isSignupComplete: action.isSignupComplete
			};
		case SIGNUP:
			return {
				token: action.token,
				userId: action.userId,
				isSignupComplete: action.isSignupComplete
			};
		case SIGNUPCOMPLETE:
			return {
				isSignupComplete: action.isSignupComplete
			};
		case SIGNOUT:
			return {
				isSignupComplete: action.isSignupComplete
			};
		case UPDATE_USER_MODEL:
			const user = new User(action.email, action.password, action.isMale, action.feet, action.inches, action.cm);
			return { ...state, user: user };
		default:
			return state;
	}
};
