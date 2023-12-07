/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iu6ivsnkaiyrbc3",
    "created": "2023-12-07 06:29:51.894Z",
    "updated": "2023-12-07 06:29:51.894Z",
    "name": "Expenses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qkuujxrk",
        "name": "expense_name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "a831sxpm",
        "name": "expense_amount",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
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
  const collection = dao.findCollectionByNameOrId("iu6ivsnkaiyrbc3");

  return dao.deleteCollection(collection);
})
