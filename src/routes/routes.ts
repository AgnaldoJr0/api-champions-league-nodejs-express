import { Router } from "express";
import * as playerController from "../controller/players-controller";
import * as clubController from "../controller/clubs-controller"

const router = Router();

router.get("/players", playerController.getPlayer);
router.post("/players", playerController.postPlayer);
router.get("/players/:id", playerController.getPlayerById);
router.delete("/players/:id", playerController.deletePlayer);
router.patch("/players/:id", playerController.updatePlayer);

router.get("/clubs", clubController.getClub)
router.post("/clubs", clubController.postClub);
router.get("/clubs/:id", clubController.getClubById);
router.delete("/clubs/:id", clubController.deleteClub);
router.patch("/clubs/:id", clubController.updateClub);

export default router;
