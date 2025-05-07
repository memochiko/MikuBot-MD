let handler = async (m, { conn, usedPrefix, command }) => {

let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫\n\n☕︎︎ *Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad oficial* 💜

- ⧼★⧽ Grupo Oficial
*❑* ${grupo}

- ⧼★⧽ Grupo Oficial Team
*❑* ${gteam}

- ⧼★⧽ Grupo de Soporte
*❑* ${gsupport}

•┈┈┈┈┈┈••✦ ♡ ✦••┈┈┈┈┈┈•
 

⧼★⧽ Canal Oficial
*❏* ${channel}

> ${dev}

╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈≫`

let img = 'https://files.catbox.moe/4wcnay.jpg';

conn.sendMessage(m.chat, { image: { url: img }, caption: grupos }, { quoted: m });
}

handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'mikugrupos', 'gruposmiku']

export default handler