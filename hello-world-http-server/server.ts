Deno.serve((_req) => {
  const body = JSON.stringify({ message: "Hello World!" });
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
});