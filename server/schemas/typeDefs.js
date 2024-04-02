export const typeDefs = `
type User {
    id: ID
    name: String
    interest: [String]
}
type Query {
    findUsers: [User]
}`;
