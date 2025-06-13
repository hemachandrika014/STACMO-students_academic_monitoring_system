const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Student = sequelize.define('Student', {
  rollNo: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  attendance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  performance: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grades: {
    type: DataTypes.STRING,
    allowNull: false
  },
  semesterResults: {
    type: DataTypes.STRING,
    allowNull: false
  },
  previousResults: {
    type: DataTypes.STRING,
    allowNull: false
  },
  backlog: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  parentsName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentsPassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = { sequelize, Student };

