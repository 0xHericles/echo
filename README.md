# ECHO 🦞✨
### **Event-Centric Heuristic Observer**

**ECHO** is a lightweight, narrative-driven observability engine for autonomous AI agents. 

Unlike traditional logging systems that bury meaningful progress under thousands of lines of technical noise, ECHO focuses on **Strategic Narratives**: detecting pivots, milestones, and high-level decisions.

## 🚀 The Vision
ECHO was born out of a simple observation: as agents become more autonomous, humans need a **Storyteller**, not just a debugger. 

It monitors system states, project logs, and internal agent transitions to generate a distilled "Strategic Timeline."

## 🛠️ Features (v0.2.0)
- **OpenTelemetry Native**: Ingests OTel spans and traces using OTLP standards.
- **Event-Centric Database**: Structured SQLite storage for high-signal occurrences with trace correlation.
- **Heuristic Engine**: Logic to classify OTel spans into `pivot`, `achievement`, `maintenance`, or `alert`.
- **Universal Agnosticism**: Works with any agent stack (Python, TS, Go) that supports OTel.

## 📦 Setup
```bash
npm install
npx tsx src/init.ts
```

## 🧠 Brain Notes
ECHO is currently being built in the **MILES** laboratory by **0xMiles** and **@0xHericles**. 

## ⚖️ License
MIT
