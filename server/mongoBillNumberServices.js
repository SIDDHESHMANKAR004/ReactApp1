import mongoose from 'mongoose';

// Bill Schema
const billSchema = new mongoose.Schema(
  {
    billNumber: {
      type: String,
      unique: true,
    },
    userId: String,
    items: [
      {
        productId: String,
        name: String,
        quantity: Number,
        price: Number,
        total: Number,
      },
    ],
    totalAmount: Number,
    discount: Number,
    finalAmount: Number,
    paymentMethod: String,
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Last Bill Number Schema
const lastBillNumberSchema = new mongoose.Schema(
  {
    lastNumber: {
      type: Number,
      default: 1000,
    },
    prefix: {
      type: String,
      default: 'BILL-',
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Bill = mongoose.model('Bill', billSchema);
const LastBillNumber = mongoose.model('LastBillNumber', lastBillNumberSchema);

// Get bill by ID
async function importBackendDataToBill(id) {
  try {
    const bill = await Bill.findById(id);
    if (bill) {
      return {
        ...bill.toObject(),
        id: bill._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching bill:', error);
    throw error;
  }
}

// Get last bill number
async function getLastBillNumberFromBackend() {
  try {
    let billNumber = await LastBillNumber.findOne({});
    if (!billNumber) {
      billNumber = new LastBillNumber();
      await billNumber.save();
    }
    return {
      ...billNumber.toObject(),
      id: billNumber._id.toString(),
    };
  } catch (error) {
    console.error('Error fetching last bill number:', error);
    throw error;
  }
}

// Add bill to backend
async function addBillToBackend(BillObj) {
  try {
    const newBill = new Bill(BillObj);
    const savedBill = await newBill.save();
    console.log('Bill created with ID:', savedBill._id);
    return {
      ...savedBill.toObject(),
      id: savedBill._id.toString(),
    };
  } catch (error) {
    console.error('Error adding bill:', error);
    throw error;
  }
}

// Update last bill number
async function updateBackendLastBillNumber(b) {
  try {
    const { id, ...updateData } = b;
    const updatedBillNumber = await LastBillNumber.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (updatedBillNumber) {
      return {
        ...updatedBillNumber.toObject(),
        id: updatedBillNumber._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error updating bill number:', error);
    throw error;
  }
}

// Get all bills
async function getAllBillsFromBackend() {
  try {
    const bills = await Bill.find({});
    return bills.map((bill) => ({
      ...bill.toObject(),
      id: bill._id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching bills:', error);
    throw error;
  }
}

// Update bill
async function updateBackendBill(billData) {
  try {
    const { id, ...updateData } = billData;
    const updatedBill = await Bill.findByIdAndUpdate(id, updateData, { new: true });
    if (updatedBill) {
      return {
        ...updatedBill.toObject(),
        id: updatedBill._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error updating bill:', error);
    throw error;
  }
}

// Delete bill
async function deleteBackendBill(billId) {
  try {
    const result = await Bill.findByIdAndDelete(billId);
    return result;
  } catch (error) {
    console.error('Error deleting bill:', error);
    throw error;
  }
}

// Generate new bill number
async function generateNextBillNumber() {
  try {
    let billNumber = await LastBillNumber.findOne({});
    if (!billNumber) {
      billNumber = new LastBillNumber();
    }
    billNumber.lastNumber += 1;
    billNumber.updatedAt = new Date();
    await billNumber.save();
    return `${billNumber.prefix}${billNumber.lastNumber}`;
  } catch (error) {
    console.error('Error generating bill number:', error);
    throw error;
  }
}

export {
  Bill,
  LastBillNumber,
  importBackendDataToBill,
  getLastBillNumberFromBackend,
  addBillToBackend,
  updateBackendLastBillNumber,
  getAllBillsFromBackend,
  updateBackendBill,
  deleteBackendBill,
  generateNextBillNumber,
};
