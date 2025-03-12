// To listen on port 4242 and bind to 0.0.0.0.
Deno.serve({ port: 4242, hostname: "0.0.0.0" }, (_req) => {
  return new Response("Hello, World!");
});