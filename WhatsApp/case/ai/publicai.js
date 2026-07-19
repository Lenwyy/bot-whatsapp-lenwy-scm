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
  name: "Public AI",

  menu: ["Publicai"],
  case: ["publicai"],

  description: "Public AI",
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

  //   curl -X GET "https://api.fromscratch.web.id/v1/api/ai/publicai?query=Fungsi+Nodejs"

  //   {
  //   "status": 200,
  //   "creator": "Lenwy",
  //   "data": {
  //     "query": "Fungsi Nodejs",
  //     "response": "Node.js adalah sebuah platform runtime yang memungkinkan Anda menjalankan JavaScript di luar browser. Fungsi utama Node.js adalah sebagai berikut:\n\n1. **Asynchronous I/O**: Node.js menggunakan model I/O asynchronous, yang memungkinkan aplikasi merespons permintaan dengan cepat dan efisien tanpa memblokir proses.\n\n2. **Non-blocking I/O**: Node.js memungkinkan Anda menulis aplikasi yang tidak memblokir proses dengan menunggu operasi I/O selesai. Ini memungkinkan aplikasi merespons permintaan lain sambil menunggu operasi I/O selesai.\n\n3. **Single-threaded**: Node.js menggunakan hanya satu thread untuk menjalankan aplikasi, yang membuatnya lebih ringan dan lebih efisien daripada aplikasi yang menggunakan banyak thread.\n\n",
  //     "length": {
  //       "query": 13,
  //       "response": 726
  //     },
  //     "timestamp": 1777476058536
  //   },
  //   "source": "api.fromscratch.web.id"
  // }

  switch (command) {
    case "publicai":
      {
        // Logic Di Sini

        // Validasi
        if (!q) return LenwyText("Contoh: .Publicai Apa Fungsi JavaScript?");

        // Loading
        LenwyWait();

        // Ambil Data
        try {
          const API_URL = `https://api.fromscratch.web.id/v1/api/ai/publicai?query=${encodeURIComponent(q)}`;

          const { data: response } = await axios.get(API_URL, {
            timeout: 15000,
          });

          // Validasi Error
          if (!response || response.status !== 200 || !response.data) {
            return LenwyText("Gagal Mengambil Respon AI");
          }

          // Hasil API
          const result = response.data.response || "Tidak Ada Hasil";

          let reply = `*[+] Lenwy PublicAI*\n\n`;
          reply += `${result}`;

          await LenwyText(reply);
        } catch (error) {
          // Error Log
          console.error("PublicAI Error:", error);
          return LenwyText("Terjadi Kesalahan Pada Koneksi API");
        }
      }
      break;
  }
}
