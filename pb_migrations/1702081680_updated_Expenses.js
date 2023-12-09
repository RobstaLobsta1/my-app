/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu6ivsnkaiyrbc3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zjc6wji",
    "name": "Category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Food",
        "Transportation",
        "Housing",
        "Entertainment",
        "Utilities",
        "Other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu6ivsnkaiyrbc3")

  // remove
  collection.schema.removeField("7zjc6wji")

  return dao.saveCollection(collection)
})
