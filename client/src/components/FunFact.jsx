import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
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
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("timer");

      //setInterval will be called when there is array of facts.
      if (data) {
        setIndex(Math.floor(Math.random() * data.funFact.length));
      }
    }, 15000);

    // Return in useEffect to clear the interval when detached from reactDOM
    return () => clearInterval(interval);
  }, [loading, error, data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Alert variant="success">
        <BookOpenCheck className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription className="text-sm">
          {/*Displays fact of random index */}
          {data.funFact[index]}
        </AlertDescription>
      </Alert>
    </div>

    // <div className="p-2 text-center bg-green-300">
    //   <p className="text-sm">{data.funFact.fact}</p>
    // </div>
  );
}
