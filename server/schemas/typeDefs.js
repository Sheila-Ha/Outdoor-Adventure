export const typeDefs = `
type User {
    id: ID
    name: String
    interest: [String]
}
type LoginUser{
    email: String
    password: String
}

type Query {
    findUsers: [User]
    loginUser: LoginUser
}

type Mutation {
    login(email: String!, password: String!): String
}
`;
