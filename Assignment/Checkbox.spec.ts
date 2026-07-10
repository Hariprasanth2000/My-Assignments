import { expect,test } from "@playwright/test";
test("Checkbox",async({page})=>{
  await page.goto("https://leafground.com/checkbox.xhtml")
  await page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').first().click();
  await page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').nth(0).click();
  //expected message is displayed
  await expect(page.locator('//div[@class="ui-growl ui-widget"]').first()).toHaveText("InformationChecked")
 await page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').nth(2).click();
 await page.locator('//div[@id="j_idt87:ajaxTriState"]/div').nth(1).click();
 //await expect(locator).toBeEnabled()--Tri state option has been chosen
 await expect(page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').nth(2)).toBeEnabled()

 await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
 //expected message is displayed
 await expect(page.locator('//div[@class="ui-toggleswitch-slider"]')).toContainText("")
 //await expect(page.locator('//div[@class="ui-selectbooleancheckbox ui-chkbox ui-widget"]/div"]').last()).toBeDisabled()
await page.locator('//div[contains(@class,"ui-state-default ui-corner-all")]').click()
await page.locator('//li[@data-item-value="London"]//div[contains(@class,"ui-chkbox-box")]').click();
await page.locator('//li[@data-item-value="Paris"]//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').click()
await page.locator('//li[@data-item-value="Rome"]//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').click()
await expect(page.locator('//div[contains(@class,"ui-state-default ui-corner-all")]')).toBeVisible()

await page.waitForTimeout(3000);
await page.close()
})