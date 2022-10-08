// require('dotenv').config();
// const {DATABASE_URL} = process.env;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "postgresql://jswens:v2_3ug9n_Y2VN2f7pnGfU5tKW8uf4Lgi@db.bit.io/jswens/test",
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;