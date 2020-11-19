export const SET_PROFILE = "SET_PROFILE";

export const setProfile = (payload) => ({ type: SET_PROFILE, payload });

export const setProfileWithDelay = (profile) => (dispatch) => {
	console.log(profile);
	setTimeout(() => {
		dispatch(setProfile(profile));
	}, 3000);
};
