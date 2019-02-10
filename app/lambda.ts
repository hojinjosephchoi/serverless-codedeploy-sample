
export async function handler(event, context) {
  // throw new Error('world7 error!!!');
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world11',
    }),
  };
}
