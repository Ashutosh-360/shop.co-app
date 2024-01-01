const errorHandler = (res, message) => {
  res.status(200).send({ success: false, info: message });
};

export default errorHandler;
