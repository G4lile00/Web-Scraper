const fs = require("fs");
const puppeteer = require("puppeteer")



const url = "https://badoo.com/"

async function Scan() {
    const browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=200x300`],
      });
    
      const page = await browser.newPage();
    
      console.log("Starting on Tinder");
    
    
      //page get
    
      await page.goto(url);
    
    
      await page.waitFor(15000);
      //login
      page.waitFor(20000)
    
      console.log("Have loged in");
    
      await page.waitFor(3000);


}

Scan();
