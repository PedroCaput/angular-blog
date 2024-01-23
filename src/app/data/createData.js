const fs = require('fs-extra');

const generateDataScript = (htmlContent) => {
  // Lógica para analisar o conteúdo HTML e gerar o array de dados

  const regexBigCard = /<app-big-card(?:[^>]*\s+id="([^"]+)")?(?:[^>]*\s+photoCover="([^"]+)")?(?:[^>]*\s+cardTitle="([^"]+)")?(?:[^>]*\s+cardDescription="([^"]+)")?\s*>/g;
  const regexSmallCard = /<app-small-card\s+id="([^"]+)"\s+cardTitle="([^"]+)"\s+photoCover="([^"]+)"\s*>/g;
  
    let match;
    const data = [];

// Extrai dados de app-big-card
while ((match = regexBigCard.exec(htmlContent)) !== null) {
  console.log('Match found for app-big-card:');
  const [, id, photoCover, cardTitle, cardDescription] = match;
  data.push({
    id,
    photoCover,
    cardTitle,
    cardDescription
  });
}
  
  // Extrai dados de app-small-card
  while ((match = regexSmallCard.exec(htmlContent)) !== null) {
    console.log('Match found for app-small-card:');
    const [, id, cardTitle, photoCover] = match;
    data.push({
      id,
      cardTitle,
      photoCover
    });
  }

  // Gerar o arquivo data.ts
  const content = `export const data = ${JSON.stringify(data, null, 2)};`;

  fs.writeFileSync('app/data/data.ts', content, 'utf-8');
};

// Leitura do conteúdo do home.component.html
const htmlContent = fs.readFileSync('app/pages/home/home.component.html', 'utf-8');

// Chamada da função para gerar o arquivo data.js
generateDataScript(htmlContent);

console.log('Script executado com sucesso!');
