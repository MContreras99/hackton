const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
const fs = require('fs'); // Import the 'fs' module to read the file content

const app = express();
const port = 3001;

app.use(cors());

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: '',
  secretAccessKey: ''
});
const textract = new AWS.Textract();

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const fileContent = req.body.fileContent; // Access the file buffer directly
    console.log(fileContent);
    // Call Amazon Textract
    const params = {
      Document: {
        Bytes: fileContent // Pass the file content to Amazon Textract
      },
      FeatureTypes: ['TABLES', 'FORMS', 'LINES'] // Specify the feature types to analyze
    };
    const result = await textract.analyzeDocument(params).promise();
    
    // Extract text from Textract response
    const text = result.Blocks
      .filter(block => block.BlockType === 'LINE')
      .map(block => block.Text)
      .join('\n');

    res.json({ text });
  } catch (error) {
    console.error('Error:', error);
    console.error('Error Type:', error['__type']);
    console.error('Error Message:', error['Message']);
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
