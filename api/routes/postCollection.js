var express = require('express');
var router = express.Router();
const admin = require('../firebase');

let db = admin.firestore();
let collection = db.collection('posts');


router.get('/', async function (req, res, next) {
  //This allows : sorting, ordering, offsetting, limiting , and lastLimit

  var { whereFieldPath, orderFieldPath = 'updated_time',
    opStr = '=', dirStr = 'desc', whereValue,
    limit = '5', limitLast = Number(limit) - 0, offset = 0, type = 'obj' } = req.query;
  opStr = (opStr == 'eq') ? '=' : (opStr == 'leq') ? '<=' : (opStr == 'geq') ? '>=' : (opStr == 'greater') ? '>' : (opStr == 'less') ? '<' : '=';
  limit = Number(limit);
  offset = Number(offset);
  limitLast = Number(limitLast);
  console.log({ limit, limitLast, offset, dirStr, orderFieldPath, type });

  let obj = (type == 'array') ? [] : {};

  var query = (whereFieldPath && opStr && whereValue) ?
    collection.offset(offset).where(whereFieldPath, opStr, whereValue) :
    collection.offset(offset);

  var querySnap = await query
    .orderBy(orderFieldPath, dirStr)
    .limit(limit)
    .limitToLast(limitLast)
    .get();

  querySnap.forEach(doc => {
    if (type == 'array') obj.push(doc.id);
    else obj[doc.id] = doc.data();
  });
  res.send(obj);
});

module.exports = router;