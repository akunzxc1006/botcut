/*ganti apikey lu co karena apikey ini di gangbang*/

var handler = async(m, {
conn, 
text, 
args, 
usedPrefix, 
command 
}) => {
if (!text) throw `*CONTOH*\n${usedPrefix + command} Bot`
let teks = encodeURI(text)
if (command == 'attp') {
conn.sendFile(m.chat, `https://api.botcahx.biz.id/attp?text=${teks}&apikey=70491091`, 'sticker.webp', '', m, { asSticker: true })}
};
handler.command = handler.help = ['attp'];
handler.tags = ['sticker'];
handler.limit = 10;
module.exports = handler;