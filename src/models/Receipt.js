class Receipt{
  constructor(receiptItems,total=0,savedTotal=0){

    for (const receiptItem of receiptItems) {
      total += receiptItem.subtotal;
      savedTotal += receiptItem.saved;
    }
    this.receiptItems = receiptItems;
    this.total = total;
    this.savedTotal = savedTotal;
  }

  buildReceipt(receiptItems){
    return new Receipt(receiptItems);
  }
}

module.exports = Receipt;
