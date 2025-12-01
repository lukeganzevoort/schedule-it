import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import League from "../models/League";

// Get all leagues for current user
export const getLeagues = async (req: AuthRequest, res: Response) => {
  try {
    const leagues = await League.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.json(leagues);
  } catch (error) {
    console.error("Get leagues error:", error);
    res.status(500).json({ message: "Server error while fetching leagues" });
  }
};

// Get a specific league
export const getLeague = async (req: AuthRequest, res: Response) => {
  try {
    const league = await League.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!league) {
      return res.status(404).json({ message: "League not found" });
    }

    res.json(league);
  } catch (error) {
    console.error("Get league error:", error);
    res.status(500).json({ message: "Server error while fetching league" });
  }
};

// Create a new league
export const createLeague = async (req: AuthRequest, res: Response) => {
  try {
    const { name, description, settings } = req.body;

    if (!name) {
      return res.status(400).json({ message: "League name is required" });
    }

    const league = new League({
      name,
      description: description || "",
      userId: req.userId,
      settings: settings || {
        teams: [],
        fields: [],
        referees: [],
      },
      schedule: [],
    });

    await league.save();
    res.status(201).json(league);
  } catch (error) {
    console.error("Create league error:", error);
    res.status(500).json({ message: "Server error while creating league" });
  }
};

// Update a league
export const updateLeague = async (req: AuthRequest, res: Response) => {
  try {
    const { name, description, settings, schedule } = req.body;

    const league = await League.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!league) {
      return res.status(404).json({ message: "League not found" });
    }

    if (name !== undefined) league.name = name;
    if (description !== undefined) league.description = description;
    if (settings !== undefined) league.settings = settings;
    if (schedule !== undefined) league.schedule = schedule;

    await league.save();
    res.json(league);
  } catch (error) {
    console.error("Update league error:", error);
    res.status(500).json({ message: "Server error while updating league" });
  }
};

// Delete a league
export const deleteLeague = async (req: AuthRequest, res: Response) => {
  try {
    const league = await League.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!league) {
      return res.status(404).json({ message: "League not found" });
    }

    res.json({ message: "League deleted successfully" });
  } catch (error) {
    console.error("Delete league error:", error);
    res.status(500).json({ message: "Server error while deleting league" });
  }
};
