const { test, expect } = require("@playwright/test");
const login = require("./loginTest");
const path = require("path");

test("label ", async ({ page }) => {
  //function to login
  await login(page);

  await page.click("//button[normalize-space()='Add']");

  //getting all the labels
  const labels = await page.$$(
    "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1isesj-MuiGrid-root']//div//label"
  );

  const labelArr = [];

  const expectedLabel = ["Name*", "Mail ID*", "Group*", "Entity Data Access"];

  for (let label of labels) {
    labelArr.push(await label.textContent());
  }

  // expecting the label value showed be in expected Label
  for (let expected of expectedLabel) {
    await expect(labelArr).toContain(expected);
  }
});
