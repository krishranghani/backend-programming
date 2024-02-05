db.Students.insertOne({
        Name: "Krish",
        Surname: "Ranghani",
        Gender: "Male",
        Age: 18,
        Email : "krish@test.in",
        teacher : "girish"
    });
    
    
db.Students.insertMany([    
    {
        Name: "Vijay",
        Surname: "Dankhara",
        Gender: "Male",
        Age: 24,
        Email : "vd21@gmail.com",
        teacher : "vivek"
    },    
    {
        Name: "Jenil",
        Surname: "Kakadiya",
        Gender: "Male",
        Age: 19,
        Email : "jkf@test.in",
        teacher : "girish",
        Subjects :{
        Maths :78,
        Science :93,
        English :60
        }
    },

    {
        Name: "Monika",
        Surname: "Kathiriya",
        Gender: "FeMale",
        Age: 19,
        Email : "mk123@test.in",
        teacher : "nikunj",
        Subjects :{
                Maths :69,
                Science :65,
                English :42
            }
    },
    ]);

db.Students.find()

db.teacher.insertMany([
    {
        name: "girish",
        course: "backend-development"
    },
    {
        name: "vivek",
        course: "frontend-development"
    },
    {
        name: "nikunj",
        course: "UI/UX Design"
    },
    {
        name: "kuldeep",
        course: "Mobile-development"
    }
    ]);
    
db.teacher.find()

// db.teacher.deleteMany({"name": 'kuldeep'});