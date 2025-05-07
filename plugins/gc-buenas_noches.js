import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;

    // Verificamos si se menciona a alguien o se cita un mensaje
    if (m.mentionedJid.length > 0) {
        who = m.mentionedJid[0]; // Si hay mención, usamos esa
    } else if (m.quoted) {
        who = m.quoted.sender; // Si se cita un mensaje, usamos el emisor de ese mensaje
    } else {
        who = m.sender; // En caso contrario, usamos el emisor
    }

    let name = conn.getName(who); // Nombre de la persona mencionada o del emisor
    let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
    m.react('🌚');

    // Construimos el mensaje dependiendo de si hay una mención o no
    let str;
    if (m.mentionedJid.length > 0) {
        str = `${name2} buenas noches ${name || who}.`; // Usamos nombre agendado o número si no está agendado
    } else if (m.quoted) {
        str = `${name2} buenas noches ${name || who}.`; // Mensaje cuando se cita a otro usuario
    } else {
        str = `${name2} buenas noches a todos en el grupo les deseo dulces sueños.`.trim();
    }

    if (m.isGroup) {
        let pp = 'https://files.catbox.moe/0n2bf5.mp4'; 
        let pp2 = 'https://files.catbox.moe/0im4vk.mp4'; 
        let pp3 = 'https://files.catbox.moe/zua131.mp4';
        let pp4 = 'https://files.catbox.moe/9cm0x9.mp4';
        let pp5 = 'https://files.catbox.moe/7kxjhv.mp4';
        let pp6 = 'https://files.catbox.moe/id09sr.mp4';
        let pp7 = 'https://files.catbox.moe/3kyhf0.mp4';
        let pp8 = 'https://files.catbox.moe/4qokmi.mp4';

        const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
        const video = videos[Math.floor(Math.random() * videos.length)];

        // Enviamos el mensaje con el video y el mensaje correspondiente
        let mentions = [who]; // Mencionamos al usuario que se ha citado o mencionado
        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
    }
}

handler.help = ['noches/nights  @tag'];
handler.tags = ['grupo'];
handler.command = ['noches','noche','nights'];
handler.group = true;

export default handler;