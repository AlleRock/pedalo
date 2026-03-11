# 🚴 Pèdalo

> *Come Dedalo costruì le sue ali, tu costruisci la tua bici — pezzo dopo pezzo.*

**Pèdalo** è una web app progressiva (PWA) per tenere traccia dei componenti della tua bici: cosa hai montato, quando l'hai cambiato, e tutta la storia di ogni singolo pezzo.

---

## ✨ Funzionalità

- 📋 **Lista componenti** — 21 pezzi precaricati, ordinabili, rinominabili, con icona personalizzabile
- 🔍 **Dettaglio componente** — marchio, modello, data di installazione
- 🔄 **Storico sostituzioni** — ogni cambio viene registrato con data, note e riferimento al pezzo precedente
- ➕ **Componenti custom** — aggiungi qualsiasi pezzo non in lista
- 📤 **Export JSON** — backup completo scaricabile in un click
- 📥 **Import JSON** — ripristino da backup con anteprima prima di confermare
- 📡 **Funziona offline** — Service Worker con cache-first strategy
- 📱 **Installabile** — si aggiunge alla schermata Home come app nativa (iOS & Android)

---

## 🗂 Struttura

```
pedalo/
├── pedalo.html     ← l'app completa
├── sw.js           ← Service Worker per offline
├── manifest.json   ← identità PWA
└── icona.png       ← icona installazione
```

---

## 🚀 Come si usa

### Online
Carica i quattro file su qualsiasi hosting statico con HTTPS:
- [GitHub Pages](https://pages.github.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

Apri l'URL dal telefono → banner *"Aggiungi a schermata Home"* → installata. ✅

### In locale
Serve un server HTTP locale (i browser non registrano SW da `file://`):

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Poi apri `http://localhost:8080/pedalo.html`.

---

## 💾 I dati

I dati vivono nel **localStorage** del browser — automatico, nessuna registrazione, nessun cloud.

Per non perderli: **esporta il backup JSON** ogni tanto e salvalo dove vuoi (iCloud, Drive, email...). Per ripristinare: **importa** lo stesso file da qualsiasi dispositivo.

---

## 🛠 Tecnologie

Vanilla HTML · CSS · JavaScript — zero dipendenze, zero framework, zero build step.
Un file, una bici, tutta la storia.

---

*Pèdalo — perché ogni componente ha la sua storia.*
