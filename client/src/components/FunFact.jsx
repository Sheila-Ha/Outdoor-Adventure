import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FUN_FACT } from "../graphql/query/index.js";
import { Alert, AlertDescription, AlertTitle } from "./Alert.jsx";
import { BookOpenCheck } from "lucide-react";

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
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Alert variant="success">
        <BookOpenCheck className="h-4 w-4" />
        {!loading && <AlertTitle>Did you know?</AlertTitle>}
        <AlertDescription className="text-md">
          {/*Displays loading when loading else displays fact of random index */}
          {loading
            ? "Hold onto your hats... Here comes a wild tidbit for you!"
            : data.funFact[index]}
        </AlertDescription>
      </Alert>
    </div>

    // <div className="p-2 text-center bg-green-300">
    //   <p className="text-sm">{data.funFact.fact}</p>
    // </div>
  );
}
