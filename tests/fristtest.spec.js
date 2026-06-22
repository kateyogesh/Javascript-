const {test, expect} = require('@playwright/test');

test("launch application", async ({page}) => {

    await page.goto("https://www.cricbuzz.com/");
    await expect(page).toHaveTitle(/Cricbuzz/);

})
