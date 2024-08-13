const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let users = [
  {
    email: 'ivan@ukr.net',
    password: '$2b$10$KIX6Q9YzFkG5XxZHmTWIw.ZJ8W9/I4DxKgf/FV3U1ET3T5Ym0hvF.', // хеш для "123"
    confirmed: true,
  },
  {
    email: 'pulka@inbox.eu',
    password: '$2b$10$KIX6Q9YzFkG5XxZHmTWIw.ZJ8W9/I4DxKgf/FV3U1ET3T5Ym0hvF.', // хеш для "123"
    confirmed: true,
  },
];

router.post('/settings', async (req, res) => {
  const { action, newEmail, oldPassword, newPassword } = req.body;

  const user = users[0];

  if (action === 'updateEmail') {
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, error: 'Invalid old password' });
    }
    user.email = newEmail;
    res.json({ success: true, message: 'Email updated successfully' });
  } else if (action === 'updatePassword') {
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, error: 'Invalid old password' });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    res.json({ success: true, message: 'Password updated successfully' });
  } else {
    res.status(400).json({ success: false, error: 'Invalid action' });
  }
});

module.exports = router;
