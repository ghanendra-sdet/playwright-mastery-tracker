# 📚 Interactive Playwright SDET Study Planner

### 🌐 [Open the live tracker →](https://ghanendra-sdet.github.io/playwright-mastery-tracker/)

Welcome to your **Playwright SDET Master Plan**! This is a modern, premium, interactive dashboard designed to help you follow your study roadmap systematically, record notes, set start dates, and track your progress through all **94 topics** across **10 modules** — plus a second tracked view for a companion Udemy course.

> [!NOTE]
> This repo was originally named "60 Days," but the live plan had grown to a 90-day structure
> since it was first created — the tracker itself (`data.js`) is the source of truth for the
> real content. Renamed to `playwright-mastery-tracker` to drop the mismatched day count
> entirely rather than chase a number that keeps changing.

## ✨ Features

- **📊 Dual-Metric Progress Tracking**: Live radial indicator reflecting total checked submodules and individual module percentage counts.
- **🌗 Native Light/Dark Mode**: A beautiful, curated dark-mode first design with theme switching that respects system overrides.
- **🔍 Full-Text Filter-Search**: Type in topics, keywords, or day counts to instantly query corresponding days.
- **📝 Personal Learning Notes**: Record custom start dates and comment/memo text inside the dashboard.
- **💾 LocalStorage Auto-Sync**: Your progress state (checked days, notes, custom dates) is preserved in your browser across reload sessions.
- **📱 Responsive Layout**: Fully optimized layout for mobile devices, laptops, and wide screens.
- **💡 Built-in Cheat Sheet Drawer**: Access locator code blocks, interaction APIs, and routing/intercept setups with a single click.

---

## 🚀 Running Locally

Due to CORS security guidelines, modern browsers prevent direct fetching of page scripts from `file://` protocols. To access the dashboard, run a simple local web server in this directory.

### Method 1: Python (Recommended - No installation required on macOS)
Open your terminal in this workspace folder and run:
```bash
python3 -m http.server 8000
```
Then open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**

### Method 2: Node.js (npx serve)
If you have Node.js installed, execute:
```bash
npx serve
```
Then open the displayed local URL (usually `http://localhost:3000`).

---

## 🗂️ Project Structure

```text
playwright-mastery-tracker/
│
├── 📄 index.html      # Responsive Single-Page Application shell
├── 🎨 styles.css      # Design system, glassmorphism layouts, animations & responsive media
├── ⚙️  data.js        # Syllabus database containing the 93 days structured by module
├── ⚙️  app.js         # Core application logic, search filters, metrics, state management
└── 📋 README.md       # Project guide and instructions
```

Happy testing! 🚀
