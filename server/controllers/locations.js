import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM locations");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await pool.query("SELECT * FROM locations WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getLocationEvents = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await pool.query(
      "SELECT * FROM events WHERE location_id = $1",
      [id]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getLocations,
  getLocationById,
  getLocationEvents,
};
