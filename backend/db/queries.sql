-- Drop tables if they exist
DROP TABLE IF EXISTS users, blogs, heritage_sites, tour_packages, arts_culture, comments, likes CASCADE;

-- Table: users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: blogs
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT DEFAULT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: heritage_sites
CREATE TABLE heritage_sites (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url TEXT DEFAULT NULL,
  category VARCHAR(100) DEFAULT 'General',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: tour_packages
CREATE TABLE tour_packages (
  id SERIAL PRIMARY KEY,
  package_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  duration_days INT NOT NULL,
  image_url TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: arts_culture
CREATE TABLE arts_culture (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: comments (for user comments on blogs)
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  blog_id INT NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: likes (for user likes on blogs)
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  blog_id INT NOT NULL REFERENCES blogs(id) ON DELETE CASCADE,
  liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, blog_id) -- Ensure a user can only like a blog once
);

-- Table: User Orders
CREATE TABLE user_orders(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	pkg_id INT REFERENCES tour_packages(id) ON DELETE CASCADE,
	members INT,
	travel_date 
)