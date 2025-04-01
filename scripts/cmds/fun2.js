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
      "https://drive.google.com/file/d/14Y3xgv4QtRXI-Rp2FWOE02exn64VmZZ3/view?usp=drivesdk",
      "https://drive.google.com/file/d/14seg6wY3XOkugrGRS6Cb8ap42tA3uqVM/view?usp=drivesdk",
      "https://drive.google.com/file/d/13CLkzlJ4O1AJVF-zOCMYJSdRP89kJ8TD/view?usp=drivesdk",
      "https://drive.google.com/file/d/131eK1tUWwDJQVRukVkUlpNp947lScINU/view?usp=drivesdk",
      "https://drive.google.com/file/d/13D6rGpz3TMcN1TGHW-hi75QJbMAKexU4/view?usp=drivesdk",
      "https://drive.google.com/file/d/13GVrsWVqChcsvp5BYaW1zAc0gSK6BvcA/view?usp=drivesdk",
      "https://drive.google.com/file/d/136EKtYvefiZe12zyZBGFvrGPyZ8Jt5ri/view?usp=drivesdk",
      "https://drive.google.com/file/d/13z7fXXLVFfKyaEbRy-sIWYo0GC1xio6K/view?usp=drivesdk",
    


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
