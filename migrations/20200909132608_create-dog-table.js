exports.up = knex => {
  return knex.schema.createTable("dog", table=> {
      
      table.string("name")
      table.string("breed")
  })
};

exports.down = kenx => {
  return knex.schema.dropTableIfExists()
};
