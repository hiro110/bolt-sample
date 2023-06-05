import { App, LogLevel, GenericMessageEvent } from "@slack/bolt";

// ボットトークンと Signing Secret を使ってアプリを初期化します
const app = new App({
  logLevel: LogLevel.DEBUG,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // ソケットモードではポートをリッスンしませんが、アプリを OAuth フローに対応させる場合、
  // 何らかのポートをリッスンする必要があります
  port: parseInt(process.env.PORT) || 3000,
});

// "hello" を含むメッセージをリッスンします
app.message('hello', async ({ message, say }) => {
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say({
    // https://github.com/slackapi/bolt-js/issues/904
    text: `Hey there <@${(message as GenericMessageEvent).user}>!`,
  });
  
  
});

(async () => {
  // アプリを起動します
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();