import { expect,test } from "@playwright/test";
test("Assertion Data",async({page})=>{
await page.goto("https://leafground.com/input.xhtml")
await page.locator('//input[@Placeholder="Disabled"]')
//await expect(locator).toBeDisabled()
await expect (page.locator('//input[@Placeholder="Disabled"]')).toBeDisabled()
await page.locator('//input[@Placeholder="Babu Manickam"]')
//await expect(locator).toBeEditable()
await expect(page.locator('//input[@Placeholder="Babu Manickam"]')).toBeEditable()
await page.locator('//input[@Placeholder="Babu Manickam"]').fill("Hari Prasanth")
//Soft Assertion
await page.locator('//input[@id="j_idt106:float-input"]')
//await expect.soft(locator).toBeDisabled()
await expect.soft(page.locator('//input[@id="j_idt106:float-input"]')).toBeDisabled();
//Fill Data
await page.locator('//input[@id="j_idt88:j_idt97"]').fill("")
await page.locator('//input[@id="j_idt88:j_idt97"]').fill("Playwright Learning")
await page.waitForTimeout(3000)
}) 
