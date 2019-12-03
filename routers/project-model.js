const db = require('../data/db-config.js');

// Operational
const find = () => {
	return db('projects').then( projects => {
		for(let project of projects){
			project.completed === 0 ? project.completed = false : project.completed = true;
		}
		return projects;
	} )
}

// Operational
const findById = id => {
	return db('projects').where({ id }).first().then( project => {
		project.completed === 0 ? project.completed = false : project.completed = true;
		return project;
	});
	// .first() is a method that removes the array.
}

// Operational
const add = project => {
	return db('projects').insert(project).then(projects => {
		return findById(projects[0]);
	})
}

// ! Instead of looking for an ID, you might want to look for something like a Name.

// Operational
const update = (id, changes) => {
	return db('projects').where({ id }).update(changes).then( update => {
		// Conditionally check if the update exists.
		return db('projects');
	});
}

// ! Grab the whole table and return that rather than just the single item, or message. 🖕

// Operational
const remove = id => {
	return db('projects').where({ id }).del().then( removed => {
		// Conditionally check if the update exists.
		return db('projects');
	})
}

module.exports = {
	find, findById, add, update, remove
}

// When you are returning data, make everything as simple as possible. You don't want the front end developer to do any extra work. 