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
    city: String
    state: String
    lastLogin: String
    memberSince: String
    exploreLevelId: Int
    currentNumExpPoints: Int
}
type LoginUser{
    email: String
    password: String
}

input SignUp {
    firstName: String!
    lastName: String!
    city: String!
    state: String!
    email: String!
    password: String!
}

type Current_Mission {
    id: ID
    name: String
    type: Int
    points: Int
    isComplete: Boolean
    timer: Int
    userId: Int
    missionTypeId: Int
}

type Explore_Level {
    id: ID
    name: String
    pointsRequired: Int
    badge: String
    sort: Int
}

type Mission_Activities {
    id: ID
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
    id: ID
    name: String
    description: String
    image: String
    isComplete: Boolean
    missionTypeId: Int    
}
type LeaderBoard {
    id: Int
    name: String
    score: Int
    image: String
    subtitle: String
}
type LoginImageProfileUrl {
    image: String
}
type Query {
    findUsers: [User]
    loginUser: LoginUser
    getCurrentMission: [Current_Mission]
    funFact: [String]
    leaderBoard: [LeaderBoard]
    getAllExploreLevels: [Explore_Level]
    getAllCurrentMissions: [Current_Mission]
    getCurrentMissionByMissionId(missionId: Int): Current_Mission
    getCurrentMissionActivities(missionId: Int): [Activities]
    getAllMissionTypes: [Mission_Types]
    getAllActivities: [Activities]
    getAllMissionActivities: [Mission_Activities]
    getUserMissionActivities(userId: Int): [User]
    getUserExploreLevel(id: ID): User
}

type Mutation {
    login(email: String!, password: String!): String
    signUp(signUpDetails: SignUp!): String
    deleteCurrentMission(id: ID): String
    addActivity(name: String, description: String, missionTypeId: Int ): Activities
    updateActivity(id: ID, isComplete: Boolean): Activities
    triggerMyMission(userId: ID!, city: String!, state: String!, missionType: String!, missionId: Int!): String
    updateImageProfileUrl(loginImageProfileUrl: String!): String
    updateUserLevel(id: ID, exploreLevelId:String): User
    updateUserPoints(id: ID, currentNumExpPoints:Int): User
}
`;
