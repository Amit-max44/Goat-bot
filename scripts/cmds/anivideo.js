const axios = require('axios');

module.exports = {
  config: {
    name: "anivideo",
    aliases: ["animevideo"],
    version: "2.0",
    author: "Amit Max ⚡",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you random video to entertain you",
    category: "Anime Video",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "ᴘʟᴇᴀꜱᴇ ᴡ8, ᴡᴇ ᴀʀᴇ ᴀɴɪᴍᴇ ꜰᴀɴ....✨🫵🏻",
    });

    const driveLinks = [
"https://drive.google.com/file/d/1568TtcKaqpnl2-Tf1eTcHiT0DIY_fvYS/view?usp=drivesdk",
"https://drive.google.com/file/d/157cQmanQYF2epWIHvBC-J6nr9xUdirmb/view?usp=drivesdk",
"https://drive.google.com/file/d/158kNNc0GJSYPcaeXa6qS09HkjnotkAl1/view?usp=drivesdk",
"https://drive.google.com/file/d/15MS_wRUxlk8XBbbGiVr2K36otGcm_AZH/view?usp=drivesdk",
"https://drive.google.com/file/d/15QuJTXeC1IwjY7zmfomui9FwWqwMzlCr/view?usp=drivesdk",
"https://drive.google.com/file/d/15TMxMCqCICoONRfvzXZM0zT7HcgzOUFR/view?usp=drivesdk",
"https://drive.google.com/file/d/15Unm0ufSf8AhRXYF6hnZvktyDpmxh7ql/view?usp=drivesdk",
"https://drive.google.com/file/d/15VtCOTQ2RPtKRaR_ydqUTTDvViLUFIP6/view?usp=drivesdk",
"https://drive.google.com/file/d/15W8oreSnNVivahwao3eoeEduzxMKKyWb/view?usp=drivesdk",
"https://drive.google.com/file/d/15_0eMM6bPU-zXpzqEG7tdd6yRrtqkUvL/view?usp=drivesdk",
"https://drive.google.com/file/d/15ex2BzfGZBJ1XUNxJVUOdOjj7BG-mkk4/view?usp=drivesdk",
"https://drive.google.com/file/d/15vFNjVnG1yPLmrPt_NoM35DwkWQRC_yB/view?usp=drivesdk",
"https://drive.google.com/file/d/160f0eoBA42GsL3Ix2uu_G5yIBkT5gKhn/view?usp=drivesdk",
"https://drive.google.com/file/d/160pKrlZClMyi7eBKxbIL1dk7-LsU4Zm8/view?usp=drivesdk",
"https://drive.google.com/file/d/168xPzPgC8evxdG0B0G8svJozGno2n3UP/view?usp=drivesdk",
"https://drive.google.com/file/d/16A82F1E5QrMk-Ku6WnyY2s-S7FOYZMrx/view?usp=drivesdk",
"https://drive.google.com/file/d/16IyiFaxYz9Z_nNOqi4Zp5pFW3LIxdpIQ/view?usp=drivesdk",
"https://drive.google.com/file/d/16TbXIJqXGqR-U_PngibuZzCDq5a-R0Vo/view?usp=drivesdk",
"https://drive.google.com/file/d/16WfufFJPz1gxargZ6G-TsCTSV0NwyUse/view?usp=drivesdk",
"https://drive.google.com/file/d/16ZNdKxtTlh4Ni-5Ga5wmmOYcq4k2XDhB/view?usp=drivesdk",
"https://drive.google.com/file/d/16b43HRlbT7r7CMDHbtfREeQXdwdRXdoA/view?usp=drivesdk",
"https://drive.google.com/file/d/16f0LwBuduLWByadkpL62YXeriEmO5sjT/view?usp=drivesdk",
"https://drive.google.com/file/d/16iCuuapJ399t4sgxAd5o_W1bwARlc99Q/view?usp=drivesdk",
"https://drive.google.com/file/d/16jpBfZgYMrTUR7chjAxpPdr1-1Gh_g6l/view?usp=drivesdk",
"https://drive.google.com/file/d/16okMYUhDrUOg4pVhDiFNFJxN9wKgTatu/view?usp=drivesdk",
"https://drive.google.com/file/d/16vYX75LYotl8NKIIsn12kTW3BSG0Z5F4/view?usp=drivesdk",
"https://drive.google.com/file/d/174rb2ycfSD4Xf7-TiEvGljLNX0u11fDw/view?usp=drivesdk",
"https://drive.google.com/file/d/17J5AgmE5_zxnKJ2cVuuKPKhMRfbmfjUD/view?usp=drivesdk",
"https://drive.google.com/file/d/17J5AgmE5_zxnKJ2cVuuKPKhMRfbmfjUD/view?usp=drivesdk",
"https://drive.google.com/file/d/17KTgElMA-pGKKWtp8JXsxKErrDohGGIb/view?usp=drivesdk",
"https://drive.google.com/file/d/17VafZRMNRV_F0-FSqOH7UcetKnP0GJdD/view?usp=drivesdk",
"https://drive.google.com/file/d/17a81sEHDOXMhyxLRYEL7w4PrrlYogX8M/view?usp=drivesdk",
"https://drive.google.com/file/d/17hQYRtSzDyGz5chbMmgDL2Q_dcuEMvHK/view?usp=drivesdk",
"https://drive.google.com/file/d/17ldbbUY1a_CELe0o3kKA9d8OlATq-FBp/view?usp=drivesdk",
"https://drive.google.com/file/d/17ranMggrH2fC_2WTGNS6bO1sdvam4eAY/view?usp=drivesdk",
"https://drive.google.com/file/d/17x1JE2QL_-hVVtJhSah5BafqLLV7DvYf/view?usp=drivesdk",
"https://drive.google.com/file/d/18ZIvGnItmlkq-efeWF3CDXmsvOMnh38B/view?usp=drivesdk",
"https://drive.google.com/file/d/18WKZwGcFtxUuU5nKEO16aMbog7cqXHYW/view?usp=drivesdk",
"https://drive.google.com/file/d/18M4J3x8bdB5zsGP38EyvTbTQHfU6JZN8/view?usp=drivesdk",
"https://drive.google.com/file/d/18I3JoAnR3eUNgTrw05EY3LUzXUhgcBVp/view?usp=drivesdk",
"https://drive.google.com/file/d/18GtHKm0hRlbUUR6ImtMZ0v4cK9Z7Mz1N/view?usp=drivesdk",
"https://drive.google.com/file/d/195qxSFu_mJuAZKMFv_cx3TAYFlOjF_4X/view?usp=drivesdk",
"https://drive.google.com/file/d/18k3_jUBtt8ag1Q2eEuPBneQoYiTQ3lAT/view?usp=drivesdk",
"https://drive.google.com/file/d/18dzlinlrVwu2Xk6nTec9Uq8koMOGtjuh/view?usp=drivesdk",
"https://drive.google.com/file/d/18bGwM8JHU_-ldwjDJX9YvIuq6OLH33hD/view?usp=drivesdk",
"https://drive.google.com/file/d/18b1qc5Tz0H-DT_Ypc6faZ6Xz9Cmc8QMU/view?usp=drivesdk",
"https://drive.google.com/file/d/19BKBemDmI8ZrXB7x0W6Agyh3T1Wj8iiO/view?usp=drivesdk",
"https://drive.google.com/file/d/19ArUaBW6maSYT0ghiKDpnlQNZl_RGJrT/view?usp=drivesdk",
"https://drive.google.com/file/d/19IG5Jy_yyHZWu05c7FtB7vfBMf4rfj09/view?usp=drivesdk",
"https://drive.google.com/file/d/19P3RTCj1xt6f-296y5bn7YupUnYZdRav/view?usp=drivesdk",

      
    


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
