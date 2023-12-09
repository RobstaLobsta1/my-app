/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ashwfm2snd70vl4",
    "created": "2023-12-08 21:59:54.026Z",
    "updated": "2023-12-08 21:59:54.026Z",
    "name": "people",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yupflhw8",
        "name": "data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ashwfm2snd70vl4");

  return dao.deleteCollection(collection);
})
