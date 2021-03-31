export default function makeDeleteTask(removeTask) {
  return async function deleteTask(httpRequest) {
    try {
      const result = await removeTask(httpRequest.params.id);

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
