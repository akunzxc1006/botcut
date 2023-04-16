//Thanks Zyko
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
m.reply('_Tunggu Sebentar..._')
let yuta = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await yuta.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler