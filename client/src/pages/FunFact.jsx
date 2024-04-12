import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/Alertdialog.jsx";

export default function FunFact() {
  const { loading, error, data } = useQuery(FUN_FACT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-4">
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="border-2 px-2 rounded-md">Open</div>
        </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{data.funFact.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {data.funFact.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Done</AlertDialogCancel>
          <AlertDialogAction>Learn More</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
    // <div className="p-6">
    //    <h1 className="font-bold">{data.funFact.title}</h1>
    //    <p>{data.funFact.description}</p>
    // </div>
  );
}
