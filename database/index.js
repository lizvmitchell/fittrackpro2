const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/fitness-tracker-a';
const Sequelize = require('Sequelize');
const db = new Sequelize(databaseUrl, {
  logging: false
});

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
