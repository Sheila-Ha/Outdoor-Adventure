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
    // TODO (Sheila): pass in the missionType from the user data
    triggerMyMission({ variables: { userId: loggedInUser.id, missionName: "Scavenger Hunt", missionId: 1 } })
      .then(response => {
        // Log the response
        console.log('triggerMyMission response:', response.data.triggerMyMission); // Log the response
      })
      .catch(err => {
        // Log any errors that occur
        console.log('An error has occurred while triggering the mission.');
        console.error('triggerMyMission error', err); // Log any errors
      });
  };

  // Display a button to trigger the mutation
  return (
    <div>
      <select className="text-sm text-gray-900 font-bold border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="test">Test</option>
      </select>
      <button className="px-4 py-2 mx-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit" onClick={handleTrigger}>Trigger Mission</button>
      {/* Display the result of the mutation */}
      {data && <p>Mission triggered: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default TriggerMyMission;