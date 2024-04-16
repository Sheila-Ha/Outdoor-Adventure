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
mutation changeEmail($currentEmail: String!, $newEmail: String!) {
  changeEmail(currentEmail: $currentEmail, newEmail: $newEmail) {
      email
  }
}
`;

export const CHANGE_PASSWORD =gql`
mutation changePassword($email: String!, $currentPassword: String!, $newPassword: String!) {
  changePassword(email: $email, currentPassword: $currentPassword, newPassword: $newPassword) {
      status
  }
}
`;