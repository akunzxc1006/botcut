import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `I Like This Word`, `yutadev@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/ImYanXiao`, `👤 Owner Bot`],
    [`6281197911081`, `Yuta Developer`, `Developer Script`, `Kang Copas 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 https://youtube.com/@yutadeveloper`, `Just human, But not perfect ☺`]
  ], fkontak)
  await m.reply(`_Berikut Adalah Nomor Owner Bot..._`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler