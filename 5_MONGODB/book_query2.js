db.book.find({})

db.book.find({ $and: [{"pages" : {$eq: 384}}, {"year" : 1350}]})

db.book.find({ $or: [ {"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836,1958]}}]})

db.book.find({ $nor: [{"pages" : {$eq: 384}}, {"year" : {$in: [1315, 1836,1958]}}]})

db.book.find({ "pages": {$not: {$lte: 384}} })

db.book.find({"pages":{$in :[ 320,505]}})

db({"pages":{$nin :[ 320,505]}})

db.book.find({"language":{$in :["English"]}})

db.book.find({"country":{$nin :["United Kingdom"]}})

db.book.find({"language":{$in :["Italian"]}})

db.book.find({"country":{$nin :["United Kingdom","France","Argentina"]}})

db.book.find({"year":{$ne : 1315}})

db.book.find({"year":{$gte : 1958}})
