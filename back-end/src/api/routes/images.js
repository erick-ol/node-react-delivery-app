const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/:fileName', (req, res) => {
  const { fileName } = req.params;

  const fileLocation = '../back-end/images';

  res.sendFile(fileName, { root: fileLocation });
});

module.exports = router;