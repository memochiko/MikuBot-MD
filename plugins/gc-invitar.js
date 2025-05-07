
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `Ingrese el numero al que quiere enviar una invitacion al grupo\n\nEjemplo :\n*${usedPrefix + command}* 56067964633`
if (text.includes('+')) throw  `Ingrese el numero todo junto sin el *+*`
if (isNaN(text)) throw 'Ingrese solo numeros mas su codigo de pais sin espacios'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `*INVITACION A GRUPO*\n\nUn usuario te invito a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
m.reply(`Se envio un enlace de invitacion al usuario.`) 

}
handler.help = ['invite *<numero>*']
handler.tags = ['grupo']
handler.command = ['invite', 'invitar'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
