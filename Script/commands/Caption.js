module.exports.config = {
  name: "caption",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAJA",
  description: "মজার ভালোবাসার ক্যাপশন মেনশন সহ",
  commandCategory: "Fun",
  usages: "/caption @username",
  cooldowns: 5
};

const captions = [
  "তোমার হাসি আমার সবচেয়ে প্রিয় ছবি। 💖",
  "তুমি আমার জীবনের sweetest surprise। 🍬",
  "ভালোবাসা মানে তোমার নাম শোনার মধুর সুর। 🎶",
  "আমার পৃথিবী তুমি, বাকি সব নিঃশব্দ। 🌍",
  "তোমার সাথে কাটানো সময়, আমার সবচেয়ে ভালোবাসার সময়। 🕰️",
  "তুমি আমার হৃদয়ের মালিক। ❤️",
  "তুমি ছাড়া জীবনটা একদম ফাঁকা। 😔",
  "প্রেমের ভাষায় শুধু তোমাকে বলতে চাই, তুমি আমার সব। 💞",
  "তোমার চোখে চোখ রেখে বলতে চাই, চিরদিন তোমার হবো আমি। 👀",
  "তুমি থাকলে জীবনটা ফুলঝুড়ি। 🌸",
  // ১০০ ক্যাপশন পর্যন্ত বাড়ানো যাবে
];

module.exports.run = async ({ api, event }) => {
  if (!event.mentions || Object.keys(event.mentions).length === 0) {
    return api.sendMessage("❗ দয়া করে কাউকে ম্যানশন করে কমান্ডটি ব্যবহার করুন। উদাহরণ: /caption @username", event.threadID, event.messageID);
  }

  const mentionedID = Object.keys(event.mentions)[0];
  const randomCaption = captions[Math.floor(Math.random() * captions.length)];

  return api.sendMessage(
    `${randomCaption}`,
    event.threadID,
    event.messageID,
    { mentions: [{ id: mentionedID, tag: event.mentions[mentionedID].replace(/@/g, "") || event.mentions[mentionedID].name }] }
  );
};
