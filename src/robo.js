const puppeteer = require('puppeteer');

console.log('##### 🤖  Início da análise 🤖 #####');
console.log('Robô em serviço! 💰');

async function robo(listaNnAcoes) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const valores = [];

  for(countAcoes in listaNnAcoes){

    const qualquerUrl = `https://www.google.com/search?q=${listaNnAcoes[countAcoes]}&oq=${listaNnAcoes[countAcoes]}&aqs=chrome.0.69i59l2j35i39j0i512l2j69i60l3.2450j1j9&sourceid=chrome&ie=UTF-8`
   
    await page.goto(qualquerUrl);

    const resultado = await page.evaluate(() => {
      return document.querySelector('.IsqQVc.NprOob.wT3VGc').textContent;
    });

    valores.push(resultado);
  }

  console.log(`Ações analisadas: ${listaNnAcoes}`)
  console.log(`Valores capturados: ${valores}`)
  console.log('##### 🤖   Fim da análise   🤖 #####');

  await browser.close();

  return valores;
}

//robo(['TAEE4', 'PETR4']);

module.exports = {
  robo
}
