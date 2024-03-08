3.Exercise on retrieving records from a table

a.Find out the names of all the clients.
a.SELECT salesmanname FROM client_master;

b.Retrieve the entire contents of the Client_Master table.
b.SELECT * FROM client_master;

c.Retrieve the list of names, city and the sate of all the clients.
c.SELECT salesmanname, city, cSTATE FROM client_master;

d.List the various products available from the Product_Master table.
d.SELECT Description FROM product_master;

e.List all the clients who are located in Mumbai.
e.SELECT * FROM client_master WHERE city = 'Mumbai';

f.Find the names of salesmen who have a salary equal to Rs.3000.
f.SELECT Name FROM SALESMAN_MASTER WHERE SalAmt = 3000;

4.Exercise on updating records in a table

a.Change the city of ClientNo 'C00005' to 'Bangalore'.
a.UPDATE client_master SET city = 'Bangalore' WHERE CLIENTNO = 'C00005';

b.Change the BalDue of ClientNo 'C00001' to Rs. 1000.
b.UPDATE client_master SET BALDUE = 1000 WHERE CLIENTNO = 'C00001';

c.Change the cost price of "Trousers" to Rs. 950.00.
c.UPDATE product_master SET CostPrice = 950.00 WHERE Description = 'Trousers';

d.Change the city of the salesman to Pune.
d.UPDATE SALESMAN_MASTER SET city = 'pune' WHERE Description = 'mumbai';