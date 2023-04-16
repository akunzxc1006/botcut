let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *SEWA + PREMIUM* 」
┊⫹⫺ *Hemat:* _5 Ribu 15 Hari_
┊⫹⫺ *Normal:* _7 Ribu 30 Hari_
┊⫹⫺ *Standar:* _10 Ribu 2 Bulan_
┊⫹⫺ *Pro:* _15 Ribu 4 Bulan_                                      
┊⫹⫺ *Vip:* = _20 Ribu Permanen_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Qris All Payment*

–––––– *🐾 Kebijakan* ––––––
Beli Premium Free Masuk Grup 1 Kali
Sewa Bot Free Premium
*1 Paket Ya Cuy, Murah*

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} Minat? ✦-------`,
	rows: [
	    {title: "🔖 Hubungi Owner", rowId: '.owner', description: 'Budayakan Salam!!' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler