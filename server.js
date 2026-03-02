const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// IMPORT ROUTES
const userRoutes = require('./routes/userRoutes');

// CONNECT ROUTES
app.use('/api/cv', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});