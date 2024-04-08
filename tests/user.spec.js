const { test, expect } = require("@playwright/test");
const generateRandomEmail = require("./utils/email");
const generateRandomUsername = require("./utils/username");
const randomIndex = require("./utils/randomIndex");
const login = require("./loginTest");

test("user", async ({ page }) => {
  // function to login
  await login(page);

  await page.click("//button[normalize-space()='Add']");

  //generating random user email and fill them in the input box
  const email = generateRandomEmail();
  const username = generateRandomUsername();
  await page.locator("//input[@id='name']").fill(username);
  await page.locator("//input[@id='email']").fill(email);

  //click on the down arrow button
  await page.click(
    "//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorHighlight MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-7q255a-MuiInputBase-root-MuiOutlinedInput-root']//button[@title='Open']"
  );

  //selecting all the option in the dropdown
  const listItems = await page.$$("ul.css-7rr1u0-MuiAutocomplete-listbox li");

  const listItemTexts = [];
  for (const listItem of listItems) {
    const textContent = await listItem.textContent();
    listItemTexts.push(textContent);
  }

  //reading the number of options
  const numOfOptions = listItemTexts.length;

  //checking the number of options
  expect(numOfOptions).toBe(13);

  //generating random index to select the dropdown
  const selectInd = randomIndex(13);

  await page.click(`li[role="option"][data-option-index="${selectInd}"]`);
  await page.locator("//button[normalize-space()='Save']").click();
  await page.waitForSelector(".go1475592160");

  let result = await page.locator(".go1475592160").textContent();

  result = result.toLowerCase();

  //checking the add user form submission
  await expect(result).toBe("user add successfully");

  await page.waitForTimeout(3000);
});
