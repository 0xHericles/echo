import Database from "better-sqlite3";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const DB_PATH = path.join(__dirname, "../echo.db");
const db = new Database(DB_PATH);

interface EchoEvent {
  id: string;
  project: string;
  type: 'pivot' | 'achievement' | 'maintenance' | 'alert';
  narrative: string;
  metadata: any;
}

export async function logEchoEvent(event: Omit<EchoEvent, 'id'>) {
  const id = crypto.randomBytes(8).toString("hex");
  const stmt = db.prepare(`
    INSERT INTO events (id, project, type, narrative, metadata)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(id, event.project, event.type, event.narrative, JSON.stringify(event.metadata));
  console.log(`[ECHO] New event recorded: ${event.narrative}`);
  return id;
}

// Example check: Watch for high memory or specific state changes
export async function scanSystemState() {
  // Logic to detect interesting moments from other project states
}
