//import React from 'react';
import { useMutation } from '@apollo/client';
import { useLoggedInUser } from "../../context/UserContext.jsx";
import { TRIGGER_MY_MISSION } from "../../graphql/mutation/triggerMyMissionMutation.js";

// Define your mutation
function TriggerMyMission() {
  console.log('TriggerMyMission');

  const [triggerMyMission, { data }] = useMutation(TRIGGER_MY_MISSION);

  const { loggedInUser } = useLoggedInUser();

  const handleTrigger = () => {
    console.log('handleTrigger');
    // Call the mutation
    triggerMyMission({ variables: { userId: loggedInUser.id, missionType: 'Scavenger Hunt' } })
      .then(response => {
        console.log('triggerMyMission response', response); // Log the response
      })
      .catch(err => {
        console.log('SOMETHING BAD HAPPENED');
        console.error('triggerMyMission error', err); // Log any errors
      });
  };

  return (
    <div>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit" onClick={handleTrigger}>Trigger Mission</button>
      {/* Display the result of the mutation */}
      {data && <p>Mission triggered: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default TriggerMyMission;

// --------------------------------------------------------

// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import {setContext} from '@apollo/client/link/context';
// import { useLoggedInUser } from "../../context/UserContext.jsx";
// import { TRIGGER_MY_MISSION } from "../../graphql/query/triggerMyMissionQuery.js";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// })

// const authLink = setContext((_, {headers}) => {
//   const token = localStorage.getItem("token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// })

// // Initialize Apollo Client
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const TriggerMyMission = () => {
//   const { loggedInUser } = useLoggedInUser();

//   console.log(loggedInUser); 

//   if (loggedInUser !== undefined) {
//     console.log('Triggering Mission...'); // 'Triggering Mission...
//     // Use Apollo Client to send the query or mutation
//     client.query({
//       query: TRIGGER_MY_MISSION,
//       variables: {
//         userId: loggedInUser.id,
//         missionType: 'Scavenger Hunt',
//       },
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//   }
// };

// export default TriggerMyMission;

// --------------------------------------------------------

//export default TriggerMyMission();



// import * as React from "react";
// import { cn } from "../lib/utils.js";
// import { Button } from "../components/Button.jsx";
// import OpenAI from "openai";

// const ai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_KEY });

// const ChatGPTTest = async function testChatGPT(){
//   const result = await ai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });
//   console.log(result);
// }

// const ChatGPTButton = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//     ref={ref} 
//     className={cn("mt-10", className)}
//     {...props}
//     >
//         <Button onClick={ChatGPTTest}>Test ChatGPT</Button>
//     </div>
//   ));
//   ChatGPTButton.displayName = "ChatGPTButton";

// export {
//     ChatGPTButton
// };