import { spawn } from 'child_process';

let handler = async (m, { conn, isROwner }) => {
    if (!isROwner) throw 'Solo el dueño puede reiniciar el bot';

    await m.reply('🔄 Reinstalando Servidor ✨');

    try {
        // Si `process.send` existe, es un proceso hijo
        if (typeof process.send === 'function') {
            process.send('reset');
        } else {
            // Reinicio manual si no es un proceso hijo
            spawn(process.argv[0], process.argv.slice(1), {
                cwd: process.cwd(),
                detached: true,
                stdio: 'inherit'
            });
            process.exit(0); // Cierra el proceso actual
        }
    } catch (e) {
        m.reply(`Ocurrió un error al reiniciar: ${e.message}`);
    }
};

handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;

export default handler;