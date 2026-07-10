import { test } from "@playwright/test";
test("CSS Selector",async({page})=>{
 
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill("Demosalesmanager")
    //await page.getByRole('textbox',{name:"Password"}).fill("crmsfa")
    //await page.getByRole("button",{name:"Login"}).click();
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator ('//input[@id="createLeadForm_companyName"]').fill("Testing Company")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Hari Prasanth")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill ("R")
    await page.locator('//input[@name="personalTitle"]').fill("Mr.")
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("Income TAX")
    //await page.selectOption('//select[@id="createLeadForm_industryEnumId"]',{value:"IND_HARDWARE"})
    await page.locator('//input[@name="annualRevenue"]').fill("20000000")
    await page.locator('//input[@name="departmentName"]').fill("Manual Testing")
    await page.locator('//input[@name="primaryPhoneNumber"]').nth(3).fill("8667893111")
    await page.locator('//input[@name="submitButton"]').click();
    const Title=await page.title();
    console.log("Title: "+Title);
    await page.waitForTimeout(5000);
   
    
})