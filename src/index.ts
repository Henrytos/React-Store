import * as express from "express";
import { ProductRouter } from "./routes/product.route";

const app = express();
const port = process.env.PUBLIC_PORT || 8080;

app.use(express.json());

app.use("/product", ProductRouter);

//app.post("/category", async (req: Request, res: Response) => {
//  const categoryInstance = new CategoryClass("eletronicos")
//  const newCategory = await categoryInstance.createCategory()
//  res.json(newCategory)
//})

app.listen(port, () => console.log(`listening on port ${port}`));
