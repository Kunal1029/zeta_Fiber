import crypto from 'crypto';

const secret = crypto.randomBytes(32).toString('base64');


export default {
    JWT_SECRET : secret,
    EMAIL:"kunal.shivhare0529@gmail.com",
    PASSWORD:"qrewxnjdolqzcgsz",
    Twilio : "AJZSLR84N83BBBUK2B9QZTEV",
    ATLAS_URI: "mongodb+srv://admin:admin123@cluster0.eaoop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

}