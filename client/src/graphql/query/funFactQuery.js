import { gql} from '@apollo/client';
export const Fun_Fact = gql`
    query FunFact {
        funFact {
            title
            description
        }
    }
`