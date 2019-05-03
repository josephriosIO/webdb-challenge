const db = require("../dbConfig.js");
const actionDb = require("./actionModels");

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProject(ids[0]);
    });
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function get() {
  return db("projects");
}

function update(project, id) {
  return db("projects")
    .where({ id })
    .update(project)
    .then(ids => {
      return get(ids)
        .where({ id })
        .first();
    });
}

const getById = async id => {
  const getProject = await get()
    .where({ id })
    .first();
  const actions = await actionDb
    .getActions()
    .where({ project_id: id })
    .select(
      "actions.id",
      "actions.description",
      "actions.notes",
      "actions.completed"
    );
  return {
    ...getProject,
    actions
  };
};

module.exports = {
  insert,
  getById,
  update,
  get
};
