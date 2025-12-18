import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// protect all routes
router.use(protect);

// CRUD
router.post("/", createTask);          // POST /api/tasks
router.get("/", getTasks);             // GET  /api/tasks
router.get("/:id", getTaskById);        // GET  /api/tasks/:id
router.put("/:id", updateTask);         // PUT  /api/tasks/:id
router.delete("/:id", deleteTask);      // DELETE /api/tasks/:id

export default router;
