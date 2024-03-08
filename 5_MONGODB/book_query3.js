//  $match

// db.book.find( {"pages" : {$lte:209}})
// db.book.aggregate([
// { $match: {"pages" : {$lte:209}, "language": "English" } }
//  ])

// $project

// db.book.find({}, {author:1, country:1, pages:1, title:1, _id:0})
// db.book.find({}).projection({author:1, country:1, pages:1, title:1, _id:0})
// db.book.find({"pages" : {$lte:209}}).select({author:1, country:1, pages:1, title:1, _id:0})
// db.book.aggregate([
//     { $match: {"pages" : {$lte: 209}, "language" : "English" }},
//     {$project: {author:1, pages:1}}
// ])

// $limit

// db.book.find().limit(12)
// db.book.aggregate([{ $match: {"pages" : {$lte:209}} }, {$project: {author:1, pages:1}},
// { $limit: 15 }
// ])

// $skip

// db.book.find().select({author:1, country:1, pages:1,}).skip(50).limit(10)
// db.book.aggregate([
//      {$skip: 5}
//      ])

// $count

// db.book.find({"pages" : {$lte: 209}}).count()
// db.book.aggregate([
//     { $match: {"pages" : {$lte:209}}},
//     {$count: "Total count"}
//     ])

// $sort

// db.book.find({"pages" : {$lte: 209}}).sort({pages:-1 , author:1 })
// db.book.aggregate([
//      {$sort: {author :1} }   
//     ])




