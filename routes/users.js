import { Router } from 'express';

const app = Router();

import { getUsers, createUser, deletedOneUser } from '../controllers/users.js';

app.route('/').get(getUsers).post(createUser);
app.route('/:id').delete(deletedOneUser);

export default app;
