import { gql } from '@apollo/client';

export const TRIGGER_MY_MISSION = gql`
  mutation triggerMyMission($userId: ID!, $missionType: String!) {
    triggerMyMission(userId: $userId, missionType: $missionType)
  }
`;

// const triggerMissionForUser = async (userId, missionType) => {
//   const [triggerMyMission] = useMutation(TRIGGER_MY_MISSION);
//   try {
//     const { data } = await triggerMyMission({ variables: { userId, missionType } });
//     console.log('Mission triggered:', data);
//   } catch (error) {
//     console.error('Error triggering mission:', error);
//   }
// };

// import { gql } from "@apollo/client";
// export const TRIGGER_MY_MISSION = gql`
//   mutation TriggerMyMissionMutation($userId: ID!, $missionType: String!) {
//     triggerMissionForUser(userId: $userId, missionType: $missionType) {
//       response
//     }
//   }
// `;
