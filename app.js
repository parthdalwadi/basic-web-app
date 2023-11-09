const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Create an array to store tasks
const tasks = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task); // Add the task to the array
    console.log(`New task: ${task}`);
    res.redirect('/'); // Redirect back to the homepage
});

app.get('/getTasks', (req, res) => {
    res.json(tasks); // Send the list of tasks as JSON
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
