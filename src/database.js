import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI_PRODUCTION, {
            tls: true,
            serverSelectionTimeoutMS: 10000,
        })
        console.log(`Database connected: ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connection