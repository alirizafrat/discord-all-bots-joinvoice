const Eris = require('eris');
const tokens = [
    "token1",
    "token2"
    
];
const clients = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Eris.Client(token);
    console.log("Token Yerkleştirildi!")
    client.connect();
    console.log("Bağlantı Hazır!");
    client.on('ready', () => console.log('ready!'+client.user.name));
    client.on('error', (error) => console.log(error));
    clients[index] = client;
    client.on('messageCreate', async (message) => {
        if (message.author.id !== "discordidniz") return;
        if (message.content !== "!sesegir") return;
        for (let c = 0; c < clients.length; c++) {
            const clt = clients[c];
            await clt.joinVoiceChannel("seskanalıidsi");
        }
    });
}

process.on("unhandledRejection", (r) => {
    console.log(r);
})