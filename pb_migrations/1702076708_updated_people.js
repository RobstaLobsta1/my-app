/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ashwfm2snd70vl4")

  // remove
  collection.schema.removeField("yupflhw8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "63my5eat",
    "name": "First",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "joblg7tn",
    "name": "Email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ashwfm2snd70vl4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yupflhw8",
    "name": "data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("63my5eat")

  // remove
  collection.schema.removeField("joblg7tn")

  return dao.saveCollection(collection)
})
