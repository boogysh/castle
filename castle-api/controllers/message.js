const MSG = require("../models/Message");

exports.createMessage = (req, res) => {
  const { firstName, lastName, tel, email, messageTxt } = req.body;
  const message = new MSG({ firstName, lastName, tel, email, messageTxt });
  message
    .save()
    .then((message) => res.status(200).json(message))
    .catch((error) => handleError(res, error));
};
exports.getMessage = (req, res, next) => {
  MSG.find()
    .sort({ createdAt: -1 })
    // .sort({ clientInfo: req.clientInfo })

    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};
// exports.createMessage = async (req, res) => {
//   const { firstName, lastName, tel, email, messageTxt } = req.body;
//   try{
//     const message = await MSG.create({firstName, lastName, tel, email, messageTxt})
//     request.status(201).json(message);
//   }
//   catch(err){
//     console.error(err);
//   }
// }
// exports.getMessage = async (req, res) => {
//   try {
//     const msg = await MSG.find().sort({ createdAt: -1 });
//     if (!msg) return res.status(204).json({ message: "No messages found" });
//     res.json(msg);
//   } catch {
//     (error) => res.status(400).json({ error });
//   }
// };



// exports.getOneOrder = (req, res, next) => {
//   // Order.findById(req.params.id)

//   Order.findOne({ _id: req.params.id })

//     .then((order) => res.status(200).json(order))
//     .catch((error) => res.status(400).json({ error }));
// };
