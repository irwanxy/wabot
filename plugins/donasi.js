let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  Smartfren [0888-2611-841]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [0888-2611-841]
│ • https://saweria.co/irwanxyans
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
