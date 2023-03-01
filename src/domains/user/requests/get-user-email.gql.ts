import { gql } from '@apollo/client';

const GET_USER_EMAIL = gql`
  query GetUserEmail {
    me {
      email
    }
  }
`;

export { GET_USER_EMAIL };
