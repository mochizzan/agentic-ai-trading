# Agentic AI Trading Platform

Platform trading berbasis agen AI untuk analisis pasar dan eksekusi otomatis.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-blue.svg)](https://www.typescriptlang.org/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.63+-orange.svg)](https://kit.svelte.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)

## 🚀 Overview

Agentic AI Trading adalah platform trading otomatis yang menggunakan kecerdasan buatan untuk menganalisis pasar finansial dan mengeksekusi transaksi secara otomatis berdasarkan strategi yang dipelajari.

### Fitur Utama
- 🤖 Analisis pasar menggunakan AI/ML
- 📊 Visualisasi data real-time
- ⚡ Eksekusi otomatis dengan kontrol penuh
- 📈 Backtesting strategi trading
- 🔒 Keamanan data dan API

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript | 6.x |
| Framework | SvelteKit | 2.63.x |
| UI Framework | Svelte | 5.56.x |
| Build Tool | Vite | 8.x |
| Testing | svelte-check | 4.6.x |
| Adapter | @sveltejs/adapter-auto | 7.x |

## 📋 Requirements

- **Node.js**: v22+ (Latest LTS)
- **npm**: v10+
- **Docker**: v24+ (untuk production)

## 🖥️ Development Environment

### Windows 10 (Development)

```bash
# Clone repository
git clone https://github.com/mochizzan/agentic-ai-trading.git
cd agentic-ai-trading

# Install dependencies
npm install

# Start development server
npm run dev
# or
npm run dev -- --open
```

Development server akan berjalan di `http://localhost:5173`.

### Docker (Production)

```bash
# Build Docker image
docker build -t agentic-ai-trading .

# Run container
docker run -p 3000:3000 agentic-ai-trading
```

## 📦 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production version |
| `npm run preview` | Preview production build |
| `npm run check` | Type check |
| `npm run check:watch` | Type check with watch mode |

## 📁 Project Structure

```
agentic-ai-trading/
├── src/
│   ├── routes/          # SvelteKit pages (routes)
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── lib/             # Shared libraries
│   ├── app.d.ts         # TypeScript declarations
│   └── app.html         # HTML template
├── static/              # Static assets
├── .svelte-kit/         # Generated SvelteKit files
├── .codegraph/          # Code knowledge graph
├── .serena/             # MCP Serena index
├── package.json
├── vite.config.ts
├── tsconfig.json
└── Dockerfile           # Production container
```

## 🔧 Configuration

### Environment Variables

Buat file `.env` di root project:

```env
# API Keys
API_KEY=your_api_key_here

# Trading Configuration
TRADING_STRATEGY=your_strategy
TRADE_AMOUNT=1000
```

### Git Ignore

File berikut otomatis di-ignore:
- `node_modules/` — dependencies
- `.env` — sensitive data
- `.codegraph/`, `.serena/` — MCP artifacts
- `.svelte-kit/` — generated files
- `dist/`, `.output/` — build outputs
- Cache & temp files

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Project Link: [https://github.com/mochizzan/agentic-ai-trading](https://github.com/mochizzan/agentic-ai-trading)

---

<div align="center">
  <p>Built with ❤️ using SvelteKit & TypeScript</p>
</div>
