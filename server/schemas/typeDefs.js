const { gql } = require("apollo-server-express");


// needs modification
const typeDefs = gql`
  type Artist {
    _id: ID!
    name: String!
    age: Int!
    story: String!
    work: [Artwork!]!
  }

  type Artwork {
    _id: ID!
    title: String!
    artist: [Artist!]!
    created: String!
    price: Float!
    quantity: Int!
    storage_id: String!
    lore: String!
    categories: String!
  }
  type Query {
    artists: [Artist!]!
    artwork: [Artwork!]!
    categories: [Categories!]!
    user: [User!]!
  }
  type Categories {
    _id: ID!
    name: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;