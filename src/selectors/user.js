import { compose, path, prop } from 'ramda';

export const getCurrentUser = path(['user', 'currentUser']);

export const getCurrentUserEmail = compose(prop('email'), getCurrentUser);
