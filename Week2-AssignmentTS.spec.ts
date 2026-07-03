import {chromium,firefox,test,expect } from "@playwright/test";
test ("Launch Firefox and Edge",async()=>{
// Firefox
const browser=await firefox.launch();
const context=await browser.newContext()
const page=await context.newPage();
await page.goto("https://www.flipkart.com")
const tittle=await page.title()
const url=page.url()
console.log("Flipkart Tittle: " + tittle);
console.log("Flipkart URL: "+url);
//Edge
const Edgebrowser=await chromium.launch({channel:"msedge"});
const edgecontext=await Edgebrowser.newContext()
const Edgepage=await edgecontext.newPage();
await page.goto("https://www.redbus.in")
const Edgetittle=await page.title()
const Edgeurl=page.url()
console.log("Redbus Tittle: "+Edgetittle);
console.log("Redbus URL: "+Edgeurl);

})