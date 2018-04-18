'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return[
      queryInterface.addColumn(
        'schedules', 
          'start_time', { 
            type: Sequelize.TIME,
            allowNull: false
      }),
      queryInterface.addColumn(
        'schedules',
          'end_time', {
            type: Sequelize.TIME,
            allowNull: false
        }),
      queryInterface.addColumn(
        'clinics',
          'start_time', {
            type: Sequelize.TIME,
            allowNull: false
        }),
      queryInterface.addColumn(
        'clinics',
          'end_time', {
            type: Sequelize.TIME,
            allowNull: false
        })
    ]
  },
  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('schedules', 'start_time'),
      queryInterface.removeColumn('schedules', 'end_time'),
      queryInterface.removeColumn('clinics', 'start_time'),
      queryInterface.removeColumn('clinics', 'end_time'),
      
      ]
    
  }
};

