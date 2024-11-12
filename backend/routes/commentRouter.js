import express from 'express';
import controller from '../controllers/Comments.js';

const router = express.Router();
// rutas de la API
router.route('/comments/')
  .get(controller.getAllComments)
  .post(controller.createComment);

router.route('/comments/:id')
  .get(controller.getComment)
  .delete(controller.deleteComment);

export default router;