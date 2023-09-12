import { HTTP_METHODS } from "./http-methods";

export type HandlerProps = {
  path: string,
  method: HTTP_METHODS,
  fetch(request: Request | string): Response | Promise<Response>;
}