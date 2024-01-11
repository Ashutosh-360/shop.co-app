const successHandler = (res, message, data,extraData={}) => {
  return res.status(200).send({ success: true, info: message, results: data,...extraData });
};

export default successHandler;
