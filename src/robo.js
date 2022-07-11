const puppeteer = require('puppeteer');
//const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor 🤖💰');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const nmAcao = 'TAEE4';

  const qualquerUrl = `https://www.google.com/search?q=${nmAcao}&oq=${nmAcao}&aqs=chrome.0.69i59l2j35i39j0i512l2j69i60l3.2450j1j9&sourceid=chrome&ie=UTF-8`
    
  await page.goto(qualquerUrl);
  // await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('.IsqQVc.NprOob.wT3VGc').textContent;
  });

  console.log(`O valor é ${resultado}`)
  await browser.close();

  return resultado;
}

module.exports = {
  robo
}
