export default function LeaderboardRow({ rank, name, score, image, subtitle }) {
  const rowColor =
    rank === 1
      ? "bg-yellow-400"
      : rank === 2
      ? "bg-gray-300"
      : rank === 3
      ? "bg-orange-300"
      : "bg-white";

  const textStyle = rank <= 3 ? "text-xl font-bold" : "font-medium";

  const scoreStyle =
    rank <= 3 ? "text-lg font-extrabold text-yellow-600" : "text-lg font-light";

  return (
    <tr className={`${rowColor} text-gray-900`}>
      <td className="flex items-center px-3 py-2 text-sm font-medium whitespace-nowrap">
        <span className={`mr-2 ${textStyle}`}>#{rank}</span>
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          alt={`Profile of ${name}`}
        />
        <div className="ml-4">
          <div className={textStyle}>{name}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </td>
      <td className={`${scoreStyle} px-3 py-2 whitespace-nowrap`}>{score}</td>
    </tr>
  );
}
