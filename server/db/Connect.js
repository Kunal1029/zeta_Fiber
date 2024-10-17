import mongoose from 'mongoose';

const ConnectDB = async () => {
  
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/login_logout');
        console.log("DB connected");
    } catch (err) {
        console.error(err);
    }
}

export default ConnectDB;
