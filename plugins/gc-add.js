Olet handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `Ingrese el numero al que quiere enviar una invitacion al grupo.\n\n*Ejemplo:*\n*${usedPrefix + command}* 50557865603`, m, rcanal)
if (text.includes('+')) return conn.reply(`Ingrese el numero todo junto sin el *+*`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `*Ingrese solo numeros mas su codigo de pais sin espacios*`, m, rcanal)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

      await conn.reply(text+'@s.whatsapp.net', `*INVITACION A GRUPO*\n\nUn usuario te invito a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`Se envio un enlace de invitacion al usuario.`) 

}
handler.help = ['invitar *<numero>*']
handler.tags = ['grupo']
handler.command = ['add', 'invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler