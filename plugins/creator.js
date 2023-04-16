import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `I like This World `, `yanxiao021@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/ImYanXiao`, `👤 Owner Bot`],
    [`6281197911081`, `Yuta Developer`, `Developer Sc ✨`, `Kang Copas 😢`, `Big Tqto: ImYanXiao`, `🇮🇩 Indonesia`, `📍 https://github.com/ImYanXiao`, `Berbahagialah Diatas Penderitaan Diri sendiri ☺`]
  ], fkontak)
  await m.reply(`Berikut Adalah Nomor Owner Bot...`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
/