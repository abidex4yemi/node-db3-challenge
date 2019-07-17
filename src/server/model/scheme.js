'use strict';

import create from '../../db/helpers/scheme-model';

module.exports = knex => {
	const models = create({ modelName: 'Scheme', tableName: 'schemes', knex });

	return {
		...models
	};
};
