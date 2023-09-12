import { HandlerProps } from '../interfaces/handler-props'
import url from 'url'

type MakeServerProps = {
  port: number
  handlers: HandlerProps[]
}

export function makeServer(props: MakeServerProps) {
  return Bun.serve({ 
    port: props.port,
    fetch(request) {
      const requestedUrl = url.parse(request.url).pathname
      const requestedMethod = request.method

      for (const handle in props.handlers) {
        if(requestedUrl === props.handlers[handle].path) {
          if(requestedMethod === props.handlers[handle].method) {
            const result = props.handlers[handle].fetch(request)
            return result;
          } else {
            const error = { status: 405, message: 'Method Not Allowed'}
            return new Response("Method Not Allowed", { status: 405});
          }
        } else {
          return new Response("Path Not Found", { status: 404});
        }
      }
      return new Response();
    }
  })
}
