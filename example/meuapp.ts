import { makeServer } from "../src";
import { productHandlers } from "./controller/product.controller";

const meuserver = makeServer({
  port: 3000,
  handlers: [...productHandlers],
});

console.log(`Rodando meu server na porta ` + meuserver.port);
