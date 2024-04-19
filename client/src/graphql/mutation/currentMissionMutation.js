import { gql } from "@apollo/client";

export const DELETE_CURRENT_MISSION = gql`
mutation DeleteCurrentMission($id: ID!) {
    deleteCurrentMission(id: $id) 
}
`
export const UPDATE_CURRENT_MISSION = gql`
mutation UpdateCurrentMission($id: ID!, $isComplete: Boolean) {
    updateCurrentMission(id: $id, isComplete: $isComplete) {
        id
        isComplete
    }
}
`