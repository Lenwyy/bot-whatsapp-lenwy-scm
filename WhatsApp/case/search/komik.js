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
  name: "Search Komik",

  menu: ["Komik"],
  case: ["komik"],

  description: "Mencari Komik Di makota.cc",
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
  curl -X GET '/api/v1/manga/search?q=Ruri+Dragon&page=1&limit=20' \
  -H 'accept: application/json' \
  -H 'Makota-API: <API_TOKEN_ANDA>'

  {
  "ok": true,
  "data": {
    "query": "Ruri Dragon",
    "page": 1,
    "limit": 20,
    "total": 3,
    "results": [
      {
        "slug": "ruri-dragon",
        "title": "Ruri Dragon",
        "description": "Ruri adalah seorang gadis remaja yang menemukan bahwa ia memiliki kekuatan yang tidak biasa ketika seekor naga misterius muncul dalam hidupnya. Perjalanan Ruri dimulai saat ia belajar mengendalikan kekuatannya dan mencari tahu asal usul naga tersebut yang ternyata memiliki kaitan erat dengan dunia manusia dan makhluk magis. Ia harus menghadapi berbagai tantangan baik dari manusia maupun makhluk lain yang mengancam kedamaian dunia tempatnya tinggal.\n\nSeiring berjalannya waktu, Ruri bertemu dengan teman-teman baru yang membantu dalam perjalanan petualangannya sekaligus mengungkap rahasia keluarga dan takdirnya. Dalam proses ini, ia belajar tentang keberanian, persahabatan, serta tanggung jawab dari kekuatan besar yang dimilikinya, yang akhirnya memimpin pada sebuah pertempuran menentukan demi melindungi dunia dari ancaman kegelapan yang menghampiri.",
        "author": "Masaoki Shindo",
        "type": "Manga",
        "genre": [
          "Comedy",
          "Fantasy",
          "Shounen",
          "Slice of Life"
        ],
        "rating": "15+",
        "status": "ongoing",
        "thumbnail_url": "https://v1.makota.asia/api/media?id=S29taWt1L3J1cmktZHJhZ29uL3RodW1ibmFpbHMvY292ZXIuanBn&sig=ov6LvcqeHRPQOPmMNQGbRHv9jgrUKAK-nDs-suqaOME&exp=1786372750",
        "latest_chapter": "Chapter 48",
        "views": 87,
        "updated_at": 1785242712
      },

  */

  // Konfigurasi
  const MAX_RESULTS = 1;
  const BASE_URL = "https://api.makota.asia/api/v1";

  // Bersihkan Teks
  function cleanText(text) {
    return text?.replace(/\\+\[/g, "[").replace(/\\+]/g, "]").trim() || "";
  }

  // Batasi Teks
  function shorten(text, max = 500) {
    const clean = cleanText(text);
    if (clean.length <= max) return clean;
    return clean.slice(0, max).lastIndexOf(".") > max - 100
      ? clean.slice(0, clean.slice(0, max).lastIndexOf(".") + 1)
      : clean.slice(0, max) + "...";
  }

  switch (command) {
    case "komik":
      {
        if (!q) {
          return LenwyText("📚 *Komik Search*\n*Contoh:* .Komik Ruri Dragon");
        }

        LenwyWait();

        try {
          const { data } = await axios.get(
            `${BASE_URL}/manga/search?q=${encodeURIComponent(q)}&page=1&limit=${MAX_RESULTS}`,
            {
              headers: {
                accept: "application/json",
                "Makota-API": globalThis.makota,
              },
            },
          );

          if (!data.ok) throw new Error(data.message || "Gagal mencari komik");

          const { results } = data.data;

          if (!results || results.length === 0) {
            return LenwyText(
              `📚 *Komik Search — "${q}"*\n\n` +
                `Tidak Ada Komik Yang Ditemukan.`,
            );
          }

          const k = results[0];

          const caption =
            `*[+] ${k.title}*\n\n` +
            `*Author:* ${k.author || "-"}\n` +
            `*Type:* ${k.type || "-"}\n` +
            `*Status:* ${k.status || "-"}\n` +
            `*Rating:* ${k.rating || "-"}\n` +
            `*Chapter:* ${k.latest_chapter || "-"}\n` +
            `*Dilihat:* ${k.views || 0}\n` +
            `*Genre:* ${k.genre?.join(", ") || "-"}\n\n` +
            `${shorten(k.description)}\n*Tempat Baca Komik:* makota.cc\n\n` +
            `☘️ *Lenwy FromScratch*`;

          await lenwy.sendMessage(replyJid, {
            image: { url: k.thumbnail_url },
            caption,
          });
        } catch (error) {
          console.error("Komik1 Error:", error);
          LenwyText(`❌ *Gagal.*\n\n${error.message}`);
        }
      }
      break;
  }
}
