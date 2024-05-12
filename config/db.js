const mongoose = require("mongoose")
const dbURL = "mongodb://localhost:27017/xbox-clone-DB"

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Data base connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDb;