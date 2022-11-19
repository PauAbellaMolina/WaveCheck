import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import * as lammaService from "./lamma.service";

console.log("---------------------------------------------------------------------------------");

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => {
  const message = `Im going to warn when there is surfeable conditions.`;
  ctx.reply(message);
});

bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.command('commands', (ctx) => ctx.reply('commands'));

console.log(lammaService.getTodayGif());

bot.hears('lamma', (ctx) => ctx.replyWithPhoto('https://www.lamma.rete.toscana.it/models/ww3lr/last/swh.Y.1.png?1668888971071'));

bot.launch();
