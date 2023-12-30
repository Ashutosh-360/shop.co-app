const successHandler = (res, message, data) => {
  res.status(200).send({ success: true, info: message, results: data });
};

export default successHandler;
