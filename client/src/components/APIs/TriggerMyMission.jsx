import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import { useLoggedInUser } from "../../context/UserContext.jsx";
import { MISSION_TYPES } from "../../graphql/query";
import { TRIGGER_MY_MISSION } from "../../graphql/mutation/triggerMyMissionMutation.js";

// Define your mutation
function TriggerMyMission() {
  console.log('TriggerMyMission');

  // Get the mission types from the database
  const missionTypes = useQuery(MISSION_TYPES);
  console.log(missionTypes);
  
  // Set up state variables to store the selected value and text
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedText, setSelectedText] = useState('');
  
  const handleChange = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setSelectedText(event.target.options[selectedIndex].text);
    setSelectedValue(event.target.value);
    // console.log("TEST " + selectedText + " " + selectedValue);
  };

  // Call the useMutation hook, passing in the TRIGGER_MY_MISSION mutation
  const [triggerMyMission, { data }] = useMutation(TRIGGER_MY_MISSION);

  // Get the logged-in user from the UserContext so we have access to its data
  const { loggedInUser } = useLoggedInUser();

  // Define a function that calls the mutation
  const handleTrigger = () => {
    // console.log('handleTrigger');
    if (selectedValue == ""){
      alert("Please select a mission type.");
      return;
    }
    // console.log(loggedInUser);
    // Call the mutation
    // Pass in the missionType from the user data
    triggerMyMission({ variables: { userId: loggedInUser.id, city: loggedInUser.city, state: loggedInUser.state, missionName: selectedText, missionId: parseInt(selectedValue) } })
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
      <select onChange={handleChange} className="text-sm text-gray-900 font-bold border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Choose a Mission Type</option>
        {missionTypes.data && missionTypes.data.getAllMissionTypes.map((missionType) => (
          <option key={missionType.id} value={missionType.id}>{missionType.name}</option>
        ))}
      </select>
      <button className="px-4 py-2 mx-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit" onClick={handleTrigger}>Trigger Mission</button>
      {/* Display the result of the mutation */}
      {data && <p>Mission triggered: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default TriggerMyMission;