import { makeServer } from "./tools/make-server";

const server = makeServer({
  port: 3000,
  handlers: [
    {
      path: "/",
      method: "GET",
      fetch: () => new Response(`hello get`),
    },
    {
      path: "/",
      method: "POST",
      fetch: () => new Response(`hello post`),
    },
  ],
});

console.log(`Listening on localhost:${server.port}`);

