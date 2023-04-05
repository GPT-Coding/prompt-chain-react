// mockServer.d.ts

import { SetupWorker } from 'msw';

declare module './browser' {
  export const worker: SetupWorker;
}
