import { log } from "console";
import { HandlerProps } from "../interfaces/HandlerProps";
import { HeaderProps } from "../interfaces/HeaderProps";
import { makeResponse } from "./makeResponse";

type MakeServerProps = {
  port: number;
  handlers: HandlerProps[];
  headers?: HeaderProps;
};

export function makeServer(server: MakeServerProps) {
  return Bun.serve({
    fetch(request) {
      let response = new Response();

      /**
       * Headers definitions
       */
      if (server.headers) {
        Object.entries(server.headers).map(([key, value]) =>
          response.headers.set(key, value)
        );
      } else {
        response.headers.set("Content-Type", "text/plain");
      }

      /**
       * Handlers definitions
       */
      const requestedPath = new URL(request.url).pathname;
      const requestedMethod = request.method;
      console.log(requestedPath)

      for (const handle in server.handlers) {
        console.log(requestedPath === server.handlers[handle].path)
        console.log(requestedPath, server.handlers[handle].path)
        if(requestedPath === server.handlers[handle].path) {
          if(requestedMethod === server.handlers[handle].method) {
            const result = server.handlers[handle].fetch(request)
            return result;
          } else {
            return new Response("Method Not Allowed", { status: 405});
          }
        } else {
          return new Response("Path Not Found", { status: 404});
        }
      }

      return makeResponse("", { status: 204 });
    },
  });
}
