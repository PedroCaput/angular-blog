const minWidth1 = 360; // 640
const minWidth2 = 720; // 1280
const minWidth3 = 768; // 576
const minWidth4 = 1024; // 600
const minWidth5 = 1366; // 768

const minHeight1 = 640;
const minHeight2 = 1280;
const minHeight3 = 576;
const minHeight4 = 600;
const minHeight5 = 768;


function convertInPercentuals(nameX, percentual100, percentualX, name100){
    valueInPercentual = (percentualX * 100) / percentual100;
    console.log(nameX + ": " + percentualX + "px é igual a " + valueInPercentual.toFixed(2) + "% de " + percentual100 + "px. Que é do " + name100)
}

let fontSizeMenuTitle = 80;

const container__articles = {
    name: "container__articles",
    width: 1366, // 100% do layout principal
    height: 500 // 65.1% do layout principal
}

const articles__main = {
    name: "articles_main",
    width: 440, // do container__articles
    height: 500 // do container__articles
}

const big_card_photo = {
    name: "big_card_photo",
    width: 400, // do articles__main
    height: 204 // do articles__main
}

const big_card_title = {
    name: "big_card_title",
    width: 310, // do articles__main
    height: 42 // do articles__main
}

const articles__other = {
    name: "articles__other",
    width: 700, // do container__articles
    height: 500 // do container__articles
}

const small_card = {
    name: "small_card",
    width: 700,
    height: 128.5
}

const container__menu_title = {
    name: "container__menu-title",
    width: 1366,
    height: 145
}

const header = {
    name: "header",
    width: 1366,
    height: 21
}

convertInPercentuals(header.name, minHeight5, header.height, "layout Principal");
convertInPercentuals(header.name, minWidth5, header.width, "layout Principal");
console.log("-----------------");
convertInPercentuals(container__menu_title.name, minWidth5, container__menu_title.width, "layout Principal");
convertInPercentuals(container__menu_title.name, minHeight5, container__menu_title.height, "layout Principal");
console.log("-----------------");
convertInPercentuals(small_card.name, articles__other.width, small_card.width, articles__other.name);
convertInPercentuals(small_card.name, articles__other.height, small_card.height, articles__other.name);
console.log("-----------------");
convertInPercentuals(articles__other.name, container__articles.width, articles__other.width, container__articles.name);
convertInPercentuals(articles__other.name, container__articles.height, articles__other.height, container__articles.name);
console.log("-----------------");
convertInPercentuals(articles__main.name, container__articles.width, articles__main.width, container__articles.name);
convertInPercentuals(articles__main.name, container__articles.height, articles__main.height, container__articles.name);
console.log("-----------------");
convertInPercentuals(big_card_title.name, articles__main.width, big_card_title.width, articles__main.name);
convertInPercentuals(big_card_title.name, articles__main.height, big_card_title.height, articles__main.name);
console.log("-----------------");
convertInPercentuals(big_card_photo.name, articles__main.width, big_card_photo.width, articles__main.name);
convertInPercentuals(big_card_photo.name, articles__main.height, big_card_photo.height, articles__main.name);
console.log("-----------------");
convertInPercentuals(container__articles.name, minWidth5, container__articles.width, "layout Principal");
convertInPercentuals(container__articles.name, minHeight5, container__articles.height, "layout Principal");

/*

header: 21px é igual a 2.73% de 768px. Que é do layout Principal
header: 1366px é igual a 100.00% de 1366px. Que é do layout Principal

-----------------

container__menu-title: 1366px é igual a 100.00% de 1366px. Que é do layout Principal
container__menu-title: 145px é igual a 18.88% de 768px. Que é do layout Principal

-----------------

small_card: 700px é igual a 100.00% de 700px. Que é do articles__other
small_card: 128.5px é igual a 25.70% de 500px. Que é do articles__other

-----------------

articles__other: 700px é igual a 51.24% de 1366px. Que é do container__articles
articles__other: 500px é igual a 100.00% de 500px. Que é do container__articles

-----------------

articles_main: 440px é igual a 32.21% de 1366px. Que é do container__articles
articles_main: 500px é igual a 100.00% de 500px. Que é do container__articles

-----------------

big_card_title: 310px é igual a 70.45% de 440px. Que é do articles_main
big_card_title: 42px é igual a 8.40% de 500px. Que é do articles_main

-----------------

big_card_photo: 400px é igual a 90.91% de 440px. Que é do articles_main
big_card_photo: 204px é igual a 40.80% de 500px. Que é do articles_main

-----------------

container__articles: 1366px é igual a 100.00% de 1366px. Que é do layout Principal
container__articles: 500px é igual a 65.10% de 768px. Que é do layout Principal

*/