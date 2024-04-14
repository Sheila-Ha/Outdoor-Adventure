import { gql} from '@apollo/client';
export const FUN_FACT = gql`
    query FunFact {
        funFact {
            fact
        }
    }
`