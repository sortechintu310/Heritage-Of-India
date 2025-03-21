import db from '../config/db.js';

const getAllHeritages = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM heritage_sites');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get a heritage site by ID
const getHeritageById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM heritage_sites WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Heritage site not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export { getAllHeritages, getHeritageById };
