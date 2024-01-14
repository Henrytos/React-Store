import * as express from "express";
import { ProductRouter } from "./routes/product.route";
import { CategoryRouter } from "./routes/category.route";

const app = express();
const port = process.env.PUBLIC_PORT || 8080;

app.use(express.json());

app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
