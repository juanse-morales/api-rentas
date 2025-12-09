const { Sequelize } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectModule: dbConfig.dialectModule,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true // Enable soft deletes
    },
    timezone: '+05:00' // UTC timezone
  }
);

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    
    // Sync database (use carefully in production)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate
      console.log('✅ Database synchronized.');
    }
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

module.exports = {
  sequelize,
  testConnection,
  Sequelize
};