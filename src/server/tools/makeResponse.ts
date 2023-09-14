export const makeResponse = (
  data: string | Response | Promise<Response> | null,
  options?: ResponseInit
) => {
  return new Response(JSON.stringify(data), options);
};
