const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/fitness-tracker-a';
const Sequelize = require('sequelize');
const db = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }, logging: false});

const Workout = db.define('workout', {
  name: Sequelize.STRING,
  date: Sequelize.DATE
})

const Exercise = db.define('exercise', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN
})

Workout.hasMany(Exercise);
Exercise.belongsTo(Workout);

module.exports = {
  db,
  Workout,
  Exercise
}
