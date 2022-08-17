const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
    database: 'app_nodedb'
})

module.exports = pool;