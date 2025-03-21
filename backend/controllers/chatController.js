import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

export const chatController = async (req, res) => {
    console.log(req.body)
  const langflowId = process.env.LANGFLOW_ID;
  const flowId = process.env.FLOW_ID;
  const authToken = process.env.LANGFLOW_AUTH_TOKEN;
    const payload = {
    "input_value": req.body,
    "output_type": "chat",
    "input_type": "chat",
    }
  if (!req.body) {
    return res.status(400).json({ error: 'inputValue is required.' });
  }

  const apiUrl = `https://api.langflow.astra.datastax.com/lf/${langflowId}/api/v1/run/${flowId}?stream=false`;

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error communicating with Langflow API:', error);
    res.status(500).json({ error: 'Failed to communicate with Langflow API.' });
  }
};
