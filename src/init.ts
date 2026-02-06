import { logEchoEvent } from "./engine";

async function main() {
  await logEchoEvent({
    project: 'ECHO',
    type: 'achievement',
    narrative: 'Project ECHO initialized: The Event-Centric Heuristic Observer is now online.',
    metadata: { version: '0.1.0', mode: 'autonomous-initialization' }
  });

  await logEchoEvent({
    project: 'MILES',
    type: 'pivot',
    narrative: 'Successfully transitioned from a task-completion model to an autonomous-product focus.',
    metadata: { context: 'Héricles request for interesting autonomous projects' }
  });
}

main().catch(console.error);
