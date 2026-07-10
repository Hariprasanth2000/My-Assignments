import { expect,test } from "@playwright/test";
test("Sales Force",async({page})=>{
    //1--Create Lead
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//div[@class="slds-grid slds-grid_vertical-align-center al-text-wrapper"]').last().click();
    await page.locator('//span[text()="Leads"]').first().click()
    await page.locator('//button[@class="slds-button slds-button_neutral slds-button_first"]').first().click()
    await page.locator('//button[@name="salutation"]').click()
    await page.locator('//span[@part="input-button-value"]').nth(3).click()
    await page.locator('//input[@placeholder="Last Name"]').fill("Student")
    await page.locator('//input[@name="Company"]').fill("Work Together")
    await page.locator('//button[@name="SaveEdit"]').click()
    //Leads name created
    await expect(page.locator('//slot[@name="primaryField"]')).toContainText("Student");
    await page.waitForTimeout(3000)
    await page.close();

    // 2 Edit Lead
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//button[@class="slds-button"]').last().click()
    await page.locator('//div[@data-name="Sales"]').click();
    await page.locator('//span[text()="Leads"]').first().click();
    await page.locator('//button[@name="inlineEditButton"]').click()
    await page.locator('(//table[@role="grid"]//tr[@role="row"])[170]//button[contains(@title,"Show Actions")]').waitFor();
    await page.locator('(//table[@role="grid"]//tr[@role="row"])[170]//button[contains(@title,"Show Actions")]').click();
    await page.locator('//a[@title="Edit"]').click();
    const updatedCompany = "Updated Team Work";
    await page.locator('//button[@name="SaveEdit"]').click();
    await expect(page.locator('//records-record-layout-item[contains(.,"Company")]')).toContainText(updatedCompany);
    await page.waitForTimeout(3000)
    await page.close(); 

    //3 Create Individuals
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@class="slds-button"]').last().click()
    await page.waitForTimeout(3000)
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('(//one-app-nav-bar-menu-button)[14]').click()
    await page.locator('//span[text()="New Individual"]').click()
    await page.locator('//input[@placeholder="Last Name"]').fill("Hari Prasanth")
    await page.locator('//button[@class="slds-button slds-button_neutral uiButton--brand uiButton forceActionButton"]').click()
    await expect(page.locator('//div[@class="forceVisualMessageQueue"]')).toContainText("Hari Prasanth");
    await page.waitForTimeout(3000)
    await page.close(); 

    //4 Edit Individuals Test
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//div[@class="slds-icon-waffle"]').click()
     await page.waitForTimeout(3000)
    await page.locator('//button[@class="slds-button"]').last().click()
     await page.waitForTimeout(3000)
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//input[@name="Individual-search-input"]').fill("Hari Prasanth")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    await page.locator('//span[text()="Last Modified Date"]/following::td[6]').click();
    await page.locator('//div[@title="Edit"]').click()
    await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a[@role="button"]').click()
    
    await page.locator('//a[@title="Mr."]').click()
    await page.locator('//input[@placeholder="First Name"]').fill("Ramesh");
    await page.locator('//button[@class="slds-button slds-button_neutral uiButton--brand uiButton forceActionButton"]').click()
    await expect(await page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')).toContainText("Ramesh Hari Prasanth")
    await page.waitForTimeout(3000)
    await page.close(); 
})