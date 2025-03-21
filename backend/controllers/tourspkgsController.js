import db from '../config/db.js';

const getToursPkgs = async (req, res) => {
    try {
        const toursPkgs = await db.query('SELECT * FROM tour_packages');
        res.status(200).json(toursPkgs.rows); 
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const getToursPkgById = async (req, res) => {
    try{
        const {id} = req.params;
        const tourpkg = await db.query('SELECT *FROM tour_packages WHERE id = $1',[id]);
        res.status(200).json(tourpkg.rows);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

export {getToursPkgs, getToursPkgById};