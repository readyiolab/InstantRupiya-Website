import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/preparation")({
  server: {handlers: {POST: async ({request}) => {
    const {handlePreparation} = await import("@/lib/preparation.server");
    return handlePreparation(request);
  }}},
});