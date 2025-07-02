const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());


// create config model file 
const onbroadingFile = path.join(__dirname, 'data', 'onbroading.json');
const lessonFile = path.join(__dirname, 'data', 'lesson.json');
const storyFile = path.join(__dirname, 'data', 'story.json');
const quests = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'quests.json'), 'utf8')
);

// func read file 
function readOnboarding() {
  return JSON.parse(fs.readFileSync(onbroadingFile, 'utf-8'));
}

function readStories() {
  return JSON.parse(fs.readFileSync(storyFile, 'utf-8'));
}

function readLessons() {
  return JSON.parse(fs.readFileSync(lessonFile, 'utf-8'));
}

// 
const start = Date.now();
// Load dữ liệu vào biến toàn cục (có thể load 1 lần khi server khởi động)
let onboarding = readOnboarding();
let tasks = readLessons();        // giả sử lesson.json là danh sách tasks
let taskDetails = readStories(); // giả sử story.json là chi tiết story
const end = Date.now();
console.log(`Time to load all JSON files: ${end - start} ms`);

/**
 * GET /api/scenarios/learning-journeys
 * Params: week (number)
 * - week=1: trả về full quests
 * - week>1: chỉ trả về id & title của mỗi quest
 */
app.get('/api/scenarios/learning-journeys', (req, res) => {
  const week = parseInt(req.query.week, 10) || 1;

  if (week === 1) {
    return res.json({ quests });
  }

  // week > 1: chỉ trả id và title
  const summary = quests.map(q => ({
    id: q.id,
    title: q.title
  }));
  return res.json({ quests: summary });
});
/**
 * GET /api/scenarios/:questId
 * Trả về chi tiết quest (full object) với delay 4s
 */
app.get('/api/scenarios/:questId', async (req, res) => {
  const { questId } = req.params;
  const quest = quests.find(q => q.id === questId);

  // Mô phỏng delay để test loading
  await new Promise(r => setTimeout(r, 4000));

  if (!quest) {
    return res.status(404).json({ error: 'Quest not found' });
  }
  return res.json({ quest });
});

// api onbroading
app.get('/api/v1/onboarding', (req, res) => {
  res.json(onboarding);
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
  const deviceId = req.headers['user_id'];

  if (!deviceId) {
    return res.status(404).json({ error: 'device_id is required in header' });
  }

  const storyId = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === storyId);

  if (index === -1) {
    return res.status(404).json({ error: 'Story not found' });
  }

  tasks.splice(index, 1);
  res.json({
    message: 'Story deleted successfully',
    data: tasks
  });
});


// API trả về chi tiết từng story theo id
app.get('/api/v1/stories/:id', (req, res) => {
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
