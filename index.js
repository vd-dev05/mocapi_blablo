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
const storyFile= path.join(__dirname, 'data', 'story.json');

// func read file 
function readOnboarding() {
  return JSON.parse(fs.readFileSync(onbroadingFile, 'utf-8'));
}

function readStories() {
  return JSON.parse(fs.readFileSync(storyFile, 'utf-8'));
}

function readLessons(){
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
  res.json({ message: 'Story deleted successfully' });
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
