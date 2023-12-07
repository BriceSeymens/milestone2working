const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const os = require('os');
const app = express();

app.use(cors());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'briceseymens',
  host: 'service-postgresql',
  database: 'milestone2bs',
  password: 'supersecret',
  port: 5432, // default PostgreSQL port
});

// Define a route to fetch data from the database
app.get('/', async (req, res) => {
  try {
    // Example query: Select data from a 'users' table
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users'); // Replace 'users' with your table name
    client.release(); // Release the client back to the pool

    // Process the retrieved data
    const users = result.rows; // Extract data rows from the query result
    res.json(users); // Send the retrieved data as JSON response
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error fetching data');
  }
});
// Define route to fetch container
app.get('/containerid', (req, res) => {
  const containerID = os.hostname();

  res.json({ containerID });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
