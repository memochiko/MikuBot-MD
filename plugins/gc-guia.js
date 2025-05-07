let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `🌠 Ya Reclamastes Tu Cofre\𝚗Vuelve en *${msToTime(time - new Date())}* Para Volver A Reclamar`

let img = 'https://files.catbox.moe/ss3nad.jpg' 
let texto = `𝙂𝙪𝙞𝙖 𝘽𝙖́𝙨𝙞𝙘𝙖:

*Administracion*

1. .on/off audios
2. .on/off modoadmin
3. .on/off bienvenida
4. .grupo abrir/cerrar

*Moderacion*

1. .setwelcome texto @user
2. .setbye texto @user
3. .promote @user *(𝘥𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
4. .demote @user *(𝘳𝘦𝘵𝘪𝘳𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
5. .setreglas texto

*Acciones*

1. .menu *(𝘓𝘪𝘴𝘵𝘢 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴)* 
2. .del *(𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘦𝘭 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
3. .fantasmas *(𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴)* 
4. .todos *(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘨𝘦𝘯𝘦𝘳𝘢𝘭 𝘤𝘰𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*
5. .noti *(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘴𝘪𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['guia']
handler.tags = ['grupo']
handler.command = ['guia', 'guía'] 
export default handler