import { Link } from "react-router-dom";
// MissionId is optional
const MissionCard = ({
  title,
  description,
  categoryColor,
  missionId = null,
  isComplete = false,
  activitiesCount = null,
  completedActivitiesCount = 0,
}) => {
  return (
    <div className="relative p-4 mb-2 border">
      <span
        className={`absolute top-0 left-0 h-1 w-full ${categoryColor}`}
      ></span>{" "}
      {/* Colored bar */}
      <div className="absolute top-2 right-2">
        <button className="text-sm">↻</button>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3">
          <h3 className="font-semibold text-md">
            {missionId ? (
              <Link to={`mission-activities/${missionId}`}>{title}</Link>
            ) : (
              title
            )}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="pr-6 text-right basis-1/3">
          {/* // If isComplete is true, display "Mission Complete" */}
          {isComplete
            ? "Mission Complete"
            : // Otherwise if activitiesCount, display the number of completed activities
            activitiesCount
            ? completedActivitiesCount + "/" + activitiesCount + " Complete"
            : ""}
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
