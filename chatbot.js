// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {    

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(500); //delay de 0.5 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(500);
        await client.sendMessage(msg.from, 'Todas os anuncios e contatos estão nos sites: \n\nFranca(Clique no link):\n https://www.francaclassificados.com/ \n\n Ribeirão Preto(Clique no link):\n https://www.ribeiraopretoclassificados.com/ \n\n Uberlândia(Clique no link):\n https://www.uberlandiaclassificados.com/ \n\n São josé do Rio Preto(Clique no link):\n https://www.spclassificados.com/ \n\n Belo Horizonte(Clique no link):\n https://www.bhclassificados.com/ \n\n Digite 3 para voltar \n');
      
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(500); //Delay de 500 milisegundos mais conhecido como 0.5 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(500);
        await client.sendMessage(msg.from, 'Em breve um dos nosso atendentes entrará em contato.');

        await delay(5000); //delay de 0.5 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(500);
        await client.sendMessage(msg.from, 'No momento estamos com uma alta demanda. Retornaremos o mais rápido possível. \n\n Ou digite 3 para voltar \n');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(500); //Delay de 500 milisegundos mais conhecido como 0.5 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(500);
        await client.sendMessage(msg.from, 'Escolha uma opção abaixo:\n\n 1 - Informações de anúncios que estão na plataforma\n 2 - Anunciar\n');
        
    }
    

});