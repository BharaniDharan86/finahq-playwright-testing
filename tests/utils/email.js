function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomUsername = Math.random().toString(36).substring(7);
  return `${randomUsername}@${randomDomain}`;
}

module.exports = generateRandomEmail;
