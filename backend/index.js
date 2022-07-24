const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const app = express();
const productData = require('./productData');
const routes = require('./routes/products.routes')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const Product = db.product;

db.mongoose
  .connect(`mongodb+srv://MagnusMirza:${dbConfig.PASSWORD}@cluster0.uiq7w.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    //initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get('/test', (req, res) => {
  res.json({ message: "Up and Running" });
})

routes.getProduct(app)
routes.postOrder(app)

const PORT = process.env.PORT || 8087;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

(function createInitialProducts() {
  Product.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {

      productData.forEach((product) => {
        new Product({
          title: product.title,
          price: product.price,
          description: product.description,
          options: product.options,
          sale: product.sale,
          tags: product.tags,
        }).save(err => {
          if(err){
            console.log('error', err)
          }
          console.log('added new Product')
        })

      })

    }
  })
})();
