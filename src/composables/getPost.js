import { db } from "@/firebase/config";

const { ref } = require("vue");

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");

    let load = async() => {
        // await new Promise((resolve, reject) => {
        //     // resolve();
        //     setTimeout(resolve, 1000);
        // })
        try {
            let doc = await db.collection("posts").doc(id).get()
            post.value = { id: doc.id, ...doc.data() }
        } catch (err) {
            error.value = err.message;
        }
    }
    return { post, error, load };
}
export default getPost;