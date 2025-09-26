import Database from "../db";
const db = Database.getInstance();
export interface User {
id: number;
name: string;
email: string;
}
export const getAllUsers = (callback: (err: any, results?: User[]) => void) => {
db.query("SELECT * FROM users", (err, results) => {
if (err) return callback(err);
callback(null, results as User[]);
});
};