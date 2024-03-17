import puppeteer from "puppeteer";
import fs from "node:fs";
let old = true;

// Fungsi untuk mengambil nama acak dari array
function getRandomName() {
  // Baca file json
  const data = fs.readFileSync("name.json", "utf8");

  try {
    // Ubah data json menjadi array
    const dataArray = JSON.parse(data);

    // Ambil nama acak dari array
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    const randomName = dataArray[randomIndex];

    return randomName;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}
function getRandomNumber() {
    return Math.floor(Math.random() * 28) + 1;
  }


const run = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://gmail.com");
  const element = await page.$(".YLIzab");
  if (element) {
    old = false;
    await page.waitForSelector(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.BqKGqe.eR0mzb.TrZEUc.J7pUA"
    );
    await page.click(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.BqKGqe.eR0mzb.TrZEUc.J7pUA"
    );
    await page.click(".gNVsKb.G3hhxb.VfPpkd-StrnGf-rymPhb-ibnC6b");
  } else {
    old = true;
    await page.waitForSelector(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.FliLIb.uRo0Xe.TrZEUc.Xf9GD"
    );
    await page.click(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.FliLIb.uRo0Xe.TrZEUc.Xf9GD"
    );
    await page.click(".G3hhxb.VfPpkd-StrnGf-rymPhb-ibnC6b");
  }
  await page.waitForSelector("#firstName");
  const firstName = await page.$("#firstName");
  const lastName = await page.$("#lastName");
  await lastName.type(getRandomName());
  await firstName.type(getRandomName());

  if (old) {
    await page.click(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.qIypjc.TrZEUc.lw1w4b"
    );
  } else {
    await page.click(
      ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.BqKGqe.Jskylb.TrZEUc.lw1w4b"
    );
  }
  await page.waitForSelector("#month");
  const totalOptions = await page.evaluate(async () => {
    const selectElement = await document.querySelector("#month");
    return selectElement.options.length;
  });
  const randomIndex = Math.floor(Math.random() * totalOptions);
  await page.select("#month", randomIndex.toString());


  
  

  setTimeout(async () => await browser.close(), 50000);
};

run();

// whsOnd zHQkBf old |  whsOnd zHQkBf new
