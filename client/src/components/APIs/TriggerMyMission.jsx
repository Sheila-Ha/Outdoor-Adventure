import { useMutation } from '@apollo/client';
import { useLoggedInUser } from "../../context/UserContext.jsx";
import { TRIGGER_MY_MISSION } from "../../graphql/mutation/triggerMyMissionMutation.js";

// Define your mutation
function TriggerMyMission() {
  console.log('TriggerMyMission');

  // Call the useMutation hook, passing in the TRIGGER_MY_MISSION mutation
  const [triggerMyMission, { data }] = useMutation(TRIGGER_MY_MISSION);

  // Get the logged-in user from the UserContext so we have access to its data
  const { loggedInUser } = useLoggedInUser();

  // Define a function that calls the mutation
  const handleTrigger = () => {
    console.log('handleTrigger');
    // Call the mutation
    triggerMyMission({ variables: { userId: loggedInUser.id, missionType: 'Scavenger Hunt' } })
      .then(response => {
        // Log the response
        console.log('triggerMyMission response', response); // Log the response
      })
      .catch(err => {
        // Log any errors that occur
        console.log('An error has occurred while calling the triggerMyMission mutation.');
        console.error('triggerMyMission error', err); // Log any errors
      });
  };

  // Display a button to trigger the mutation
  return (
    <div>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit" onClick={handleTrigger}>Trigger Mission</button>
      {/* Display the result of the mutation */}
      {data && <p>Mission triggered: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default TriggerMyMission;