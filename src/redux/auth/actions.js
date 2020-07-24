import AuthTypes from './types';

export function signInRequest({ email, password }) {
  return {
    type: AuthTypes.signInRequest,
    payload: {
      email,
      password,
    },
  };
}
