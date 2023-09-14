import { HeaderProps } from "../interfaces/HeaderProps";

/**
 * @description
 * ```ts
 * const h = new Header();
 * h.add('User-Agent', 'Bun/1.0.0')
 * ```
 */
export class Header {
  private readonly headers: HeaderProps = {
    "Content-Type": "text/plain",
    "User-Agent": "Bun/1.0.0",
    Accept: "*/*",
  };

  add<K extends keyof HeaderProps, V extends HeaderProps[K]>(key: K, value: V) {
    this.headers[key] = value;
  }

  getAllHeaders() {
    return this.headers;
  }
}