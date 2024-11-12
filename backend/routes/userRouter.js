import express from 'express';
import controller from '../controllers/Users.js';

const router = express.Router();
// rutas de la API
router.route('/users/')
  .get(controller.getAllUsers)
  .post(controller.createUser);

router.route('/users/:id')
  .get(controller.getUser)
  .delete(controller.deleteUser);

export default router;