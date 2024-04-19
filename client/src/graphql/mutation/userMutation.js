import { gql } from "@apollo/client";
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) 
}
`
export const SIGNUP = gql`
mutation signUp($signUpDetails: SignUp!) {
    signUp(signUpDetails: $signUpDetails)
  }
`
export const CHANGE_EMAIL = gql`
mutation ChangeEmail($newEmail: String!, $changeEmailId: ID) {
  changeEmail(newEmail: $newEmail, id: $changeEmailId)
}
`;

export const CHANGE_PASSWORD =gql`
mutation ChangePassword($currentPassword: String!, $newPassword: String!, $changePasswordId: ID) {
  changePassword(currentPassword: $currentPassword, newPassword: $newPassword, id: $changePasswordId)
}
`;