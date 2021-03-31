export default function makeExpressCallback(controller) {
  return (req, res) => {
    //extract http request data from express request
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params
    }

    //invoke controller
    controller(httpRequest)
      .then(httpResponse => {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      })
      .catch(error => {
        res.status(500).json({
          error: 'An unknown error occured.'
        })
      });
  }
};
