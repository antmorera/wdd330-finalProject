import productList from "./productList.mjs";
import { getParams, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParams("category");

productList(".product-list", category);
