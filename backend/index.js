require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const authRoutes=require('./routes/authRoute')
const medicineRoutes=require('./routes/medicineRoute')




app.use('/api/auth', authRoutes);
app.use('/api/medicine', medicineRoutes);

app.get('/', (req, res) => {
  res.send('MedVerify Backend Running 🚀');
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
