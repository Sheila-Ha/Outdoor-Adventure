import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query";

export default function FunFact() {
  const { loading, error, data } = useQuery(FUN_FACT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-6">
       <h1 className="font-bold">{data.funFact.title}</h1>
       <p>{data.funFact.description}</p>
    </div>
  );
}
