# ☘️ **Lenwy SCM - ESM Version**

**Lenwy SCM** atau **Lenwy Switch Case Modular** adalah sebuah starter-kit (base) bot whatsapp berbasis node.Js yang dirancang menggunakan arsitektur ESM (Ecmascript Modules). Base ini menggunakan pustaka Baileys yang ringan, modular, dan mudah dikembangkan untuk kebutuhan bot multi-platform.

Dengan memecah fungsi switch case menjadi modular memungkinkan kode lebih mudah dibaca, dikelola, dan tentunya tidak menumpuk dalam satu file.

---

## 📑 **Instalasi**

Pastikan anda sudah menginstall node.Js (versi LTS direkomendasikan).

#### **[A] Clone Repositori**
```
git clone https://github.Com/lenwyy/bot-whatsapp-lenwy-scm
```
#### **[B] Masuk Ke Direktori**

```
cd bot-whatsapp-lenwy-scm
```

#### **[C] Install Dependencies**
```
npm install
```

#### **[D] Jalankan Script** 
```
npm start
```

---

## 📂 **Struktur Folder**

```
├── 📁 LenwySesi            # Folder Sesi
│
├── 📁 WhatsApp
│   ├── 📁 case             # Daftar Fitur
│   │   │
│   │   ├── 📁 ai           # Kategori AI
│   │   │   ├── 📄 ai4chat.js
│   │   │   └── 📄 webpilot.js
│   │   │
│   │   ├── 📁 convert      # Kategori Convert
│   │   │   ├── 📄 brat.js
│   │   │   ├── 📄 filejs.js
│   │   │   ├── 📄 quote.js
│   │   │   ├── 📄 sticker.js
│   │   │   └── 📄 tomedia.js
│   │   │
│   │   ├── 📁 down         # Kategori Downloader
│   │   │   ├── 📄 tiktok.js
│   │   │   └── 📄 ytmp4.js
│   │   │
│   │   ├── 📁 group        # Kategori Group
│   │   │   └── 📄 kick.js
│   │   │
│   │   ├── 📁 owner        # Kategori Owner
│   │   │   ├── 📄 control.js
│   │   │   ├── 📄 direktori.js
│   │   │   └── 📄 fitur.js
│   │   │
│   │   └── 📄 Template.js  # Template Struktur
│   │
│   ├── 📁 database         # Database
│   │   ├── 📁 Menu
│   │   │   └── 📄 LenwyMenu.js
│   │   ├── 📁 image
│   │   │   └── 🖼️ lenwy.jpeg
│   │   ├── 📁 system
│   │   │   └── ⚙️ plugins.json
│   │   ├── ⚙️ creator.json # Daftar Nomor Creator
│   │   └── ⚙️ premium.json # Daftar Nomor Premium
│   │
│   ├── 📁 lib              # Library
│   │   ├── 📄 exif.js
│   │   └── 📄 sticker.js
│   │
│   ├── 📁 scrape           # Scraper
│   │   └── 📄 Ai4Chat.js
│   ├── 📄 index.js
│   ├── 📄 len.js
│   └── 📄 lenwy.js
├── 📄 LenwySet.js
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```
---

## 📚 Table of Contents

