import express from "express";
import LocationsController from "../controllers/locations.js";

const router = express.Router();

router.get("/", LocationsController.getLocations);
router.get("/:locationid", LocationsController.getLocationById);
router.get("/:locationid/events", LocationsController.getLocationEvents);

export default router;
