import { Router } from 'express';
const router = Router();

import { 
    getProjects, getOneProject, createProject, updateProject, deleteProject 
} from './../controllers/project.controller';

// /api/projects/
router.get('/', getProjects);
router.post('/', createProject);


// /api/projects/:projectId
router.get('/:projectId', getOneProject);
router.put('/:projectId', updateProject);
router.delete('/:projectId', deleteProject);


export default router;