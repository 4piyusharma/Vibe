import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //Imagine it is a summary step
    await step.sleep("wait-a-movement", "10s");
    //Imagine it is a transcropt step
    await step.sleep("wait-a-movement","20s");
    //Imagine it is a summary
    await step.sleep("wait-a-movement","30s");
    return { message: `Hello ${event.data.email}!` };
  },
);