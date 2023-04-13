import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  { 
    user {
      _id
      username
      email
      password
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
