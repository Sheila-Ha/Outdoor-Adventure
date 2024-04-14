import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query/index.js";
import { Alert, AlertDescription, AlertTitle } from "./Alert.jsx";
import { Terminal } from "lucide-react"

// export default function FunFact() {
//   const { loading, error, data } = useQuery(FUN_FACT);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;
//   return (
//     <div className="p-2 text-center bg-green-300">
//       <p className="text-sm">{data.funFact.fact}</p>
//     </div>
//   );
// }
export default function FunFact() {
  const { loading, error, data } = useQuery(FUN_FACT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>

    // <div className="p-2 text-center bg-green-300">
    //   <p className="text-sm">{data.funFact.fact}</p>
    // </div>
  );
}
