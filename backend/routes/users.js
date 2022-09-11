const router = require('express').Router();
const User = require('../models/User');

router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can not edit');
  }
});

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can not delete');
  }
});

module.exports = router;
