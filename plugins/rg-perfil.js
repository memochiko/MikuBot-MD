import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
import fs from 'fs';

const loadMarriages = () => {
    if (fs.existsSync('./media/database/marry.json')) {
        const data = JSON.parse(fs.readFileSync('./media/database/marry.json', 'utf-8'));
        global.db.data.marriages = data;
    } else {
        global.db.data.marriages = {};
    }
};

var handler = async (m, { conn }) => {
    loadMarriages();

    let who;
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
    } else {
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    }

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/d0sfxs0T/file.jpg');
    let { premium, level, genre, birth, description, estrellas, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[who] || {};
    let username = conn.getName(who);

    genre = genre === 0 ? 'No especificado' : genre || 'No especificado';
    age = registered ? (age || 'Desconocido') : 'Sin especificar';
    birth = birth || 'No Establecido';
    description = description || 'Sin Descripción';
    role = role || 'Aldeano';
    let isMarried = who in global.db.data.marriages;
    let partner = isMarried ? global.db.data.marriages[who] : null;
    let partnerName = partner ? conn.getName(partner) : 'Nadie';

    let noprem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* *${username}*
│⧼💠⧽ *ᴇᴅᴀᴅ:* *${age}*
│⧼⚧️⧽ *ɢᴇɴᴇʀᴏ:* *${genre}*
│⧼🎂⧽ *ᴄᴜᴍᴘʟᴇᴀɴ̃ᴏs:* ${birth}
│⧼👩‍❤️‍👩⧽ *ᴄᴀsᴀᴅᴏ:* ${isMarried ? partnerName : 'Nadie'}
📜 *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:* ${description}
│⧼🌀⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}

╰─────────────────⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💴⧽ *estrellas:* ${estrellas || 0}
│⧼🌟⧽ *ɴɪᴠᴇʟ:* ${level || 0}
│⧼✨⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp || 0}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ *𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒* ⪩

> ✧ Para editar tu perfil usa *#perfildates*`.trim();

    let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* *${username}*
│⧼💠⧽ *ᴇᴅᴀᴅ:* *${age}*
│⧼⚧️⧽ *ɢᴇɴᴇʀᴏ:* *${genre}*
│⧼🎂⧽ *ᴄᴜᴍᴘʟᴇᴀɴ̃ᴏs:* ${birth}
│⧼👩‍❤️‍👩⧽ *ᴄᴀsᴀᴅᴏ:* ${isMarried ? partnerName : 'Nadie'}
📜 *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:* ${description}
│⧼🌀⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}

╰─────────────────⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💴⧽ *estrellas:* ${estrellas || 0}
│⧼🌟⧽ *ɴɪᴠᴇʟ:* ${level || 0}
│⧼✨⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp || 0}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim();

    conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, { mentions: [who] });
}

handler.help = ['profile'];
handler.register = true;
handler.group = false;
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];
handler.estrellas = 2;

export default handler;