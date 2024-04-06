export const typeDefs = `
input SignUp {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type Query {
    
}

type Mutation {
    login(email: String!, password: String!): String
    signUp(signUpDetails: SignUp!): String
}
`;
