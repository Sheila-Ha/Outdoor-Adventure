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

input SignUp {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type CurrentMission {
    id: ID
    timer: Int
    userId: Int
}

type Query {
    findUsers: [User]
    loginUser: LoginUser
    getCurrentMission(userId: Int): CurrentMission
}

type Mutation {
    login(email: String!, password: String!): String
    signUp(signUpDetails: SignUp!): String
    deleteCurrentMission(id: ID): String
}
`;
