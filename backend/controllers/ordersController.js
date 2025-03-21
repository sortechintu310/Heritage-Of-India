import db from "../config/db.js";

const postOrder = async (req,res)=>{
    const {userId, pkgId} = req.body;
    try{
        const response = await db.query("INSERT INTO user_orders(user_id, pkg_id) VALUES($1,$2) RETURNING*",[userId,pkgId]);
        res.status(200).json(response.rows);
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

const getOrdersByUserId = async (req,res)=>{
    const {userId} = req.body;
    try{
        const response = await db.query("SELECT user_orders.id AS order_id,user_orders.ordered_at, tour_packages.* FROM user_orders JOIN tour_packages ON user_orders.pkg_id = tour_packages.id WHERE user_orders.user_id = $1;",[userId]);
        res.status(200).json(response.rows);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export{postOrder, getOrdersByUserId};