import { gql }from "@apollo/client";
export const UPDATE_IMAGE_PROFILE_URL = gql`
mutation UpdateImageProfileUrl($loginImageProfileUrl: String!) {
    updateImageProfileUrl(loginImageProfileUrl: $loginImageProfileUrl)
  }
`