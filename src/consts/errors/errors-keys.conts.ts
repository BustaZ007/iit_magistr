type TErrorMessages = {
  [x: string]: string;
};

const ERRORS_KEYS: TErrorMessages = {
  'Authorization error': 'AuthError',
  'Enter a valid email address.': 'InvalidEmail',
  'User with this email already exists': 'UserExists',
  'Failed to fetch': 'NetworkError',
  'Invalid password': 'CurrentPasswordError',
  'User is inactive': 'InactiveUser',
  'Wrong token': 'BrokenLink',
  'User matching query does not exist.': 'BrokenLink',
  'Agent limit exceeded': 'AgentLimit',
  'Low quality photo': 'LowQualityPhoto',
  'No faces found': 'NoFacesFound',
  'Image decode failed': 'ImageDecodeFailed',
  'Sample Data is not valid': 'ImageDecodeFailed',
  'More than 1 face has been identified on this image': 'MoreThenOneFace',
  'Image width is over the limit': 'BigImageWidth',
  'License attribute "persons_in_base" limit exceeded': 'ProfileLimitExceeded',
  'User workspace is inactive': 'AccountBlocked',
  'cannot write mode RGBA as JPEG': 'ImageWithAlphaChannel',
  'Profile field already exists': 'ProfileFieldExists',
  'Profile field does not exists': 'ProfileFieldNotExists',
};

export default ERRORS_KEYS;
