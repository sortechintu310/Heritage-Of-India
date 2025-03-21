# Heritage of India Website

## Project Overview
The **Heritage of India** website showcases India's rich cultural and historical heritage. It provides users with details about heritage sites, tours & packages, art & culture, and blogs. Users can register, explore content, and write blogs about their experiences.

## Features
- **Heritage Sites**: Information on India's UNESCO World Heritage Sites and other culturally significant locations.
- **Tours & Packages**: Curated travel options for exploring India’s heritage.
- **Art & Culture**: Insights into Indian traditions, arts, crafts, and festivals.
- **Blogs**: Users can read and write blogs about their cultural experiences.
- **User Authentication**: Sign up, log in.


## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL


## Setup Instructions
### Prerequisites
- Node.js & npm
- PostgreSQL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/heritage-of-india.git
   cd heritage-of-india
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up `.env` file (Backend):
   ```
    DB_USER=
    DB_HOST=
    DB_NAME=indian_tourism
    DB_PASSWORD=
    DB_PORT=

   ```
   (Frontend)
   ```
   VITE_SERVER_URL=
   ```
4. Setup Database Using ./backend/data & ./backend/db/queries.sql folders
    ```
    create database indian_tourism in postgres15
    import queries.sql
    import csv files in particular tables
    ```
5. Start the backend server:
   ```bash
   npm start
   ```
6. Navigate to the frontend folder and start the frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```


## Contribution
Feel free to contribute by creating a pull request.

## License
This project is licensed under the MIT License.

