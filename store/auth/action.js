export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};

export function login() {
  return { type: actionTypes.LOGIN_REQUEST };
}

export function loginSuccess(authData) {
  return { type: actionTypes.LOGIN_SUCCESS, payload: authData };
}

export function logOut() {
  return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
  return { type: actionTypes.LOGOUT_SUCCESS };
}
