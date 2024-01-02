const errorHandler = (res, message) => {
  return res.status(200).send({ success: false, info: message });
};

export default errorHandler;
