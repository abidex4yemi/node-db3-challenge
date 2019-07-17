'use strict';

import knexModule from 'knex';
import knexConfig from '../knexfile';

// Get node env if exist or default to development
const env = process.env.NODE_ENV || 'development';

// Initialized knex based on environment variables
const knex = knexModule(knexConfig[env]);

module.exports = knex;
