exports.send = (res, code, payload, message) => {
  var response = {
      code,
      payload,
      message
  };

  return res.send(response);
}