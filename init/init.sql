CREATE USER 'adminfpoly'@'%' IDENTIFIED WITH mysql_native_password BY '12345';
GRANT ALL PRIVILEGES ON *.* TO 'adminfpoly'@'%';
FLUSH PRIVILEGES;