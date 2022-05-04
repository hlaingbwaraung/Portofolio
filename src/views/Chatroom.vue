<template>
  <div class="container">
      <ChatNav></ChatNav>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import ChatNav from '../components/ChatNav'
import getUser from "../composables/getUser"
import {useRouter} from "vue-router"

export default {
  components: { ChatNav },
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