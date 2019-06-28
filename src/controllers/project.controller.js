import Project from './../models/Projects'


export async function getProjects(req, res) {

    try {
        const projects = await Project.findAll();

        res.status(200).json({
            data: projects
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: e.message
        });
    }

}

export async function getOneProject(req, res) {

    const { projectId } = req.params;

    try {
        const project = await Project.findOne({
            where: {
                id: projectId
            }
        });

        res.status(200).json({
            data: project
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: e.message
        });
    }

}

export async function createProject(req, res) {

    const { name, priority, description, deliverydate } = req.body;

    try {
        const newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });

        if (newProject) {
            res.status(201).json({
                message: 'Project created successfully',
                data: newProject
            });
        }

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: e.message
        });
    }

}

export async function updateProject(req, res) {

    const { projectId } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    try {

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id: projectId
            }
        });

        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            });
        } 

        res.status(200).json({
            message: 'Project updated successfully',
            data: projects
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: e.message
        });
    }

}

export async function deleteProject(req, res) {

    const { projectId } = req.params;

    try {

        const deleteRowCount = await Project.destroy({
            where: {
                id: projectId
            }
        });

        res.status(200).json({
            message: 'Project deleted succesfully',
            count: deleteRowCount
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: e.message
        });
    }

}