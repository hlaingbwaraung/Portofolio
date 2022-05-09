<template>
  <section id="contact">
    <div class="container">
      <h1 class="title text-center">お問い合わせ</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="contact">
           
            <form class="contactForm" @submit.prevent="sendForm">
              <label>お名前<span>*</span></label>
              <input type="text" v-model="name" required />

              <label>メールアドレス <span>*</span></label>
              <input type="email" v-model="email" required />

              <label>電話番号</label>
              <input type="text" v-model="phnumber" />

              <label>メッセージ <span>*</span></label>
              <textarea rows="2" cols="20" v-model="message"></textarea>
            <div v-if="showDone" class=".text-danger">ご連絡ありがとうございます。</div>
             

              <button>送信</button>
            </form>
           
          </div>
        </div>
        <div class="col-md-6">
          <img class="contactimg" src="../photo/code.gif" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import useCollection from "../composables/useCollection";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    let name = ref("");
    let email = ref("");
    let phnumber = ref("");
    let message = ref("");
    let showDone =ref(false);
    let { error, addDoc } = useCollection("contact");

    let sendForm = async () => {
      

      let contactMsg = {
        name: name.value,
        email: email.value,
        phnumber: phnumber.value,
        message: message.value,
        created_at: timestamp(),
      };
      await addDoc(contactMsg);

      name.value = "";
      email.value = "";
      phnumber.value = "";
      message.value = "";
      showDone.value = true;
      
     
    };
    return { name, email, phnumber, message,error,sendForm,showDone};
  },
};
</script>

<style>
#contact .container {
  width: 100%;
  padding: 1em;
}

#contact .container label {
  font-size: 20px;
  color: #555;
}
.contactimg {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
}
.contactForm {
  padding: 30px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 10px;
}
textarea {
  height: 60px;
}
</style>
