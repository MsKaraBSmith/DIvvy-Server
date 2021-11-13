const { Sequelize } = require("sequelize");

// const db = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
// })

const db = new Sequelize(
  process.env.DATABASE_URL || 
  `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/divvy`, 
{
dialect: 'postgres',
dialectOptions: {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  }
}
})

module.exports = db;
