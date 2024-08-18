const mongoose = require('mongoose');
const { Schema } = mongoose;

// Định nghĩa schema cho người dùng
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Đảm bảo lưu mật khẩu đã băm
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Tạo model từ schema
const User = mongoose.model('User', userSchema);

module.exports = User;
