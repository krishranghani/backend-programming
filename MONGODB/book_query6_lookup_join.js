db.Students.aggregate([
    {
        $lookup: {
              from: "teacher",
              localField: "teacher",
              foreignField: "name",
              as: "teacher"
             }
    }
    ])
    
    // db.Students.aggregate([
    // {
    //     $lookup: {
    //           from: "teacher",
    //           localField: "teacher",
    //           foreignField: "name",
    //           as: "teacher"
    //          }
    // },
    // {$unwind: "$teacher"}
    // ])
    