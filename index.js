const express = require('express');
const cors = require('cors');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const tasks = [
  {
    id: 1,
    title: "Welcoming Guests & Offering Help",
    category: "Explain Hotel options",
    duration: "6:05"
  },
  {
    id: 2,
    title: "Describing Room Types",
    category: "Explain Hotel options",
    duration: "5:21"
  },
  {
    id: 3,
    title: "Explaining Basic Amenities",
    category: "Explain Hotel options",
    duration: "6:21"
  },
  {
    id: 4,
    title: "Guiding Guests from Lobby to Elevator",
    category: "Give Direction",
    duration: "7:12"
  },
  {
    id: 5,
    title: "Directing a Guest to the Dining Area",
    category: "Give Direction",
    duration: "5:57"
  },
  {
    id: 6,
    title: "Pointing Out Nearby Transport Options",
    category: "Give Direction",
    duration: "5:21"
  },
  {
    id: 7,
    title: "Delivering Extra Towels",
    category: "Respond to Guest Requests",
    duration: "5:57"
  },
  {
    id: 8,
    title: "Arranging a Late Checkout",
    category: "Respond to Guest Requests",
    duration: "6:21"
  },
  {
    id: 9,
    title: "Handling a Wake-Up Call Request",
    category: "Respond to Guest Requests",
    duration: "6:21"
  },
  {
    id: 10,
    title: "Recommending a Museum Visit",
    category: "Explain Local Attractions",
    duration: "6:05"
  }
];

app.get('/stories', (req, res) => {
  res.json(tasks);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
