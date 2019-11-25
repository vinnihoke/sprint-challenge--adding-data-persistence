const db = require('../data/db-config.js');

const find = () => {
	return db('projects')
}

module.exports = {
	find
}