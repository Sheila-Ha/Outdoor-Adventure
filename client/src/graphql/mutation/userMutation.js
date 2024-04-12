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
export const OPENAI_MUTATION = gql`
mutation openAI($input: OpenAIInput!) {
    openaiMutation(input: $input){
      id
      messages{
        role
        content
      }
      model
    }
}
`