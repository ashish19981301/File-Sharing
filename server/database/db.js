import mongoose from "mongoose";

const DBConnection = async() => {
    const DB_URL = `mongodb://ashish:ashish1301@ac-hwurrmg-shard-00-00.71ovt42.mongodb.net:27017,ac-hwurrmg-shard-00-01.71ovt42.mongodb.net:27017,ac-hwurrmg-shard-00-02.71ovt42.mongodb.net:27017/?ssl=true&replicaSet=atlas-q7as89-shard-0&authSource=admin&retryWrites=true&w=majority&appName=File-Sharing`;
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
export default DBConnection;