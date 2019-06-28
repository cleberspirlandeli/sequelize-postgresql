import express, { json } from 'express';
import morgan from 'morgan'

// Importing Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';


const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;