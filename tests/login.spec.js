const { test, expect } = require("@playwright/test");
const login = require("./loginTest");

test("check login", async ({ page }) => {
  await login(page);

  const overview = await page.locator(
    "//p[@class='MuiTypography-root MuiTypography-body1 css-1gvzdja-MuiTypography-root']"
  );

  

  await expect(overview).toBeVisible();
});
