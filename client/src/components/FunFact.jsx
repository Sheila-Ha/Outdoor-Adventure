import { useQuery } from "@apollo/client";
import { FUN_FACT } from "../graphql/query/index.js";

// const funFact = [
//   "A group of flamingos is called a flamboyance.",
//   "The Amazon rainforest produces 20% of the world's oxygen.",
//   "The world's tallest tree is a coast redwood measuring 115.55 meters (379.1 feet).",
//   "There are over 3 trillion trees on Earth.",
//   "Fungi play a crucial role in the health of forests by breaking down dead organic matter.",
//   "Soil contains more microorganisms than there are people on Earth.",
//   "Up to 30 million species of insects live in the world's tropical forests.",
//   "Forests remove about one-third of human-caused emissions of carbon dioxide from the atmosphere each year.",
//   "Old growth forests can continue accumulating carbon for hundreds of years.",
//   "Mangrove forests protect coastlines from erosion and provide nursery habitat for young fish.",
//   "Coral reefs support 25% of all marine life with less than 1% of the ocean's surface area.",
//   "Kelp forests absorb massive amounts of carbon dioxide from the atmosphere.",
//   "The Amazon River carries about 20% of the world's flowing freshwater.",
//   "Wetlands act as natural water filters by absorbing pollutants.",
//   "Peat bogs store more carbon per square meter than any other ecosystem.",
//   "Grasslands sequester carbon in their deep root systems and soil organic matter.",
//   "Permafrost soils contain huge amounts of frozen organic matter and methane.",
//   "Up to 80% of Earth's oxygen comes from phytoplankton in the oceans.",
//   "Whales help fertilize the oceans by releasing iron-rich fecal plumes.",
//   "Sea otters play a key role in kelp forest health by preying on sea urchins.",
//   "Beavers create wetlands that support high levels of biodiversity.",
//   "Dragonflies are important predators that help regulate mosquito populations.",
// ];
// const randomFunFact = funFact[Math.floor(Math.random() * funFact.length)];

export default function FunFact() {
  const { loading, error, data } = useQuery(FUN_FACT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-2 text-center bg-green-300">
      <p className="text-sm">{data.funFact.fact}</p>
    </div>
    // <div>
    //   <div>{data.funFact.title}</div>
    //   <div>{data.funFact.description}</div>
    // </div>
  );
}
