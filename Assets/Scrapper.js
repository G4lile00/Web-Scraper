const puppeteer = require("puppeteer");

const add = require("./Controllers/add");

const write = require("./Write");

async function bot() {
  const url = "https://badoo.com/en-us/signin/?f=top";

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector('button[name="post"]');

  await page.type('input[name="email"]', "marcelinho.hd@gmail.com");

  await page.waitForTimeout(1000);

  await page.type('input[name="password"]', "Vitor2609");

  await page.click('button[name="post"]');

  await page.waitForSelector("span.profile-header__name");

  console.log("Logged in");

  await page.waitForTimeout(2000);

  console.log("starting scrapping");

  for (i = 0; i < 2000; i++) {
    let namestring = await page.$eval(
      "span.profile-header__name",
      (el) => el.innerText
    );

    let agestrings = await page.$eval(
      "span.profile-header__age",
      (el) => el.innerText
    );

    let agestring = agestrings.replace(/^,|,$/g, "");

    let birthyear = 2021 - agestring;

    add(namestring.trim(), "", birthyear,"","","");

    write(info);

    await page.waitForTimeout(500);
  }

  await page.close()

}

bot();
