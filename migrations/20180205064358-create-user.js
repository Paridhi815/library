

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    author: {
      type: Sequelize.STRING,
    },
    bookName: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.NUMBER,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
