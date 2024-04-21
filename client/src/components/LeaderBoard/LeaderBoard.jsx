import LeaderBoardRow from "./LeaderBoardRow";
import { LEADER_BOARD } from "../../graphql/query/index.js";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs.jsx";

export default function LeaderBoard() {
  const [isWeekly, setIsWeekly] = useState(true);
  const { loading, error, data } = useQuery(LEADER_BOARD, {
    variables: { isWeekly },
  });
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Tabs
        defaultValue="weekly"
        value={isWeekly ? "weekly" : "yearly"}
        onValueChange={(v) => {
          setIsWeekly(v === "weekly");
        }}
        className="w-full"
      >
        <TabsList className="flex justify-between">
          <div className="text-lg text-black font-bold">Leaderboard</div>
          <div>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="weekly">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              {data.leaderBoard.map((user, index) => (
                <LeaderBoardRow
                  key={user.id}
                  rank={index + 1}
                  name={user.name}
                  score={user.score}
                  image={user.image}
                  subtitle={user.subtitle}
                />
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="yearly">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              {data.leaderBoard.map((user, index) => (
                <LeaderBoardRow
                  key={user.id}
                  rank={index + 1}
                  name={user.name}
                  score={user.score}
                  image={user.image}
                  subtitle={user.subtitle}
                />
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </>
  );
}
