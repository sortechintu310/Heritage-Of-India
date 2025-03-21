import db from '../config/db.js';

const getAllBlogs = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM blogs');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get a heritage site by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Blog site not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getBlogByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('SELECT * FROM blogs WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).send('Blog site not found');
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const postBlog = async (req, res) => {
    const { title, content, image_url, user_id } = req.body;
    
    try {
        const result = await db.query('INSERT INTO blogs (title, content, image_url, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [title, content, image_url, user_id]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

const deleteBlog = async(req,res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM blogs WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}



export { getAllBlogs, getBlogById,getBlogByUserId,postBlog,deleteBlog };
