import { HttpMethodProps } from "../../libs/http/__index";

export type HandlerProps = {
  path: string;
  method: HttpMethodProps;
  fetch(request: Request): Response | Promise<Response>;
  pathVariables?: Record<string, unknown>;
};
