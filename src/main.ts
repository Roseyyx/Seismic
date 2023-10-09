/** @format */

import { Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.MessageContent]
})

client.login(process.env.DISCORD).catch((err) => console.log(err))
