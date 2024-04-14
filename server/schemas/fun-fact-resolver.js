import { ai } from "../config/openAI.config.js";

const funFact = [
  "A group of flamingos is called a flamboyance.",
  "The Amazon rainforest produces 20% of the world's oxygen.",
  "The world's tallest tree is a coast redwood measuring 115.55 meters (379.1 feet).",
  "There are over 3 trillion trees on Earth.",
  "Fungi play a crucial role in the health of forests by breaking down dead organic matter.",
  "Soil contains more microorganisms than there are people on Earth.",
  "Up to 30 million species of insects live in the world's tropical forests.",
  "Forests remove about one-third of human-caused emissions of carbon dioxide from the atmosphere each year.",
  "Old growth forests can continue accumulating carbon for hundreds of years.",
  "Mangrove forests protect coastlines from erosion and provide nursery habitat for young fish.",
  "Coral reefs support 25% of all marine life with less than 1% of the ocean's surface area.",
  "Kelp forests absorb massive amounts of carbon dioxide from the atmosphere.",
  "The Amazon River carries about 20% of the world's flowing freshwater.",
  "Wetlands act as natural water filters by absorbing pollutants.",
  "Peat bogs store more carbon per square meter than any other ecosystem.",
  "Grasslands sequester carbon in their deep root systems and soil organic matter.",
  "Permafrost soils contain huge amounts of frozen organic matter and methane.",
  "Up to 80% of Earth's oxygen comes from phytoplankton in the oceans.",
  "Whales help fertilize the oceans by releasing iron-rich fecal plumes.",
  "Sea otters play a key role in kelp forest health by preying on sea urchins.",
  "Beavers create wetlands that support high levels of biodiversity.",
  "Dragonflies are important predators that help regulate mosquito populations.",
  "The Great Trail, formerly known as the Trans Canada Trail, is a network of trails that stretches across the entire country, covering over 27,000 kilometers. It's the longest recreational trail in the world and offers a wide variety of activities, including hiking, cycling, cross-country skiing, and snowmobiling.",
  "Hiking can burn between 430-550 calories per hour depending on your weight and the intensity of the hike.",
  "The largest tree in the world is a giant sequoia located in California's Sequoia National Park.",
  "Running is associated with lower rates of heart disease, stroke, and some types of cancer.",
  "Biking to work can reduce your carbon footprint and save you money on transportation costs.",
  "The Perseid meteor shower, one of the most spectacular meteor showers, occurs every August.",
  "Stargazing can help reduce stress and improve mental well-being.",
  "Forests are home to a diverse range of plants and animals, with some species yet to be discovered by scientists.",
  "Biking is a low-impact exercise that is easy on the joints and can be enjoyed by people of all ages.",
  "Scavenger hunts in forests can help participants learn about local flora and fauna while having fun.",
  "Trail running can improve balance, agility, and cardiovascular health compared to running on pavement.",
  "The fastest land animal is the cheetah, which can reach speeds of up to 70 miles per hour.",
  "Hiking can help reduce stress and anxiety levels and improve mental well-being.",
  "The smell of soil is called 'petrichor' and is caused by a bacteria called actinomycetes.",
  "The redwood trees in California can grow to be over 350 feet tall, making them some of the tallest trees in the world.",
  "A group of flamingos is called a 'flamboyance'.",
  "The Northern Lights, also known as Aurora Borealis, are caused by the collision of charged particles from the sun with atoms in the Earth's atmosphere.",
  "Running can improve cardiovascular health and boost mood by releasing endorphins.",
  "The average person walks the equivalent of three times around the world in a lifetime.",
  "Bees have five eyes: two compound eyes and three simple eyes.",
  "Starfish can regenerate lost arms and some species can even grow a whole new body from just one arm.",
];

export const FunFactQuery = {
  async funFact(parent, args, req) {
    try {
      const completion = await ai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant. I am trying to get a fun fact for my app, Outdoor Antics. This project is used by outdoor adventurers. The outdoor activities might include biking, hiking, star gazing, scavenger hunt at forest, running, etc. Give me a ten unique fun facts that fits the theme. The fact should not exceed 50 words. Remember to give me a plain JSON ",
          },
          {
            role: "assistant",
            content: `
            {
                facts: [
                  "fact1",
                  "fact2"
                ],
            }
            `,
          },
          {
            role: "user",
            content: "Give me 10 fun facts",
          },
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
      });

      console.log(completion.choices[0]);
      return JSON.parse(completion.choices[0].message.content || "{}").facts;
    } catch (err) {
      //if we get error we return our hard coded fun fact
      return funFact;
    }
  },
};
