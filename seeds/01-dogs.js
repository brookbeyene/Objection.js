
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('dog').del()
    .then(()=> {
      return knex('dog').insert([
        {
          name: "Bixby",
          breed: "Chow"
        },
        {
          name: "Mesa",
          breed: "Jack Rascal"
        },
        {
          name: "Harmony",
          breed: "Piggy"
        }
        
      ]);
    });
};
