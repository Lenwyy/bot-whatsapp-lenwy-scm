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

// Import Module
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Path ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom Credit Sticker
globalThis.spackname = "Lenwy SCM"; // Ganti Sesuai Keinginan
globalThis.sauthor = "Youtube : Lenwy\nBot: 0856-2497-5232"; // Ganti Sesuai Keinginan

// Custom Prefix
globalThis.prefix = ["#", ".", "!", "/"]; // Multi Prefix (Custom Prefix)
globalThis.noprefix = false; // True = Tanpa Prefix, False = Pakai Prefix

// Custom Menu Image
globalThis.MenuImage = path.join(__dirname, "./database/image/lenwy.jpeg"); // Ganti Dengan Path Gambar Menu

// Custom Message
globalThis.mess = {
  wait: "☕ *One Moment, Please*",
  error: "⚠ *Gagal Saat Melakukan Proses*",
  default: "📑 *Perintah Tidak Dikenali*",
  admin: "⚠️ Fitur Ini Khusus Admin Grup.",
  botadmin: "⚠️ Bot Harus Menjadi Admin Terlebih Dahulu.",
  group: "⚠️ Fitur Ini Hanya Bisa Digunakan Di Grup.",
  private: "⚠️ Fitur Ini Hanya Bisa Digunakan Di Private Chat.",
  premium: "⚠️ Fitur Ini Khusus User Premium.",
  order: "⚠ *Kamu Hanya Bisa Melakukan Pembayaran Di Private Chat.*",
  creator: "⚠️ Fitur ini khusus Owner.",
  disable: "🚫 Fitur Ini Sedang Dinonaktifkan Oleh Lenwy.",
  maintenance: "🛠 Fitur Ini Sedang Dalam Perbaikan.",
};
