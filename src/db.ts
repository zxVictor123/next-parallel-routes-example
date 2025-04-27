import { JSONFilePreset } from "lowdb/node";
import { postsArray } from "./type";

const defalultData: {posts: postsArray} = {posts: []}
const db = await JSONFilePreset('db.json',defalultData)

export default db