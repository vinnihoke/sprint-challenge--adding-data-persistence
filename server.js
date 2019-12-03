const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const ProjectRouter = require('./routers/project-router.js');
const ResourcesRouter = require('./routers/resources-router.js');
const TaskRouter = require('./routers/task-router.js');

const server = express();

server.use(helmet())
server.use(morgan('dev'));
server.use(express.json());
server.use('/api/projects', ProjectRouter); // Many projects
server.use('/api/resources', ResourcesRouter); // Many to many
server.use('/api/tasks/', TaskRouter); // Many per project

module.exports = server