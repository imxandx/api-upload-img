const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@uploadimgcluster.hdsbr.mongodb.net/?retryWrites=true&w=majority&appName=UploadImgCluster`);

  console.log("Conectado com sucesso!");
}

module.exports = main;
