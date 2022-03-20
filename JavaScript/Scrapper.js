const puppeteer = require("puppeteer");

const add = require("./Add");

const write = require("./Write");

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


module.exports = async function bot() {
  const url = "https://badoo.com/en-us/signin/?f=top";

  const browser = await puppeteer.launch({ headless: true });

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
    

    NameT = namestring.trim()
    add(NameT, "", birthyear,"","","");

    write(info);

    const post = await prisma.user.create({
      data:{
        Name: NameT,
        Birth: birthyear
      }

    })
    
    console.log(post)

    await page.click('div[data-choice="no"]')

    await page.waitForTimeout(1500);
  }

  await page.close()

}
