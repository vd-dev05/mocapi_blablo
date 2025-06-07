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

const onbroading = {
  "steps": [
    {
      "step_id": "intro_commute",
      "type": "intro",
      "title": "Boost your speaking On the Go 🏃‍️🚴‍️🚌",
      "sub_title": "",
      "image_url": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/screen-1.jpg",
      "action_label": "Let's go",
      "next_step": "intro_traffic"
    },
    {
      "step_id": "intro_traffic",
      "type": "intro",
      "title": "Real-life stories, Tailored for you✨",
      "sub_title": "",
      "image_url": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/intro_traffic.png",
      "action_label": "Let's go",
      "next_step": "intro_dishes"
    },
    {
      "step_id": "intro_dishes",
      "type": "intro",
      "title": "Imagine Your own scenarios 🎨",
      "sub_title": "",
      "image_url": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/intro_dishes.png",
      "action_label": "Let's go",
      "next_step": "welcome_hero"
    },
    {
      "step_id": "welcome_hero",
      "type": "intro",
      "title": "Welcome 🎉",
      "sub_title": "Hey there 👋 I’m Hiro!, Ready for our adventure?",
      "image_url": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/onboarding-mascot-4.jpg",
      "action_label": "I'm ready",
      "next_step": "goal_selection",
      "character": "Hiro"
    },
    {
      "step_id": "goal_selection",
      "type": "multiple_choice",
      "title": "What's your BIG English goals?",
      "sub_title": "",
      "action_label": "Continue",
      "next_step": "cefr_level",
      "character": "Hiro",
      "options": [
        {
          "emoji": "💼",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/image.png",
          "label": "Boost my career",
          "value": "career"
        },
        {
          "emoji": "🗣️",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/image-1.png",
          "label": "Speak confidently in daily life",
          "value": "daily_confidence"
        },
        {
          "emoji": "✈️",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/image-2.png",
          "label": "Travel and see the world",
          "value": "travel"
        },
        {
          "emoji": "🎓",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/image-3.png",
          "label": "Do great at school",
          "value": "school"
        },
        {
          "emoji": "🧩",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/image-4.png",
          "label": "Something else",
          "value": "other"
        }
      ],
      "character_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/goal_selection/hiro.png"
    },
    {
      "step_id": "cefr_level",
      "type": "single_choice",
      "title": "Great! So how is your English?",
      "sub_title": "",
      "action_label": "Continue",
      "next_step": "job_type",
      "character": "Hiro",
      "options": [
        {
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/cefr_level/image.png",
          "label": "I can make simple sentences",
          "value": "A2"
        },
        {
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/cefr_level/image-1.png",
          "label": "I can handle simple topics",
          "value": "B1"
        },
        {
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/cefr_level/image-2.png",
          "label": "I can discuss many topics but struggle with details",
          "value": "B2"
        },
        {
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/cefr_level/image-3.png",
          "label": "I'm fluent but need more confidence",
          "value": "C1+"
        }
      ],
      "character_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/hiro_target_transparent.png"
    },
    {
      "step_id": "job_type",
      "type": "multiple_choice",
      "title": "Got you! Which best fits your job?",
      "sub_title": "",
      "action_label": "Continue",
      "next_step": "topic_selection",
      "character": "Hiro",
      "options": [
        {
          "emoji": "💼",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image.png",
          "label": "Office Worker",
          "value": "office_worker"
        },
        {
          "emoji": "💬",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-1.png",
          "label": "Tech Professional",
          "value": "tech_professional"
        },
        {
          "emoji": "🌴",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-2.png",
          "label": "Sales & Marketing",
          "value": "sales_marketing"
        },
        {
          "emoji": "😂",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-3.png",
          "label": "Customer support",
          "value": "customer_support"
        },
        {
          "emoji": "📰",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-4.png",
          "label": "Finance",
          "value": "finance"
        },
        {
          "emoji": "🍜",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-5.png",
          "label": "Education",
          "value": "education"
        },
        {
          "emoji": "🎬",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-6.png",
          "label": "Hospitality & Travel",
          "value": "hospitality_travel"
        },
        {
          "emoji": "🎵",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-7.png",
          "label": "Healthcare",
          "value": "healthcare"
        },
        {
          "emoji": "🧩",
          "emoji_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/image-8.png",
          "label": "Something else",
          "value": "other"
        }
      ],
      "character_image": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/app/so_how/Hiro.png"
    },
    {
      "step_id": "sign_in",
      "type": "auth",
      "title": "Hey hey! You're back! 👋",
      "sub_title": "",
      "image_url": "https://blablo-storage-prod.s3.ap-southeast-1.amazonaws.com/s3/onboarding-mascot-2.jpg",
      "next_step": "onboarding_done",
      "character": "Hiro",
      "description": "Adventure continues ✨",
      "auth_methods": [
        {
          "provider": "google",
          "label": "Sign in with Google"
        },
        {
          "provider": "facebook",
          "label": "Sign in with Facebook"
        }
      ]
    }
  ]
}

// api onbroading
app.get('/api/v1/onboarding', (req,res) => {
  res.json(onbroading);
});


// API tổng quát
app.get('/api/playlists', (req, res) => {
  const deviceId = req.query.user_id;

  if (!deviceId) {
    return res.status(404).json({ error: 'Device_id is required' });
  }

  res.json(tasks);
});
// Api xoa list Ui 
app.delete('/api/playlists/:id', (req, res) => {
  const storyId = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === storyId);

  if (index === -1) {
    return res.status(404).json({ error: 'Story not found' });
  }

  tasks.splice(index, 1);
  res.json({ message: 'Story deleted successfully' });
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
