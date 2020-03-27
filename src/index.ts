import express , { Express } from "express"
import cors from "cors"
import compression from "compression"
import routes from "./routes"
const app : Express = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api",routes);


app.listen( 3000 , () => {
    console.log("running");
})