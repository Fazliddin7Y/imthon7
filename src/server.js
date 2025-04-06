// server.js (yoki app.js)
const express = require('express');
const cors = require('cors');
const app = express();

// CORS ruxsatlarini qo'shish
app.use(cors({
  origin: 'http://localhost:5173', // Frontend manzilingiz
}));

app.get('/teachers', (req, res) => {
  // Ma'lumotlarni qaytarish
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
