create table client_master(
CLIENTNO Varchar (6) primary key,
Name Varchar (20)not null,
ADDRESSI Varchar(30),
ADDRESS2 Varchar(30),
city varchar(15),
PINCODE int,
cSTATE Varchar(15),
BALDUE int
);

insert into client_master(CLIENTNO,name,ADDRESSI,ADDRESS2,city,PINCODE,cSTATE,BALDUE)values
("C00001",'Ivan Bayross',"A/13","Worli","Mumbai",400054,"Maharashtra",15000),
("C00002",'Mamta Muzumdar',"78","Nariman","Madras",780001,"TamilNadu",0),
("C00003",'Chhaya Bankar',"p-9","Bandar","Mumbai",400057,"Maharashtra",5000),
("C00004",'meet gosani',"A35","Juhu","Bangalore",560001,"Karnataka",0),
("C00005",'Ashwini Joshi',"A/11","Worli","Mumbai",400060,"Maharashtra",2000),
("C00006",'Hansel Colaco',"A/13","Worli","Mangalore",560050,"Karnataka",0);






-- delete from salesman where CLIENTNO = "C00006";  