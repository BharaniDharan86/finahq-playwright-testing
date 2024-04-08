function generateRandomUsername() {
  const adjectives = [
    "Happy",
    "Sunny",
    "Brave",
    "Clever",
    "Gentle",
    "Witty",
    "Kind",
    "Lively",
    "Calm",
    "Jolly",
  ];
  const nouns = [
    "Rabbit",
    "Penguin",
    "Dolphin",
    "Tiger",
    "Lion",
    "Elephant",
    "Koala",
    "Panda",
    "Owl",
    "Squirrel",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return randomAdjective + randomNoun;
}

module.exports = generateRandomUsername;
