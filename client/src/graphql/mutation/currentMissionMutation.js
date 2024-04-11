import { gql } from "@apollo/client";
export const DELETE_CURRENT_MISSION = gql`
mutation DeleteCurrentMission($id: ID!) {
    deleteCurrentMission(id: $id) 
}
`
