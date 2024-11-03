/*

# Base By 𝗠𝗥 𝗗𝗢𝗚
# Owner ? : 𝗠𝗥 𝗗𝗢𝗚
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254763023036']
global.ownMain = '254763023036'
global.NamaOwner = '𝗠𝗥 𝗗𝗢𝗚' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝙎𝙋𝙄𝘿𝙀𝙍 - 𝙑9' //
global.author = '𝗠𝗥 𝗗𝗢𝗚' //
global.packname = 'spider-v9' //
global.url1 = 'https://https://whatsapp.com/channel/0029VarYE48Fcow7ghJ8153d' //
global.url2 = 'https://https://whatsapp.com/channel/0029VarYE48Fcow7ghJ8153d' //
global.linkgc = 'https://https://whatsapp.com/channel/0029VarYE48Fcow7ghJ8153d'
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.delayjpm = 3500
//Panel
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // 
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // 
global.eggsnya = '15' // 
global.location = '1' // 

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not 𝗠𝗥 𝗗𝗢𝗚',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Spider V9',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
