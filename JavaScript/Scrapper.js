const puppeteer = require("puppeteer");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const EMAIL = process.env.EMAIL;

const PASS = process.env.PASS;

module.exports = async function bot() {
  const url = `https://badoo.com/en-us/signin/?f=top`;

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await page.setDefaultTimeout(0);

  await page.goto(url);

  await page.waitForSelector('button[name="post"]');

  await page.type('input[name="email"]', EMAIL);

  await page.waitForTimeout(1000);

  await page.type('input[name="password"]', PASS);

  await page.click('button[name="post"]');

  await page.waitForSelector("span.profile-header__name");

  console.log("Logged in");

  await page.waitForTimeout(2000);

  console.log("starting scrapping");

  for (i = 0; i < 20000; i++) {
    let namestring = await page.$eval(
      "span.profile-header__name",
      (el) => el.innerText,
    );

    let agestrings = await page.$eval(
      "span.profile-header__age",
      (el) => el.innerText,
    );
    try {
      let biostring = await page.$eval(
        "div.profile-section__txt.profile-section__txt--about",
        (el) => el.innerText,
      );
      BioT = biostring.trim();
    } catch (error) {
      let biostring = "";
      BioT = biostring;
    }

    let agestring = agestrings.replace(/^,|,$/g, "");

    let birthyear = 2021 - agestring;

    NameT = namestring.trim();

    const post = await prisma.users.create({
      data: {
        Name: NameT,
        Bio: BioT,
        Birth: birthyear,
      },
    });

    console.log(post);

    await page.click('div[data-choice="no"]');

    await page.waitForTimeout(1500);
  }

  await page.close();

  console.log("Processa finished");
};
