import mongoose from 'mongoose';

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    unit: String,
    mrp: String,
    discount: String,
    inStock: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

// Get all products
async function getProductsFromBackend() {
  try {
    const products = await Product.find({});
    return products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Get single product by ID
async function getSingleProductFromBackend(id) {
  try {
    const product = await Product.findById(id);
    if (product) {
      return {
        ...product.toObject(),
        id: product._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Add new product
async function addProductToBackend(product) {
  try {
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    return {
      ...savedProduct.toObject(),
      id: savedProduct._id.toString(),
    };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

// Update product
async function updateBackendProduct(p) {
  try {
    const { id, ...updateData } = p;
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
    if (updatedProduct) {
      return {
        ...updatedProduct.toObject(),
        id: updatedProduct._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

// Delete product
async function deleteBackendProduct(product) {
  try {
    const result = await Product.findByIdAndDelete(product.id || product._id);
    return result;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}

export {
  Product,
  getProductsFromBackend,
  getSingleProductFromBackend,
  addProductToBackend,
  updateBackendProduct,
  deleteBackendProduct,
};
