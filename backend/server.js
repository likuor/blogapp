const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({
    users: ['user1', 'user2', 'user3', 'user4'],
  });
});

app.listen(8080, () => {
  console.log('Server is lstening');
});
