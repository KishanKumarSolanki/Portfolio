const express = require('express');
const cors = require('cors');
const sendMail = require('./mail');

const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendMail({ name, email, message });
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));