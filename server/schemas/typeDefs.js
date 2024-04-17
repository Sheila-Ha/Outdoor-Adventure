export const typeDefs = `#graphql
type User {
    id: ID
    name: String
    interest: [String]
    username: String
    email: String
    currentLeaderBoardLevel: Int
    firstName: String
    lastName: String
    lastLogin: String
    memberSince: String
    exploreLevelId: Int
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
    point_value: Int
    missionId: Int
    activityId: Int
}

type Mission_Types {
    id: ID
    name: String
    description: String
    image: String
    point_value: String
}

type FunFact {
    fact: [String!]
}

type Activities {
    _id: ID
    name: String
    description: String
    image: String
    missionTypeId: Int    
}
type LeaderBoard {
    id: Int
    name: String
    score: Int
    image: String
    subtitle: String
}
type Query {
    findUsers: [User]
    loginUser: LoginUser
    getCurrentMission: [Current_Mission]
    funFact: [String]
    leaderBoard: [LeaderBoard]
    getAllExploreLevels: [Explore_Level]
    getAllCurrentMissions(userId: Int): [Current_Mission]
    getAllMissionTypes: [Mission_Types]
    getAllActivities: [Activities]
    getAllMissionActivities: [Mission_Activities]
    getUserMissionActivities(userId: Int): [User]

}

type Mutation {
    login(email: String!, password: String!): String
    signUp(signUpDetails: SignUp!): String
    deleteCurrentMission(id: ID): String
    triggerMyMission(userId: ID!, missionName: String!, missionId: Int!): String
}
`;
