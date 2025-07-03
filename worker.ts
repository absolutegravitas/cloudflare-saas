// worker.ts

// The @ts-ignore is necessary because ".open-next/worker.js" is a generated file
// that only exists after the build step runs.

// @ts-ignore
import { default as handler } from "./.open-next/worker.js";
// @ts-ignore
import { DOQueueHandler } from "./.open-next/worker.js";

export default {
  fetch: handler.fetch,
} satisfies ExportedHandler<Env>;

export { DOQueueHandler };
