const express = require ('express');
const dotenv= require('dotenv');
dotenv.config();
const { connectDB } = require('./config/db');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 1179;
connectDB(); //connect to database
const app = express();

app.use(cors());
app.use(express.json());//configure the app to send raw json
app.use(express.urlencoded({extended: false}));

//connect with the route files
app.use('/api/users', require('./routes/userRoutes') );
app.use('/api/listings', require('./routes/listingRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));


app.listen(PORT, ()=>console.log('SERVER STARTED ON PORT ', PORT));



//serve front-end
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}