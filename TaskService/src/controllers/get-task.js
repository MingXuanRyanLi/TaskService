export default function makeGetTask(viewTask) {
  return async function getTask(httpRequest) {
    try {
      const result = await viewTask(httpRequest.params.id, httpRequest.query);

      return {
        statusCode: 200,
        body: result
      }
    } catch (e) {
      console.log(e);

      let response = {
        statusCode: 500,
        body: {
          error: e.message
        }
      }

      switch (e.name) {
        case 'Error':
          response.statusCode = 400;
          break;
        case 'RangeError':
          response.statusCode = 404;
          break;
      }

      return response;
    }
  }
}
