const Order = require("../models/Order");

exports.createOrder = (req, res) => {
  const { clientInfo, orderInfo, orderNr, totalPrice } = req.body;
  const order = new Order({ clientInfo, orderInfo, orderNr, totalPrice }); //clientInfo
  order
    .save()
    .then((order) => res.status(200).json(order))
    .catch((error) => handleError(res, error));
};

exports.getOrder = (req, res, next) => {
  Order.find()
    .sort({ createdAt: -1 })
    // .sort({ clientInfo: req.clientInfo })
    
    .then((orders) => res.status(200).json(orders))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneOrder = (req, res, next) => {
  // Order.findById(req.params.id)

  Order.findOne({ _id: req.params.id })
    
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(400).json({ error }));
};
