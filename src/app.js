const Item = require('./models/item');
const Promotion = require('./models/promotion');
const CartItem = require('./models/cartItem');
const ReceiptItem = require('./models/receiptItem');
const Receipt = require('./models/Receipt');

function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, Item.all());

  const receiptItems = ReceiptItem.buildReceiptItems(cartItems, Promotion.all());

  const receipt = new Receipt(receiptItems);

  const receiptText = receipt.buildText(receipt);

  console.log(receiptText);
}

exports.printReceipt = printReceipt;
