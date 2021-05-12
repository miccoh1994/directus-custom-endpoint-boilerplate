// require or import in any syntax as long as your module resolution syntax matches your export syntax
// e.g. import { add } from 'date-fns';
// or 
// e.g. const add = require('date-fns/add');
// when using module.exports = function registerEndpoint(...)

export default function registerEndpoint(router, database) {
	router.get('/', (req, res) => {
	 res.send(`Hello World`);
	})
};
