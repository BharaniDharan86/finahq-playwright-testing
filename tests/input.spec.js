const { test, expect } = require("@playwright/test");
const login = require("./loginTest");

test("input test", async ({ page }) => {
  await login(page);

  await page.click("//button[normalize-space()='Add']");

  await page.locator("//button[normalize-space()='Save']").click();

  const userNameError = await page
    .locator("//p[@id='name-helper-text']")
    .textContent();

  const emailError = await page
    .locator("//p[@id='email-helper-text']")
    .textContent();

  //when there is not value in the input fields we need to validation error to be shown

  // await expect(username).toBe("");
  // await expect(email).toBe("");
  await expect(userNameError).toBe("Required");
  await expect(emailError).toBe("Required");
});
