const axios = require('axios');

module.exports = {
  config: {
    name: "anivdo",
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
      "https://drive.google.com/file/d/19RNLr6zPdzc-2G0zP-vU85cFWzaLuMW2/view?usp=drivesdk",
      "https://drive.google.com/file/d/19SYbvsTOo4JxlLhorZK3GjV2tu1ODFI_/view?usp=drivesdk",
      "https://drive.google.com/file/d/19b7hMhyILdrEcaeFe_QEa97E2s-ibcZl/view?usp=drivesdk",
      "https://drive.google.com/file/d/19b8BGD7ISOeZGy81iWZlsAjQpuHxVoEx/view?usp=drivesdk",
      "https://drive.google.com/file/d/19g_YXbuHvEsKyYtUdDaPw4_4VGyXGIyL/view?usp=drivesdk",
      "https://drive.google.com/file/d/19h3RzELi1kN7AeCuBhP_MTtD9IQTFCwV/view?usp=drivesdk",
      "https://drive.google.com/file/d/19jS2RW40GMjlYmG23GpOO2GDynK62NAD/view?usp=drivesdk",
      "https://drive.google.com/file/d/19lqOGNiRxO1GX3iugDtm0gWQX-ZPwk2Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/19uq9piF4BZsH3M--I146A15yBU54wWU2/view?usp=drivesdk",
      "https://drive.google.com/file/d/1A2lCtDYO3a3CR8WrGXa4bFeTvPkV2O7Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/1A4XJ3wr5PRY0rs3uYeZo6FiDMsNNKem9/view?usp=drivesdk",  
      "https://drive.google.com/file/d/1A4w8wQPFWsQtnQ6f4DQq2nKSda_-5Cvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1A5APNFFuZrSsTk3BUQAAhOUw1oLbwz0v/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AAH8XyDkiOqJSBdmw1tf2b7Qqe6T6O2n/view?usp=drivesdk",
      "https://drive.google.com/file/d/1A8cOc2Days7ke6JTotIoGGO_fTU2OA1Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AAH8XyDkiOqJSBdmw1tf2b7Qqe6T6O2n/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AEGsdyBAnLwbOgnQ3pJwKGMb3LJICG2W/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AGIVIvx2eOj_URXsalEadRhL8XqwpmQK/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AHijlWeE_ZW0Qp5Otq15ECZbygVwQ_Lt/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AKNR-Nt3jinw8amOdPqwLk83DEZAW9_v/view?usp=drivesdk",
      "https://drive.google.com/file/d/1ALIKDH32fiLoi_4r-_ExjziRnzxeTN7_/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AQA38RQNrz0E5M6-p_2Nv3Rssf6HnIza/view?usp=drivesdk",
      "https://drive.google.com/file/d/1ASjpkDq1wVIl8OlucOhm_hOSMrC22jnS/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AV9wc62PJ6NVKAqE3Dgw_cIdwZeJCYZ0/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AWIOO9PtScQVcHOwf4Y20zTTw89nBZWF/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AXu7yXtfmGs13PI06kUJO1pFhrsc6exb/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AiZUtZxUIW6-3mii_qbI_0SByxU7w2FY/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AdAA2QsazJtiKAExZ-co_kUwHCCfhf1F/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Am05JIAiOI2zPKL1Z-jQbuaBshr5IT23/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Ar4aYBqXTjiDVb111zy7gJ8hbd5YKt99/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AsEDPvvM4JX80zm2lmgaZRb96vgrYvLv/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Ax94R1SjfBrFRu8eUDCVCQF_Z8RoFcjX/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BDhXsIKy83EJeCMo3VNqbVZc029CFCX7/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BBfO386dciTBevX31xZOgg-S15veM-qb/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BLQ_3cEcB6k0vU8AIfTHtmATQe0oxo07/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BL1566vPnA1IFAP94g__NYoHIvMT08Xh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BRHbXDjGZRSLRolD98SbLzosP4OX8NZa/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BhGxC5HhGjdiO4y7hP1Qzv63ThSRdwZW/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Bo-gnmWlvJYyqKsTfZ5toanCM8x455xD/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BvLdWnNFO_thheDAz8fKQCJ99D0nZrDP/view?usp=drivesdk",
      "https://drive.google.com/file/d/1C6_uYGNkjI6gbH4ugow91mS0NwGx5vAr/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CAcIyJ7LB9Pxcxxf_g62lUB1CAcM_UjY/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CFNTtfvMUFy26KkqosD-Y6t0zRCEzTKo/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CO8ZeuXIqbo_KiO2NjfvEC-y_l02kWu5/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CQRQxsip35FG1-vQ7eE55NMkoBCAaI7T/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CQvqCJtYSsu7KDqui0IwtHjtrXCn8UEM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CTT-6TKDzVBjU7rJM7o9wEGE2zAQjhg4/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CTWqU_pd4mN_BFodBPaeJVZJcaEPriRm/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Cb2vOY479HXjNJuCy1KmVyji1RNlIa_u/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CcK11pS5nZrTXo6r40Ewv-AEk7W-6_kQ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CdJlhwmMY1dvvLSmiYKCV8jjUp1Lw44X/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CktOa_VppYZqS_FL2w6GkX6q1AHgEDPP/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Cl5Vhc1qjy7DpWsNLUujVvD5Lt-rt0i2/view?usp=drivesdk",
      "https://drive.google.com/file/d/1CpaAfjAhVM2ADMA1hRlCnrC6WUVeRyPo/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Cudx4ztU7EUUWTJp3CPF9x7GCNM0TwqZ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1D5r0geBC4ZuVO0CsFeIRL2tue3PzQB11/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DK5q8up6-bb9U2T1YbfqFdz6dgxJk1QR/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DKELyt9dzJ3YnCmHpitaWM3ohSoWMibL/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DLgVvvX4DBpFmNIC0XGRzUq1jqxCk6du/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DVNRHPghn-GKvpbfGqmVE7ZJs9j9QtdT/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DXt0bo1uklNLu2kmWiM1jM3DQkmK21S_/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DZ-NlQlHiKDX3YGVjHiVYFPWbqctdTxs/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DZ6EnH7FN5TN2E5giCT-e4LWML670h0G/view?usp=drivesdk",
      "https://drive.google.com/file/d/1D_Yxoz_7lmscMI1BlgzetTu9SvNe59dm/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DaFQM5ClP01u9tWJLVxW7qAjkDG6B2dw/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Db784BGXbRNFOZ-XnODCmt3M1Scpylbj/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DcV8V7woyrLLqjMojS-bxG8vSdPsMXaE/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DelB2I6IaA8MA8MYfkgMfmgQbJjiAqJs/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Dic0uihcUr_KQBGDKRf8qS0gC_172tM1/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Dkxz17RCwCs0a0-WZlcAkO0X8aH0NGOi/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DoCjZDPGUovl9R1C8XO_SHmqbF3-8A-5/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DrREO6ThscpBVGGU3duFLkmSAd8Oz7g1/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Ds4rtK6vwCKcPeKlmMXZlMrLJEMo6O80/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DseomJkUBwZNenDQxZxFkTryMdrPeC6_/view?usp=drivesdk",
      "https://drive.google.com/file/d/1E1CreYhIgdgoEAyP0FQ6uQwDXaaJbJxS/view?usp=drivesdk",
      "https://drive.google.com/file/d/1E2Yv1wC39zlAeg2jp09DYUTKL68OBuCH/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EKLK8q0HTrgYY34X8q0fcD_SClwwySJU/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EOKHTY1XsEKVLBEsFbdev7mc_gtDtXvU/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EOQ55KLlJvIgrv5hbBd7nd2kyob2yHo0/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EWGuEgnuyDM-uMNR_JtQN8Ne-LYmvRZT/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EYBaLDY4nS3ynU6-eGT1JcPxyTs2W0X3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1E_FiKVoWRQuh_I_IqOjfQl8o_jsvzxRO/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Efy2xKSA4IletIP9wwgsW9uS0jIo0L_p/view?usp=drivesdk",
      "https://drive.google.com/file/d/1EgvE3qhwwQ2XNyNMHTnyDT0E6OdPPkSt/view?usp=drivesdk",
      "https://drive.google.com/file/d/1F-rDEnXpcBGZyhb9yKg6TtEClU4759VV/view?usp=drivesdk",
      "https://drive.google.com/file/d/1F8dFMQQQQJAxr3q2DW0p7jKxWElLcT1q/view?usp=drivesdk",
      "https://drive.google.com/file/d/1F9d2RVl27EMTe1LVgJiNE5nVnRqdEcY-/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FA1nbWr1AqX1YgXXnflj63v_Lv_89_kl/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FAxiRLl4220Ag1bCW5boT-1EE2R7b-1d/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FD-i1KuaYdO1E2IQsr5_pOrOcXHe8q8R/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FGslGc-5kSdsVQ1O1_8YM3hYjm4323nj/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FJ0Gt5ZWHUzVF8ig6-ThrU7opqv14shL/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FSft8zu_e_OxryqbPpcnSMaB2AQu0xJ5/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FQovreBXXIms3JVMP8iPCaKZ4XgFqvNZ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FZcdUftH2RKmSD1cVJOzBIwLvuH8CzBk/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Fa1N_rEuuxECrzXMcQgNlCT8YpyZrKaw/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FbX7f4gPObyBLAGGm8OvgEraD4j1k8Md/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Fg1R9xiKlyux63JyiOzSEdOHgFDEd6Ua/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FrNLhS656cyCBxpoitb-g-bL4NWtiM5D/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Foa8rR0zkgKXROVab2WyFWPPBkADA1Y6/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Fk1EhhPETz9voQEnCaFFuzCWLnrnwpmL/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Fhp19LIBtlFAW8HXneUxcmIUzjumtMzB/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FvEer1F1ofqoWKTlUbeu_yjPuva_SxI0/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Ft-7rm3Qx26z4jZM8bQooSwUVXIqjh8o/view?usp=drivesdk",
      "https://drive.google.com/file/d/1FsJab7e8rNMoXlqusTHBgR5v3v-r4Kcp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GId1myaY0_4IMhiLUe-EN-AW4wN028Ta/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GHaJwZE8zE8Sq8Z9wSCjkBophM_qI2DB/view?usp=drivesdk",
      "https://drive.google.com/file/d/1G93ySloDjTbOzh8A8In6AzsYDveERyrP/view?usp=drivesdk",
      "https://drive.google.com/file/d/1G6hQ7FlgSQjANHS0mODMma3tizV0j4oD/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GL5FQoDrinH89N8gcT8o-pA_uX7rHCCk/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GM0zrnCt8vH9E42xabUh9JizZGBQ0kLQ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GNQTOzEy1KNKpImAQWjU4bMud-zGk8Ju/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GaGJY1i_CS3VJSdeQF2lgG90-510_eKh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GcgyXFUaC_5tLJVba_V7f31RuHWm3a0-/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GkhVvVzOkjQPy9jY89cI1ml7UZpQc9l3/view?usp=drivesdk",
    


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
