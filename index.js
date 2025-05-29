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

const taskDetails = {
  1: {
    word: {
      term: "Lobby",
      phonetic: "/ˈlɒb.i/, sounds like 'lob-ee'",
      definition: "A hall at a building’s entrance",
      examples: [
        "Meet me in the lobby",
        "The office lobby was decorated with fresh flowers"
      ]
    },
    story: {
      title: "The Skyline Hotel",
      narrator: "Hi, it's Hiro here. Last week, I checked into the Skyline Hotel for a business trip.",
      paragraphs: [
        "I pushed open the glass doors and stepped into a lobby scented with fresh coffee and jasmine. Soft jazz music played in the background."
      ],
      conversation: [
        {
          speaker: "receptionist",
          text: "Welcome! May I have your name and booking reference, please?"
        },
        {
          speaker: "guest",
          text: "Certainly. Indoor or outdoor seating?"
        },
        {
          speaker: "receptionist",
          text: "Indoor, please. A quiet table if possible."
        },
        {
          speaker: "guest",
          text: "No problem. Do you need a high chair?"
        },
        {
          speaker: "receptionist",
          text: "No, thank you. Just a regular table."
        },
        {
          speaker: "guest",
          text: "Under what name should I book?"
        }
      ]
    },
    audio: {
      url: "https://example.com/audio/welcoming_guests.mp3",
      duration: "6:05"
    }
  },

};
// API tổng quát
app.get('/stories', (req, res) => {
  res.json(tasks);
});

// API chi tiết cho từng bài học
app.get('/stories/:id', (req, res) => {
  const id = req.params.id;
  const detail = taskDetails[id];
  if (detail) {
    res.json(detail);
  } else {
    res.status(404).json({ error: 'Story not found' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
