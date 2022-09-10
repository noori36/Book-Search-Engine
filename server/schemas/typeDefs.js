const { gql } = require("apollo-server-express");

const typeDefs = gql`  
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

input SavedBook {
    title: String
    description: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String!, email: String, password: String): Auth
    saveBook(input: SavedBook): User
    removeBook(bookId: String): User
    
}

type Query {
    me: User
}

type Auth {
    token: ID
    user: User
}
`;

module.exports = typeDefs;