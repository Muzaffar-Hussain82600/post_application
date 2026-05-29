const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yt:g_Zyi94-PEBcLUZ@yt-complete-backend.xc1nnlb.mongodb.net/myposts", {
            tls: true,
            tlsAllowInvalidCertificates: false,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;