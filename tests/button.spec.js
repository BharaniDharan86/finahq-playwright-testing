const { test, expect } = require("@playwright/test");

const path = require("path");
const login = require("./loginTest");
test("check button", async ({ page }) => {
  await login(page);

  await page.click("//button[normalize-space()='Add']");

  const sideBar = await page.locator(
    "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorRight css-4daecb-MuiPaper-root-MuiDrawer-paper']"
  );

  //when click on the add button we want the sidebar to be opened
  expect(sideBar).toBeVisible();

  await page.click(
    "//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-g3s3md-MuiButtonBase-root-MuiIconButton-root']"
  );

  //when click on the close button  we want the sidebar to be closed
  expect(sideBar).toBeHidden();
});
