"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pessoas",
      [
        {
          nome: "João da Silva",
          email: "joao@joao.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Celso Roth",
          email: "celso@celso.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Marcelo Santos",
          email: "marcelo@marcelo.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Maria Ferreira",
          email: "maria@maria.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Luana Maria",
          email: "luana@luana.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Florentina de Jesus",
          email: "florentina@florentina.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Ciclana Pereira",
          email: "ciclana@ciclana.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Beltrano da Silva",
          email: "beltrano@beltrano.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Max Junior",
          email: "max@max.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Renato Macedo",
          email: "renato@renato.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Fernando Torres",
          email: "fernando@fernando.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Daniel Junior",
          email: "daniel@daniel.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Michel da Silva",
          email: "michel@michel.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Enzo",
          email: "enzo@enzo.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Valentina",
          email: "valentina@valentina.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Cristiano Ronaldo",
          email: "cristiano@cristiano.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pessoas", null, {});
  },
};
