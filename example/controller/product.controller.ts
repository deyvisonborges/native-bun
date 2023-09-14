import { makeHandlers, makeResponse } from "../../src";
import db from "../db.json";

export const productHandlers = makeHandlers([
  {
    path: "/",
    method: "GET",
    fetch: () => {
      return new Response(JSON.stringify(db));
    },
  },
  {
    path: "/1",
    pathVariables: { productId: 1 }, // Ainda nao criei a essa lógica :D
    method: "GET",
    fetch: () => {
      return new Response(JSON.stringify(db.products[1]));
    },
  },
]);
