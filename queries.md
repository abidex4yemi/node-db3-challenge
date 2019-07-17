# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

*SELECT ProductName, CategoryName FROM Products INNER JOIN Categories ON products.CategoryID = Categories.CategoryID;*

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

*SELECT OrderID, ShipperName from orders JOIN shippers ON orders.ShipperID = shippers.ShipperID AND orders.OrderDate <  "1997-09-01"*

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

*SELECT ProductName, Quantity FROM OrderDetails JOIN Products ON OrderDetails.ProductID = Products.ProductID WHERE OrderDetails.OrderID = 10251;*

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

*SELECT OrderID, CustomerName, LastName FROM orders INNER JOIN Employees ON orders.EmployeeID = Employees.EmployeeID INNER JOIN Customers ON orders.CustomerID = Customers.CustomerID*

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

*SELECT Categories.CategoryName, count(Products.productid) AS Count FROM Categories left JOIN Products ON Categories.CategoryID = Products.CategoryID group by Categories.CategoryName;*

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.