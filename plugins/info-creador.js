import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('🎩');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "Memo Chiko-Ofc 🎩",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Memo Chiko 💜\nitem1.TEL;waid=56967964633:56967964633\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: memochiko.oficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/_.memochiko\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Chile;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Hola soy Memo Chiko',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/ss3nad.jpg',
                sourceUrl: 'https://github.com/memochiko',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;