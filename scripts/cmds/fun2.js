const axios = require('axios');

module.exports = {
  config: {
    name: "hot",
    aliases: ["hotvideo"],
    version: "2.0",
    author: "Amit Max ⚡",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you random video to entertain you",
    category: "Hot",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "let me entertain you wait...🤡",
    });

    const driveLinks = [
      "https://drive.google.com/file/d/13t3UibYYbEUWG7EoWT7LGbepmM6mmM9g/view?usp=drivesdk",
      "https://drive.google.com/file/d/12wXF3ir_QHPLTT3MbG0IGC8qrPloO8Sa/view?usp=drivesdk",
    


    ];

    const availableVideos = driveLinks.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomDriveLink = availableVideos[randomIndex];


    const fileId = randomDriveLink.match(/\/d\/(.+?)\//)[1];


    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    this.sentVideos.push(randomDriveLink);

    if (senderID !== null) {
      try {
        const response = await axios({
          method: 'GET',
          url: downloadLink,
          responseType: 'stream',
        });

        message.reply({
          body: '',
          attachment: response.data,
        });

        setTimeout(() => {
          api.unsendMessage(loadingMessage.messageID);
        }, 10000);
      } catch (error) {
        console.error('Error downloading video:', error);
        message.reply({
          body: 'Error downloading the video. Please try again later.',
        });
      }
    }
  },
};
