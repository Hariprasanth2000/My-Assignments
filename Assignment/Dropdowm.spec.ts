import { expect,test } from "@playwright/test";

test("Dropdown",async({page})=>{
    await page.goto("https://leafground.com/select.xhtml")
    await page.selectOption('//select[@class="ui-selectonemenu"]',{value:"Playwright"});
    const dropdown=await page.locator('//select[@class="ui-selectonemenu"]/option')
    const counts=await dropdown.count();
    console.log("Total Counts: "+counts);
    
    for(let index=1;index<=counts;index++){
        console.log(await page.locator(`(//select[@class="ui-selectonemenu"]/option)[${index}]`).innerText());
        
    }
    await page.locator('//label[@id="j_idt87:country_label"]').click()
    await page.locator('//li[@data-label="Brazil"]').click()
    await page.locator('//div[@id="j_idt87:city"]').click()
    await page.locator('//li[@data-label="Salvador"]').click()
    await page.locator('//span[@class="ui-button-text"]').click()
    await page.locator('//li[@data-item-label="PostMan"]').click()
    await page.locator('//li[@data-item-label="Playwright"]').click()
    await page.locator('//li[@data-item-label="ReactJs"]').click()
    await page.locator('//label[@id="j_idt87:lang_label"]').click()
    await page.locator('//li[@data-label="English"]').click()
    await page.locator('//label[@id="j_idt87:value_label"]').click()
    await page.locator('//li[@data-label="Three"]').click()
    
    await page.waitForTimeout(3000)
})