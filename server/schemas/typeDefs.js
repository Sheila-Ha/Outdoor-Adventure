export const typeDefs = `#graphql
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

type Current_Mission {
    _id: ID
    name: String
    type: Int
    points: Int
    isComplete: Boolean
    timer: Int
    userId: Int
    missionTypeId: Int
}

type Explore_Level {
    _id: ID
    name: String
    pointsRequired: Int
    badge: String
    sort: Int
}

type Mission_Activities {
    _id: ID
    complete: Boolean
    pointValue: Int
    missionId: Int
    activityId: Int
}

type Mission_Types {
    _id: ID
    name: String
    description: String
    image: String
}

type FunFact {
    title: String!
    description: String!
}

type Activities {
    _id: ID
    name: String
    description: String
    image: String
    missionTypeId: Int    
}

type Query {
    findUsers: [User]
    loginUser: LoginUser
    getCurrentMission(userId: Int): CurrentMission
    funFact: FunFact
    getAllExploreLevels: [Explore_Level]
    getAllCurrentMissions: [Current_Mission]
    getAllMissionTypes: [Mission_Types]
    getAllActivities: [Activities]
    getAllMissionActivities: [Mission_Activities]
}

type Mutation {
    login(email: String!, password: String!): String
    signUp(signUpDetails: SignUp!): String
}
`;
