import { products } from "./constant/constant.js"
import Product from "./model/productSchema.js"

const defaultData = async () => {
  try {
    await Product.insertMany(products)
    console.log("Data imported successfully")
  } catch (error) {
    console.log("Error while importing default data",error.message)
  }
}

export default defaultData