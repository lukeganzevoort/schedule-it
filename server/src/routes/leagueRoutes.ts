import { Router } from "express";
import {
  getLeagues,
  getLeague,
  createLeague,
  updateLeague,
  deleteLeague,
} from "../controllers/leagueController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// All league routes require authentication
router.use(authMiddleware);

router.get("/", getLeagues);
router.get("/:id", getLeague);
router.post("/", createLeague);
router.put("/:id", updateLeague);
router.delete("/:id", deleteLeague);

export default router;
