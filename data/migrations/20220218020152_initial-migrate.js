
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 64).notNullable()
      tbl.string('project_description', 256)
      tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.string('resource_name', 64).notNullable().unique()
      tbl.string('resource_description', 256)
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.string('task_description', 256).notNullable()
      tbl.integer('task_notes', 256)
      tbl.boolean('task_completed').defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('project_resources', tbl => {
        tbl.increments('project-resources_id')
        tbl.integer('project_id');
        tbl.integer('resource_id');
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')

};
