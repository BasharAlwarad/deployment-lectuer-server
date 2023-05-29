import { Router } from 'express';

const app = Router();

import { getUsers, createUser } from '../controllers/users.js';

app.route('/').get(getUsers).post(createUser);
// app.route('/:id').get(deleteUser);

export default app;
