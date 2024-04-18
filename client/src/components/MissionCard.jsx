// MissionId is optional
const MissionCard = ({
  title,
  description,
  categoryColor,
  missionId = null,
}) => {
  return (
    <div className="relative p-4 mb-2 border">
      <span
        className={`absolute top-0 left-0 h-1 w-full ${categoryColor}`}
      ></span>{" "}
      {/* Colored bar */}
      <h3 className="font-semibold text-md">
        {missionId ? (
          <a href={`mission-activities/${missionId}`}>{title}</a>
        ) : (
          title
        )}
      </h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default MissionCard;
