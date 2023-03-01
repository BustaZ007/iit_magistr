type TErrorMessages = {
  ACCESS_DANIED: string[];
};

const ERROR_MESSAGES: TErrorMessages = {
  ACCESS_DANIED: [
    'You are not authenticated',
    "'AnonymousUser' object is not iterable",
    'Permission denied',
    'User has no access or id is incorrect',
  ],
};

export default ERROR_MESSAGES;
