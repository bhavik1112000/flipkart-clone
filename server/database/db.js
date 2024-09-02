import mongoose from "mongoose"


export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.evxcyiz.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL,{dbName:"ecommerce"})
    console.log("Database connected Successfully")
  } catch (error) {
    console.log('Error while connecting with Database', error.message)
  }
}