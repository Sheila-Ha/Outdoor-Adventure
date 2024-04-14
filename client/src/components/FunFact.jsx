import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query/index.js";
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
} from "./Alertdialog.jsx";

export default function FunFact() {
  const { loading, error, data } = useQuery(FUN_FACT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-4">
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="border-2 rounded-md px-2">Fun Fact</div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">{data.funFact.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {data.funFact.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Done</AlertDialogCancel>
            <AlertDialogAction>Next</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
