const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(helmet())
server.use(morgan('dev'));
server.use(express.json());
server.use('/api/projects', ProjectRouter); // Many projects
server.use('/api/resources', ResourcesRouter); // Many to many
server.use('/api/projects/:id/tasks', TaskRouter); // Many per project
server.use('/api/projects/:id/resources', ResourcesRouter); // Many per project

module.exports = server