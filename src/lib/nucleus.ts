import { createClient, type Environment } from "@techsolace-studios/nucleus-sdk";

// Declare content models here once the Nucleus schema for this site is defined:
// declare module "@techsolace-studios/nucleus-sdk" {
//   interface NucleusModels {
//     page: { title: string; slug: string; body: string };
//   }
// }

export const nucleus = createClient({
  endpoint: process.env.NUCLEUS_ENDPOINT!,
  apiKey: process.env.NUCLEUS_API_KEY!,
  projectId: process.env.NUCLEUS_PROJECT_ID,
  environment: process.env.NUCLEUS_ENVIRONMENT as Environment | undefined,
});
