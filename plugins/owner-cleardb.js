import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `🚩 Realizado, ya se ha eliminado la database`, m, rcanal, )

const tmp = [tmpdir(), join(__dirname, '../media/database/db.json')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} //NO USAR ESTE COMANDO EN HEROKU | DO NOT USE THIS COMMAND ON HEROKU
handler.help = ['cleardb']
handler.tags = ['owner']
handler.command = /^(cleardb|cleardatabase|borrardb|eliminardb|borrardatabase|borrardatabase)$/i
handler.exp = 500
handler.rowner = true
export default handler