const db = require('../data/db-config.js');


const find = () => {
	return db('tasks')
}

module.exports = {
	find
}