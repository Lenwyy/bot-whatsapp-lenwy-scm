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

import path from "path";
import fs from "fs";

export const info = {
  name: "Cek Direktori",

  menu: ["Dir"],
  case: ["dir"],

  description: "Cek Direktori",
  hidden: false,

  owner: true,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,

  allowPrivate: false,
};

export default async function handler(leni) {
  const { q, LenwyText } = leni;

  let targetPath = q.trim() || process.cwd();
  if (targetPath.includes("..")) {
    return LenwyText("❌ *Akses Direktori Di Luar Batas.*");
  }

  const resolvedPath = path.resolve(targetPath);

  try {
    if (!fs.existsSync(resolvedPath)) {
      return LenwyText(
        `❌ *Direktori atau File Tidak Ditemukan:* \`${targetPath}\``,
      );
    }

    const stats = fs.statSync(resolvedPath);

    if (stats.isFile()) {
      const fileName = path.basename(resolvedPath);

      if (
        fileName.toLowerCase().includes(".env") ||
        fileName.toLowerCase().endsWith(".pem") ||
        fileName.toLowerCase().endsWith(".key")
      ) {
        return LenwyText(
          "🚫 Akses Diblokir: File Ini Mengandung Kredensial Sensitif.",
        );
      }

      const fileContent = fs.readFileSync(resolvedPath, "utf-8");

      // if (fileContent.length > 4000) {
      //      return LenwyText(`⚠ Konten File *${fileName}* Terlalu Panjang (${fileContent.length} Karakter).`);
      // }

      const response = `${fileContent}`;

      await LenwyText(response);
      return;
    }

    if (stats.isDirectory()) {
      const items = fs.readdirSync(resolvedPath, { withFileTypes: true });

      let response = `*[+] Direktori/File:*\n\n \`${targetPath}\`\n\n`;
      let folders = [];
      let files = [];

      items.forEach((item) => {
        if (item.name.toLowerCase() === ".env") {
          return;
        }

        if (item.isDirectory()) {
          folders.push(`📁 ${item.name}`);
        } else {
          files.push(`📄 ${item.name}`);
        }
      });

      if (folders.length > 0) {
        response += `*Folders (${folders.length}):*\n${folders.join("\n")}\n\n`;
      }
      if (files.length > 0) {
        response += `*Files (${files.length}):*\n${files.join("\n")}`;
      }

      if (folders.length === 0 && files.length === 0) {
        response += "*(Direktori kosong atau hanya berisi file tersembunyi)*";
      }

      await LenwyText(response);
      return;
    }

    LenwyText(`❌ Tipe path tidak didukung. Harap tentukan File atau Folder.`);
  } catch (error) {
    console.error("Error DIR Command:", error);
    LenwyText(
      `❌ Gagal membaca path. Pastikan path benar dan bot memiliki izin.\nDetail: ${error.message}`,
    );
  }
}
