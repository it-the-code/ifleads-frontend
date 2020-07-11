import AuthTypes from './types';

export function signInRequest({ email, password }) {
  console.log('action');
  return {
    type: AuthTypes.signInRequest,
    payload: {
      email,
      password,
    },
  };
}
