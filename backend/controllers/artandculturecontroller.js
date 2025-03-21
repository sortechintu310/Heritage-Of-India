import db from '../config/db.js';

const getAllArts_Culture = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM arts_culture');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getArts_Culture = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM arts_culture WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Art and culture site not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export { getAllArts_Culture,getArts_Culture };
