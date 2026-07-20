/*  

  Made By Lenwy
  Base : Lenwy
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ilenwy
  Youtube : @Lenwy

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

  Mohon Untuk Tidak Menghapus Watermark Di Dalam Kode Ini

*/

// Import Dependency (Jika Ada)
import axios from "axios";

// Metadata
export const info = {
  name: "Downloader Tiktok",

  menu: ["TIktok"],
  case: ["tiktok", "tt", "ttdl"],

  description: "Download Video Tiktok Dari Link",
  hidden: false,

  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,

  allowPrivate: false,
};

// Handler Utama
export default async function handler(leni) {
  const {
    command,
    args,
    q,
    lenwy,
    m,
    msg,
    len,
    replyJid,
    lenwyreply,
    LenwyText,
    LenwyWait,
    LenwyVideo,
    LenwyImage,
    LenwyAudio,
    LenwyFile,
    isGroup,
    isAdmin,
    isBotAdmin,
    isPremium,
    isLenwy,
  } = leni;

  /*

  https://api.fromscratch.web.id/v1/api/down/tiktok?url=query

  {
  "status": 200,
  "creator": "Lenwy",
  "message": "Success",
  "data": {
    "title": "Come on Barbie,Let's go party #ruridragon #ruriaoki#anime #アニメ #animedit #otaku",
    "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/owfgIWFXAnS13mjiDADAQHEtV2qgACACAQEPfN~tplv-tiktokx-cropcenter-q:300:400:q70.jpeg?dr=8596&refresh_token=d83d9113&x-expires=1784613600&x-signature=jhLxBw4lLqalriROmaDLiDTBAW0%3D&t=bacd0480&ps=933b5bde&shp=d05b14bd&shcp=1d1a97fc&idc=useast5&biz_tag=tt_video&s=AWEME_DETAIL&sc=cover",
    "origin_cover": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/oUERIABdKACCA5B1JiYVPVkxuB1BeiWwpkITAt~tplv-tiktokx-shrink-aq:360:360:q75.webp?dr=11731&refresh_token=3d98b29c&x-expires=1784613600&x-signature=rGmY5FJlhT2O%2B%2FjLuDmdoWwmWy0%3D&t=bacd0480&ps=d97f9a4f&shp=d05b14bd&shcp=1d1a97fc&idc=useast5&biz_tag=tt_video&s=AWEME_DETAIL&sc=feed_cover",
    "no_watermark": "https://v16m.tiktokcdn-us.com/4e5cb3418bc080f399847643fdecc768/6a5e164a/video/tos/useast5/sde/tos-useast5-ve-0068c002-tx/ocFB0iuBwVCACBkiP71KBQA1IJmxoCE1Iesovp/?a=1233&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&&bt=1559&ft=74~WHDDwNkkVQQdGuIOnsdtWctZqYlpE18LjhWLrK&mime_type=video_mp4&rc=Omk1ZjZkZzZmNDlpN2U5Z0BpM29kdm85cnhqOzMzZzgzNEAyLzMvMF9gNjAxLi9gNWNhYSNrNTUxMmQ0LjVhLS1kLy9zcw%3D%3D&l=20260720063611DBA4A917908B8B092AFD&dpk=FcrI%2FbhQp%2F7oCum3okspOelba3qgbyLweCeuqwy6qIU4GYACvp3MdMqlTudY7gfkxt1mZoF4wV4yUu%2BC27nhE7vdKfedtqqvTG5oNg%3D%3D&dpm=cenc-aes-ctr&l=20260720063611DBA4A917908B8B092AFD&btag=e000b8000",
    "watermark": "https://api16-normal-useast5.tiktokv.us/aweme/v1/play/?video_id=v12025gd0000d88g1u7og65l4s8a8ln0&line=0&watermark=0&logo_name=tiktok_m&source=AWEME_DETAIL&file_id=ddf68bc42f16413c93cdba332c622f57&item_id=7642892271418985742&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjViZmMxMDJlMjE3NWFlYjI1MTZjMmFiYmRkOGEyZTli&shp=d05b14bd&shcp=-",
    "music": "https://v16-ies-music.tiktokcdn-us.com/c107061e122946c4cb9b3949ac2cc41a/6a66fc79/video/tos/useast5/tos-useast5-v-27dcd7-tx/oY4Q5OkGUCBnUeKLIedgGEgToHrieIBABTwDIt/?a=583965&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&&bt=125&ft=7g~atDDwNkkVQQdGuIOnsdtWctZqYlpE18LjhWLrK&mime_type=audio_mpeg&rc=aTxkOmVpNTxkZDRmOTM3ZEBpMzhlZnM5cjhqOzMzZzU8NEAtYjMtLi0yXzUxMDBfNjFhYSM0MjBuMmRrMTVhLS1kMS9zcw%3D%3D&vvpl=1&l=20260720063611DBA4A917908B8B092AFD&btag=e000f8000&shp=d05b14bd&shcp=-"
  },
  "source": "api.fromscratch.web.id"
}

  */

  const tiktokRegex = /^(https?:\/\/)?(www\.|vt\.|vm\.)?tiktok\.com\/.+/i;

  switch (command) {
    case "tt":
    case "ttdl":
    case "tiktok":
      {
        // Logic Di Sini

        // Filter Input
        if (!q) return LenwyText("*Mana Link Tiktoknya?*");

        // Filter Link (Regex)
        if (!tiktokRegex.test(q))
          return LenwyText("*Link Tiktok Tidak Valid!*");

        // Loading
        LenwyWait();

        try {
          // Jalur Koneksi REST API
          const encodedUrl = encodeURIComponent(q.trim());
          const apiUrl = `https://api.fromscratch.web.id/v1/api/down/tiktok?url=${encodedUrl}`;

          // Simpan Sebagai Variabel response
          const { data: response } = await axios.get(apiUrl);

          // Validasi Respon
          if (response.status !== 200 || !response.data?.no_watermark)
            return LenwyText("*Gagal Mengunduh Video TIktok*");

          // Ekstrak Data
          const videoUrl = response.data.no_watermark;

          // Kirim Video
          await LenwyVideo(videoUrl, `🎁 *Lenwy Tiktok Downloader*`);

          // Menangkap Pesan Error
        } catch (error) {
          console.error(
            "Tiktok Error:",
            error?.response?.data || error.message,
          );

          LenwyText("*Gagal Mengunduh Video Tiktok*");
        }
      }
      break;
  }
}
