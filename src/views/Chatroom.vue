<template>
  <div class="container">
      <ChatNav></ChatNav>
      <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import { watch } from '@vue/runtime-core'
import ChatNav from '../components/ChatNav'
import getUser from "../composables/getUser"
import {useRouter} from "vue-router"

export default {
  components: {
    ChatForm, ChatNav },
  setup(){
      let {user} = getUser();
      let router = useRouter();
      watch(user,()=>{
          if(!user.value){
                router.push('/chat');
          }
          
      })
      return {user,router}
  }

}
</script>

<style>

</style>