const express = require('express');
const db = require('./dbConn');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes');
const app = express(); 

app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});