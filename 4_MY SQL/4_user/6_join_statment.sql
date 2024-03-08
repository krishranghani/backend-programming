use user;

select so.*,cm.name from sales_order so , client_master cm where so.CLIENTNO = cm.CLIENTNO;

select so.*, cm.name from sales_order so inner join client_master cm on so.clientNo = cm.CLIENTNO;

select so.*, cm.name from sales_order so left join client_master cm on so.clientNo = cm.CLIENTNO;

select so.*, cm.name, cm.city from sales_order so right join client_master cm on so.clientNo = cm.CLIENTNO order by cm.city desc;


select sod.*, cm.name, pm.DESCRIPTION from sales_orders_details sod 
inner join product_master pm on pm.ProductNo =sod.ProductNo
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm  on so.ClientNo = cm.CLIENTNO;
