async function login(page) {
  await page.goto("https://finahq.net/settings/users");

  await page.locator("#email").fill(process.env.EMAIL);
  await page.locator("id=:r1:").fill(process.env.PASSWORD);

  await page.locator("//button[normalize-space()='Login']").click();
}

module.exports = login;
