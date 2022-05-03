<template>
  <div class="container">
   <Signup></Signup>
   <Login></Login>
  </div>
  
</template>

<script>
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },

}
</script>

<style>
.container {
    width: 90%;
    max-width: 960px;
    margin: 80px auto;
    border-radius: 20px;
    text-align: center;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background: white;
    padding: 20px 0;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .error {
    color: #ff3f80;
    font-size: 14px;
  }
 
</style>