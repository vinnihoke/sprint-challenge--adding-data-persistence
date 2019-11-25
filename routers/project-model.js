const db = require('../data/db-config.js');

// Operational
const find = () => {
	return db('projects')
}

// Operational
const findById = id => {
	return db('projects').where({ id })
}

// Operational
const add = project => {
	return db('projects').insert(project).then(projects => {
		return findById(projects[0])
	})
}

// Operational
const update = (id, changes) => {
	return db('projects').where({ id }).update(changes);
}

// Operational
const remove = id => {
	return db('projects').where({ id }).del()
}

module.exports = {
	find, findById, add, update, remove
}