import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query/index.js";
import { Alert, AlertDescription, AlertTitle } from "./Alert.jsx";
import { BookOpenCheck } from "lucide-react";

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
      <Alert variant="success">
        <BookOpenCheck className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription className="text-sm">
          {data.funFact.fact}
        </AlertDescription>
      </Alert>
    </div>

    // <div className="p-2 text-center bg-green-300">
    //   <p className="text-sm">{data.funFact.fact}</p>
    // </div>
  );
}