* [Instalasi](#-instalasi)

  * [[A] Clone Repositori](#a-clone-repositori)
  * [[B] Masuk Ke Direktori](#b-masuk-ke-direktori)
  * [[C] Install Dependencies](#c-install-dependencies)
  * [[D] Jalankan Script](#d-jalankan-script)

* [Struktur Folder](#-struktur-folder)

* [Bagaimana Cara Kerjanya](#-bagaimana-cara-kerjanya)

  * [[A] Cara Memanggil Menu](#a-cara-memanggil-menu)
  * [[B] Bagaimana Fitur Ditampilkan](#b-bagaimana-fitur-ditampilkan)
  * [[C] Filter Label](#c-bot-juga-akan-melakukan-beberapa-filter)

* [Fitur Utama](#-fitur-utama)

* [[1] Modular Architecture](#-1--modular-architecture-)

  * [[A] index.Js (the core connection)](#a-indexjs-the-core-connection)
* [[2] Multi-Platform Ready](#-2--multi-platform-ready-)
* [[3] Pairing Code Login](#-3--pairing-code-login)
* [[4] Global Variable Management](#-4--global-variable-management)
* [[5] Session Manager](#-5--session-manager)

  * [[A] Manajemen autentikasi](#a-manajemen-autentikasi)
* [[6] Dynamic Command Registry](#-6--dynamic-command-registry)
* [[7] Metadata Driven](#-7--metadata-driven)

  * [[A] Identitas Fitur](#a-identitas-fitur)
  * [[B] Menu Category](#b-menu-category)
  * [[C] Command Case](#c-command-case)
  * [[D] Sistem Visibility](#d-sistem-visibility)

* [Sistem Hak Akses (Access Control)](#-sistem-hak-akses-access-control)

  * [[A] Owner Only](#a-owner-only)
  * [[B] Premium User](#b-premium-user)
  * [[C] Group Only](#c-group-only)
  * [[D] Private Chat Only](#d-private-chat-only)
  * [[E] Admin Only](#e-admin-only)
  * [[F] Bot Admin Required](#f-bot-admin-required)
  * [[G] Private Permission](#g-private-permission)

* [[8] Helper Function System](#-8--helper-function-system)

  * [[A] Send Text](#a-send-text)
  * [[B] Wait Message](#b-wait-message)
  * [[C] Send Image](#c-send-image)
  * [[D] Send Video](#d-send-video)
  * [[E] Send Audio](#e-send-audio)
  * [[F] Send File](#f-send-file)

* [[9] Label System](#-9--label-system)

  * [[A] Label Generator](#a-label-generator)
  * [[B] Label Priority System](#b-label-priority-system)

* [[10] Struktur Fitur](#-10--struktur-fitur)

  * [[A] Metadata Feature](#a-metadata-feature)
  * [[B] Handler Function](#b-handler-function)
  * [[C] Template Dengan Switch Case](#c-template-dengan-switch-case)
  * [[D] Template Tanpa Switch Case](#d-template-tanpa-switch-case)

* [Informasi Developer](#-informasi-developer)

* [Kontribusi](#-kontribusi)

---

## **🎁 Bagaimana Cara Kerjanya?**

Sistem menu pada bot ini bersifat **Dynamic Category Menu**. Bot akan secara otomatis membaca seluruh folder yang berada di dalam direktori case.
```
./WhatsApp/case/ # dynamic menu
```

Setiap folder yang ditemukan akan dianggap sebagai sebuah kategori menu.

**[+] Contoh struktur folder :**
```
case/
 ├── ai/
 ├── down/
 └── group/
```

**[+] Maka kategori menu yang tersedia adalah :**

```
.AIMENU
.DOWNMENU
.GROUPMENU
```

---

#### **[A] Cara Memanggil Menu**

Untuk membuka menu dari sebuah kategori cukup menambahkan kata **menu** di belakang nama kategori.

```
.Aimenu
.Downmenu
.Groupmenu
```

---

#### **[B] Bagaimana Fitur Ditampilkan?**

Setiap fitur yang terdaftar pada kategori akan otomatis ditampilkan pada menu sesuai dengan kategorinya.

**[+] Contoh gambar :**

![kategori](https://files.catbox.moe/864f6s.jpg "Lenwy SCM Category")

---

#### **[C] Bot Juga Akan Melakukan Beberapa Filter**

* Fitur dengan status *hidden* tidak akan ditampilkan  
* Fitur dengan status *maintenance* akan diberi tanda `[Main]`  
* Fitur yang dinonaktifkan akan diberi tanda `[Off]`

**[+] Contoh gambar :**

![label](https://files.catbox.moe/pmvd05.png "Lenwy SCM Label")

Dengan sistem ini, developer tidak perlu lagi menuliskan daftar menu secara manual.

Setiap fitur baru yang ditambahkan ke kategori akan otomatis muncul di menu.

---

## 🌟 **Fitur Utama**

### **[ 1 ] Modular Architecture :** 

Pemisahan logika koneksi, pesan, dan fitur agar mudah dikelola.

```
├── 📁 WhatsApp
│   ├── 📁 case         # Daftar fitur 
│   │   ├── 📁 ai
│   │   │   ├── 📄 ai4chat.Js
│   │   │   └── 📄 webpilot.Js
│   │   │
│   ├── 📁 scrape       # Scrape
│   │   └── 📄 ai4chat.Js
│   │
│   └── 📄 index.Js     # Koneksi
└── ⚙️ package.Json
```

#### **[A] index.Js (the core connection)**

File ini menangani seluruh alur koneksi ke server whatsapp. Menggunakan multi-file auth state dan mendukung pairing code.

---

### **[ 2 ] Multi-Platform Ready :**

Struktur lenwyset.Js yang memungkinkan menjalankan bot whatsapp dan telegram secara bersamaan (telegram dalam pengembangan).

```
├── 📁 WhatsApp
├── 📄 LenwySet.Js  # multi platform
└── ⚙️ package.Json
```

Berfungsi sebagai gerbang utama bot. Di sini anda bisa mengatur modul mana yang akan diaktifkan menggunakan sistem true/false

```js
const config = {
  whatsapp: true,
  telegram: false // tahap pengembangan
};
```

Jika whatsapp bernilai true, maka sistem akan otomatis memanggil dan menjalankan whatsapp/index.Js.

---

### **[ 3 ] Pairing Code Login** 

Login whatsapp tanpa perlu scan qr, cukup menggunakan kode pairing yang praktis.

```js
// ./WhatsApp/index.Js

  if (usePairingCode && !lenwy.authState.creds.registered) {
    try {
      const phoneNumber = await question(
        "☘️ Masukan Nomor Yang Diawali Dengan 62 :\n",
      );
      const code = await lenwy.requestPairingCode(phoneNumber.trim());
      console.log(`🎁 Pairing Code : ${code}`);
    } catch (err) {
      console.error("Failed to get pairing code:", err);
    }
  }
```
---
### **[ 4 ] Global Variable Management**

Menggunakan globalthis untuk manajemen prefix, pesan respon, dan aset agar kode lebih bersih dan efisien.

```js
// ./WhatsApp/len.Js

// Custom Credit Sticker
globalThis.spackname = "Lenwy SCM"; // Ganti Sesuai Keinginan
globalThis.sauthor = "Youtube : Lenwy\nBot: 0856-2497-5232"; // Ganti Sesuai Keinginan

// Custom Prefix
globalThis.prefix = ["#"]; // Multi Prefix (Custom Prefix)
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
```
---
### **[ 5 ] Session Manager** 

Otomatis menyimpan sesi di folder lenwysesi secara aman sesuai dengan konfigurasi path.

```
├── 📁 LenwySesi    # sesi 
├── 📁 WhatsApp
└── ⚙️ package.Json
```

#### **[A] Manajemen autentikasi** 

Sesi akan disimpan secara otomatis di luar folder whatsapp untuk keamanan.

```js
// ./WhatsApp/index.Js

  const { state, saveCreds } = await useMultiFileAuthState(
    path.resolve(__dirname, "../LenwySesi"),
  );
```
---
### **[ 6 ] Dynamic Command Registry**

Bot ini menggunakan sistem dynamic **Command Registry**, yaitu sistem yang mencatat seluruh command secara otomatis saat bot dijalankan.

Setiap fitur yang dibuat akan melakukan register command ke dalam sistem kategori menggunakan sebuah registry. 

**[+] Dengan begitu bot mengetahui :**
* Nama command
* Kategori command
* Status fitur
* Apakah fitur disembunyikan atau tidak
* Apakah fitur sedang maintenance

**[+] Contoh alur :**

```
┌───────────────┐
│  Feature file │
│  tiktok.Js    │
└───────┬───────┘
        │
        ▼
┌─────────────────┐
│ Folder category │
│ case/down/      │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐
│ Command registry│
│ Categories map  │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐
│ Menu generator  │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐
│   Menu output   │
│   .Downmenu     │
│   [+] .Tiktok   │
└─────────────────┘
```
---
### **[ 7 ] Metadata Driven**

Setiap fitur pada bot ini menggunakan sistem **Metadata Driven**, yaitu sistem di mana seluruh pengaturan fitur ditentukan melalui sebuah objek metadata.

Metadata ini disimpan dalam sebuah objek bernama info yang berada di setiap file fitur.

**[+] Contoh metadata :**

```js
import Ai4Chat from "../../scrape/Ai4Chat.js";

export const info = {
  name: "AI4Chat",

  menu: ["AI"],
  case: ["ai"],

  description: "Tanyakan Apa Saja!",
  hidden: false,

  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,

  allowPrivate: false,
};
```

Metadata ini digunakan oleh sistem bot untuk menentukan berbagai hal seperti :
* Nama fitur
* Kategori menu
* Command yang digunakan
* Deskripsi fitur
* Hak akses pengguna
* Status visibilitas fitur

Dengan sistem ini, seluruh perilaku fitur dapat diatur hanya melalui metadata tanpa perlu mengubah sistem utama bot.

### **[+] Penjelasan Struktur Metadata**

#### **[A] Identitas Fitur**
```js
name: "AI4Chat"
```
Nama fitur yang digunakan sebagai identitas internal fitur.

#### **[B] Menu Category**
```js
menu: ["Ai"]
```
Menentukan kategori menu tempat fitur ini akan ditampilkan.

#### **[C] Command Case**
```js
case: ["ai"]
```
Menentukan command yang digunakan untuk menjalankan fitur.

**[+] Contoh penggunaan oleh user :**
```js
.Ai apa itu artificial intelligence?
```

Satu fitur bisa memiliki lebih dari satu command alias.

**[+] Contoh :**
```js
case: ["ai", "chatgpt", "ask"]
```

#### **[D] Sistem Visibility**
```js
hidden: false
```
Menentukan apakah fitur akan ditampilkan di menu atau tidak.

Jika true, fitur tetap bisa digunakan tetapi tidak muncul di menu.

### **[+] Sistem Hak Akses (Access Control)**

Metadata juga menentukan siapa saja yang boleh menggunakan fitur tersebut.

#### **[A] Owner Only**
```js
owner: false
```
Jika true, hanya owner bot yang dapat menggunakan fitur.

---

#### **[B] Premium User**
```js
premium: false
```
Jika true, hanya user premium yang dapat menggunakan fitur ini.

---

#### **[C] Group Only**
```js
group: false
```
Jika true, fitur hanya dapat digunakan di grup.

---

#### **[D] Private Chat Only**
```js
private: false
```
Jika true, fitur hanya bisa digunakan di chat pribadi.

---

#### **[E] Admin Only**
```js
admin: false
```
Jika true, hanya admin grup yang dapat menggunakan fitur ini.

---
#### **[F] Bot Admin Required**
```js
botadmin: false
```
Jika true, bot harus memiliki status admin di grup agar fitur dapat berjalan.

---

#### **[G] Private Permission**
```js
allowprivate: false
```

Menentukan apakah fitur yang biasanya digunakan di grup boleh dijalankan di chat pribadi.

---

### **[ 8 ] Helper Function System**

Bot ini menyediakan beberapa helper function yang digunakan untuk mempermudah pengiriman pesan dan media.

Helper dibuat sebagai shortcut untuk fungsi `lenwy.Sendmessage` agar developer tidak perlu menulis parameter yang sama berulang kali.

Namun perlu diketahui bahwa **Helper Bersifat Opsional**.

Developer tetap dapat menggunakan `lenwy.Sendmessage` secara langsung jika membutuhkan kontrol yang lebih fleksibel terhadap pengiriman pesan.

### **[+] Helper Hanya Bertujuan Untuk**

* Mempercepat penulisan kode
* Mengurangi duplikasi kode
* Mempermudah pengiriman media umum

Dengan menggunakan helper, developer dapat mengirim berbagai jenis pesan hanya dengan satu fungsi sederhana.

---

### **[+] Jenis Helper Yang Tersedia**

#### **[A] Send Text**
```js
const LenwyText = (text) =>
  lenwy.sendMessage(replyJid, { text }, { quoted: len });
```
Digunakan untuk mengirim pesan teks biasa.

**[+] Contoh penggunaan :**
```js
LenwyText("Halo, Ini Lenwy!");
```
Bot akan mengirimkan pesan teks dengan mereply pesan sebelumnya.

---

#### **[B] Wait Message**
```js
const LenwyWait = () => lenwyreply(globalThis.mess.wait);
```
Digunakan untuk mengirim pesan loading / processing ketika bot sedang memproses sebuah fitur.

**[+] Contoh penggunaan :**
```js
export default async function handler(leni) {
  const { command, q, LenwyText, LenwyWait } = leni;

  switch (command) {
    case "ai":
      {
        if (!q) return LenwyText("☘️ *Contoh:* ai Apa itu JavaScript?");

        LenwyWait(); // Pesan loading

        try {
          const lenai = await Ai4Chat(q);

          if (!lenai) return LenwyText("⚠️ AI Tidak Merespon.");

          await LenwyText(`*Lenwy AI*\n\n${lenai}`);
        } catch (error) {
          console.error("Error AI:", error);
          LenwyText(globalThis.mess.error);
        }
      }
      break;
  }
}
```

---

#### **[C] Send Image**
```js
const LenwyImage = (url, caption = "") =>
  lenwy.sendMessage(replyJid, { image: { url }, caption }, { quoted: len });
```
Digunakan untuk mengirim gambar dari url.

**[+] Contoh penggunaan :**
```js
LenwyImage(imageurl, "Ini Gambarnya");
```

---

#### **[D] Send Video**
```js
const LenwyVideo = (url, caption = "") =>
  lenwy.sendMessage(replyJid, { video: { url }, caption }, { quoted: len });
```
Digunakan untuk mengirim video dari url.

**[+] Contoh pengunaan :**
```js
LenwyVideo(videourl, "Ini Videonya");
```

---

#### **[E] Send Audio**
```js
const LenwyAudio = (url, ptt = false) =>
  lenwy.sendMessage(
    replyJid,
    { audio: { url }, mimetype: "audio/mpeg", ptt },
    { quoted: len },
  );
```
Digunakan untuk mengirim audio.

Parameter `ptt` menentukan apakah audio dikirim sebagai voice note.

**[+] Contoh penggunaan :**
```js
LenwyAudio(audiourl, true);
```
Jika true, audio akan tampil seperti voice note whatsapp.

---

#### **[F] Send File**
```js
const LenwyFile = (buffer, fileName, mime) =>
  lenwy.sendMessage(
    replyJid,
    { document: buffer, fileName, mimetype: mime },
    { quoted: len },
  );
```

Digunakan untuk mengirim file atau dokumen.

**[+] Contoh penggunaan :**
```js
LenwyFile(buffer, "Lenwy.pdf", "application/pdf");
```
---

### **[ 9 ] Label System**

Bot menggunakan label system untuk menandai fitur berdasarkan hak akses yang dibutuhkan.

Label ini ditampilkan di menu sehingga pengguna dapat mengetahui siapa saja yang dapat menggunakan fitur tersebut.

#### **[A] Label Generator**
```js
function getLabel(info) {
  if (info.owner) return "Owner";
  if (info.premium) return "Premium";
  if (info.admin) return "Admin";
  if (info.botAdmin) return "BotAdmin";
  if (info.group) return "Group";
  if (info.private) return "Private";
  return "Public";
}
```

Fungsi ini membaca metadata fitur dan menentukan label akses yang akan ditampilkan di menu.

**[+] Contoh hasil label :**
```js
owner: true
```
**[+] menu akan menampilkan :**

`[+] .Lenwy [Owner]`

**[+] Contoh lainnya :**

`[+] .Kick [Admin]`

`[+] .Add [BotAdmin]`

`[+] .Twitter [Premium]`

#### **[B] Label Priority System**

Bot juga menggunakan sistem prioritas label untuk mengatur urutan atau tingkat akses.
```js
const labelPriority = {
  Public: 0,
  Owner: 1,
  Premium: 2,
  Admin: 3,
  BotAdmin: 4,
  Group: 5,
  Private: 6,
};
```
### **[+] Sistem Ini Berfungsi Untuk :**

* Mengurutkan fitur di menu
* Menentukan tingkat akses fitur
* Mengelompokkan fitur berdasarkan level permission

---

### **[ 10 ] Struktur Fitur**

Setiap fitur pada bot dibangun menggunakan sebuah template struktur file yang terdiri dari dua bagian utama:

* Metadata (info)
* Handler function

Template ini memungkinkan fitur baru ditambahkan dengan mudah tanpa mengubah sistem utama bot.

#### **[A] Metadata Feature**

Metadata digunakan untuk mendefinisikan identitas fitur, kategori menu, command, serta hak akses.

**[+] Contoh metadata :**
```js
export const info = {
  name: "Tiktok Downloader",

  menu: ["Tiktok"],
  case: ["tt", "ttdl", "tiktok"],

  description: "Downloader TikTok",
  hidden: false,

  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,

  allowPrivate: false,
};
```
Metadata ini akan dibaca oleh sistem bot untuk

* Mendaftarkan command
* Menentukan kategori menu
* Menentukan hak akses fitur
* Menentukan apakah fitur tampil di menu

#### **[B] Handler Function**

Handler adalah fungsi utama yang akan dijalankan ketika command dipanggil.

**[+] Struktur Dasar Handler :**
```js
export default async function handler(leni) {

}
```
Parameter `leni` berisi berbagai data yang disediakan oleh sistem bot seperti

* command yang dipanggil
* query user (q)
* helper functions
* informasi chat

**[+] Contoh penggunaan :**
```js
const { command, q, LenwyText, LenwyWait, LenwyVideo } = leni;
```

#### **[C] Template Dengan Switch Case**

Template ini digunakan jika satu file menangani beberapa command dengan logika berbeda.

**[+] Contoh :**
```js
switch (command) {
  case "tt":
  case "ttdl":
  case "tiktok": {
    // logika fitur
    break;
  }
}
```
**[+] Contoh kode :**
```js
// ./WhatsApp/case/owner/control.js

  switch (command) {
    case "enable": {
      if (!target) return LenwyText("*Contoh: Enable Tiktok");

      const pluginData = commands.get(target);
      if (!pluginData) return LenwyText("❌ Plugin Tidak Ditemukan.");

      state.disable = state.disable.filter((v) => v !== target);
      state.maintenance = state.maintenance.filter((v) => v !== target);

      savePluginState(state);

      return LenwyText(`🎁 Plugin *${target}* Berhasil Diaktifkan.`);
    }

    case "disable": {
      if (!target) return LenwyText("*Contoh: Disable Tiktok*");

      const pluginData = commands.get(target);
      if (!pluginData) return LenwyText("❌ Plugin Tidak Ditemukan.");

      if (!state.disable.includes(target)) {
        state.disable.push(target);
      }

      state.maintenance = state.maintenance.filter((v) => v !== target);

      savePluginState(state);

      return LenwyText(`🚫 Plugin *${target}* Berhasil Dinonaktifkan.`);
    }

    case "main": {
      if (!target) return LenwyText("*Contoh: Main Tiktok");

      const pluginData = commands.get(target);
      if (!pluginData) return LenwyText("❌ Plugin Tidak Ditemukan.");

      if (!state.maintenance.includes(target)) {
        state.maintenance.push(target);
      }

      savePluginState(state);

      return LenwyText(`🛠 Plugin *${target}* Memasuki Pemeliharaan.`);
    }

    case "unmain": {
      if (!target) return LenwyText("*Contoh: Unmain Tiktok*");

      const pluginData = commands.get(target);
      if (!pluginData) return LenwyText("❌ Plugin Tidak Ditemukan.");

      state.maintenance = state.maintenance.filter((v) => v !== target);

      savePluginState(state);

      return LenwyText(`🎁 Plugin *${target}* Keluar Dari Pemeliharaan.`);
    }

    case "plugins": {
      const printed = new Set();

      const totalList = [];
      const disableList = [...state.disable];
      const maintenanceList = [...state.maintenance];

      for (let [cmd, data] of commands) {
        const mainCmd = data.info.menu?.[0]?.toLowerCase();
        if (!mainCmd || printed.has(mainCmd)) continue;

        printed.add(mainCmd);
        totalList.push(mainCmd);
      }

      totalList.sort((a, b) => a.localeCompare(b));
      disableList.sort((a, b) => a.localeCompare(b));
      maintenanceList.sort((a, b) => a.localeCompare(b));

      let text = `📦 *PLUGIN STATUS (${totalList.length})*\n\n`;

      text += `*[+] Maintenance (${maintenanceList.length})*\n`;
      text += maintenanceList.length
        ? maintenanceList.map((v) => ` - ${v}`).join("\n")
        : "Tidak Ada";
      text += `\n\n`;

      text += `*[+] Disable (${disableList.length})*\n`;
      text += disableList.length
        ? disableList.map((v) => ` - ${v}`).join("\n")
        : "Tidak Ada";

      if (disableList.length === 0 && maintenanceList.length === 0) {
        text += `\n\n☘️ *Semua Fitur Dalam Kondisi Aktif*`;
      }

      return LenwyText(text);
    }
  }
```
**[+] Keuntungan menggunakan switch :**

* Cocok untuk fitur dengan banyak command
* Logika command bisa dipisahkan
* Struktur lebih rapi untuk fitur kompleks

**[D] Template Tanpa Switch Case**

Template ini digunakan jika semua command memiliki logika yang sama.

**[+] Contoh :**
```js
export default async function handler(leni) {
  const { q, LenwyText, LenwyWait, LenwyVideo } = leni;

  // logika fitur
}
```

**[+] Contoh kode :**
```js
// ./WhatsApp/case/owner/direktori.js

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
```

**[+] Karena command sudah ditentukan oleh metadata :**
```js
case: ["tt", "ttdl", "tiktok"]
```
Maka semua command tersebut akan langsung menjalankan handler yang sama.

**[+] Keuntungan metode ini :**

* Kode lebih pendek
* Lebih sederhana
* Cocok untuk fitur tunggal

Keduanya sepenuhnya kompatibel dengan sistem bot dan tidak akan menyebabkan error.

Developer bebas memilih metode yang paling sesuai dengan kebutuhan fitur yang dibuat.

## 🎁 **Informasi Developer**
**Author : Lenwy**  
**Youtube : Lenwy**  
**Instagram : @ilenwy_**

## 🤝 **Kontribusi**
Kontribusi selalu terbuka! Jika anda ingin meningkatkan base ini, silakan lakukan fork dan ajukan pull request.

## **License**

MIT License

Copyright (c) 2026 Lenwy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

#### **Copyright © 2026 Lenwy**