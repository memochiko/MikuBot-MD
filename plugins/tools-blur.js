let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/blur', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/NsJo.jpg'),
    }), 'hornycard.png', '*[ ✔ ]*', m)
    }
    handler.help = ['blur','difuminar']
    handler.tags = ['tools']
    handler.command = /^(blur|difuminar)$/i
    handler.estrellas = 4;
    export default handler