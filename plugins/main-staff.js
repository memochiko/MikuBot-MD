let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• Memo Chiko
🎩 *Rol:* Creador
💜 *Número:* Wa.me/56967964633

• MikuBot - Oficial
🎩 *Rol:* Bot Oficial
💜 *Número:* Wa.me/56971078264`
await conn.sendFile(m.chat, 'https://files.catbox.moe/4wcnay.jpg', 'staff.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL 🌟`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icons }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = false
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler