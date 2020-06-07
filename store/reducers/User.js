import { ADD_USER } from '../actions/User';
import User from '../../models/userModel';

const initialState = {
	user: User
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			const newUser = new User(action.userData.email, action.userData.password);

			return {
				...state.user,
				user: state.user.concat(newUser)
			};
	}

	return state;
};
