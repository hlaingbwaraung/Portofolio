import { ref } from "vue";
import { db } from "../firebase/config"
let getPosts = () => {
    let posts = ref([]);
    let error = ref("");
    let load = async() => {
        try {
            let res = await db.collection("posts").get()
            console.log(res);
        } catch (err) {
            // console.log(err.message);
            error.value = err.message;
        }
    }
    return { posts, error, load };
}
export default getPosts;