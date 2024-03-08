create table test(
id int,
firstname varchar(20),
lastName varchar(30),
gender varchar(20),
email varchar(20),
mobileNo int
);

-- describe test;
-- desc test;

insert into test (id, firstname, lastName, gender, email, mobileNo) values (1, 'Girish', 'Gondaliya', 'Male', 'girish@test.in', 123456789);


insert into test (id, firstname, lastName, gender, email, mobileNo) values
(2, 'Vijay', "Solanki", "Male", "vijay@test.in", 123456789),
(3, 'Monika', "kathiriya", "Female", "monika@test.in", 123456789),
(4, 'Srushti', "Sojitra", "Female", "srushti@test.in", 123456789),  
(5, 'Vijay', "Dankhara", "Male", "vijay123@test.in", 123456789);

insert into test values (6, 'Jenil', 'kakadiya', 'Male', 'jenil@test.in', 123456789);
-- skip some column data
insert into test (id, firstname, lastName, gender, mobileNo) values
(7, 'Krish', "Ranghani", "Male", 123456789),
(8, 'Mahendra', "Purohit", "Male", 123456789);

insert into test values
(9, 'Vrishabh', "Jogani", "Male", 123456789);
-- select * from test;