<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" id="container">
        <h1 class="title text-center">パートナー企業</h1>

        <div class="photobanner">
          <img class="first" src="../photo/1.png" alt="" />
          <img src="../photo/2.png" alt="" />
          <img src="../photo/3.png" alt="" />
          <img src="../photo/4.png" alt="" />
          <img src="../photo/5.png" alt="" />
          <img src="../photo/6.png" alt="" />
          <img src="../photo/1.png" alt="" />
          <img src="../photo/2.png" alt="" />
          <img src="../photo/3.png" alt="" />
          <img src="../photo/4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


#container {
  width: 1400px;
  overflow: hidden;
  margin: 50px auto;
  background: white;
}

.photobanner {
  height: 233px;
  width: 3550px;
}

img {
  display: inline-block;
}

.first {
  animation: bannermove 35.1s linear infinite;
}

@keyframes bannermove {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -2100px;
  }
}
</style>
