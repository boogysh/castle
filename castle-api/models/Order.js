const mongoose = require("mongoose");
//const { stringify } = require("uuid");

const opts = {
  timestamps: { currentTime: () => Date.now() + 1 * 60 * 60 * 1000 },
};
const orderSchema = mongoose.Schema(
  {
    clientInfo: {
      firstName: String,
      lastName: String,
      address: String,
      city: String,
      email: String,
      messageTxt: String,
    },
    orderInfo: [{ id: String, qty: Number, _id: false }],
    orderNr: { type: String, required: false },
    totalPrice: { type: Number, required: false },
  },
  opts //   { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
