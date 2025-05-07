import axios from 'axios'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler = async function (m, { conn, usedPrefix, command }) {
    let user = global.db.data.users[m.sender]
    let defaultName = conn.getName(m.sender) || "UsuarioDesconocido";
let ager = [ "18", "19", "20", "17", "16"].getRandom();
    let defaultAge = ager

    if (user.registered === true) {
        return m.reply(`📩 Ya te encuentras en mi base de datos.\n\n¿Quiere volver a registrarse?\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg*`)
    }

    user.name = defaultName.trim()
    user.age = defaultAge
    user.regTime = +new Date
    user.registered = true
  global.db.data.users[m.sender].estrellas += 5
    global.db.data.users[m.sender].exp += 100
    global.db.data.users[m.sender].joincount += 3    

    let sn = createHash('md5').update(m.sender).digest('hex')
    let regbot = `┏━━━━━━━━━━━━━━━━━━⬣
┃⋄ *🍭 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 - 𝐑𝐀𝐏𝐈𝐃𝐎*
┗━━━━━━━━━━━━━━━━━━⬣\n`
    regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
    regbot += `「💛」 Nombre: ${defaultName}\n`
    regbot += `「💛」 Edad: ${defaultAge} años\n`
    regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
    regbot += `「💝」𝐑𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐬:\n> `
    regbot += `• 5 Estrellas 🌟\n> `
    regbot += `• 3 CrowCoins 🪙\n> `
    regbot += `• 100 Experiencia 💸\n> `
    regbot += `• 5 Tokens 💰\n`
    regbot += `꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷\n> `
    regbot += `🎩 Verifica Tu Registro Aqui 👇🏻`

    await m.react('🍷')
    await conn.sendMessage(m.chat, {
        text: regbot,
        contextInfo: {
            externalAdReply: {
                title: '⊱『🌃𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥🍬』⊰',
                body: '¡Bienvenido a MikuBot!',
                thumbnailUrl: 'https://files.catbox.moe/4wcnay.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029Vb69fH71CYoIZGxphZ1x',
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

    let channelID = '120363401108858627@newsletter';
    let messageContent = `◉ *Usuarios:* ${m.pushName || 'Anónimo'}\n◉ *Verificación:* ${defaultName}\n◉ *Edad:* ${defaultAge} años\n◉ *Número de serie:*\n⤷ ${sn}\n\n🎁 *Recompensa:* 5 Estrellas 🪙\n*¡Bienvenido/a al bot!*`;

    await conn.sendMessage(channelID, {
        text: messageContent
    });
}

handler.help = ['regaut']
handler.tags = ['rg']
handler.command = ['regaut', 'regautomatico', 'regrapido']

export default handler