
import { useMutation } from '@apollo/client';
import { OPENAI_MUTATION } from '../../graphql/mutation'; // Import your mutation

const ChatGPTButton = () => {
  const [openAI, { data, loading, error }] = useMutation(OPENAI_MUTATION);

  const handleOpenAIMutation = async () => {
    try {
      const result = await openAI({
        variables: {
          input: {
            // Provide input data as needed by your mutation
          },
        },
      });
      console.log('Mutation result:', result);
    } catch (err) {
      console.error('Mutation error:', err);
    }
  };

  return (
    <div>
      {/* Your component UI */}
      <button onClick={handleOpenAIMutation}>Trigger Mutation</button>
    </div>
  );
};

export { ChatGPTButton };




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