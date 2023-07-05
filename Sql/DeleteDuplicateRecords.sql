-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
  
CREATE TABLE Employee 
( 
    [ID] IDENTITY (1,1),
    [FirstName] Varchar(100), 
    [LastName] Varchar(100), 
    [Country] Varchar(100)
);
    
Insert into Employee ([ID], [FirstName],[LastName],[Country]) values(1, 'Raj','Gupta','India'),(2, 'Raj','Gupta','India'),
                                (3, 'Mohan','Kumar','USA'),
                                (4, 'James','Barry','UK'),
                                (5, 'James','Barry','UK'),
                                (6, 'James','Barry','UK');
 
 
SELECT *, COUNT(*) FROM Employee GROUP BY FirstName, LastName, Country HAVING COUNT(*)>1 
UNION
SELECT *, COUNT(*) FROM Employee GROUP BY FirstName, LastName, Country HAVING COUNT(*)=1 