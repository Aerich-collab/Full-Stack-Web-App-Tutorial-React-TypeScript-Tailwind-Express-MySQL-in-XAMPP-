import mysql from "mysql2";
class Database {
private static instance: mysql.Connection; // shared connection
private constructor() {} // prevent new Database()
public static getInstance(): mysql.Connection {
if (!Database.instance) {
Database.instance = mysql.createConnection({
host: "localhost",
user: "root", // XAMPP default
password: "", // XAMPP default is empty
database: "testdb"
});
Database.instance.connect((err) => {
if (err) {
console.error("❌ Database connection failed:", err);
} else {
console.log("✅ Connected to MySQL (XAMPP)");
}
});
}
return Database.instance;
}
}
export default Database;