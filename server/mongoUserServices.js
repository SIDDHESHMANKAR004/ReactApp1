import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    phone: String,
    address: String,
    password: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// Add user to backend
async function addUserToBackend(user) {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    console.log('User created with ID:', savedUser._id);
    return {
      ...savedUser.toObject(),
      id: savedUser._id.toString(),
    };
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}

// Get all users
async function getUserFromBackend() {
  try {
    const users = await User.find({});
    return users.map((user) => ({
      ...user.toObject(),
      id: user._id.toString(),
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Get user by email
async function getUserByEmailFromBackend(email) {
  try {
    const user = await User.findOne({ email });
    if (user) {
      return {
        ...user.toObject(),
        id: user._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Get user by ID
async function getUserByIdFromBackend(id) {
  try {
    const user = await User.findById(id);
    if (user) {
      return {
        ...user.toObject(),
        id: user._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Update user
async function updateBackendUser(userData) {
  try {
    const { id, ...updateData } = userData;
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (updatedUser) {
      return {
        ...updatedUser.toObject(),
        id: updatedUser._id.toString(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// Delete user
async function deleteBackendUser(userId) {
  try {
    const result = await User.findByIdAndDelete(userId);
    return result;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

export {
  User,
  addUserToBackend,
  getUserFromBackend,
  getUserByEmailFromBackend,
  getUserByIdFromBackend,
  updateBackendUser,
  deleteBackendUser,
};
