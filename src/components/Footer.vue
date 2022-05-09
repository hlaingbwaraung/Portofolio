<template>

    <footer class="text-center text-lg-start">
        <div class="container-fluid">
      <div class="container d-flex justify-content-center py-5">
        <button type="button" class="btn btn-lg btn-floating mx-2">
          <i class="bi bi-facebook"></i>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2">
          <i class="bi bi-youtube"></i>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2">
          <i class="bi bi-instagram"></i>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2">
          <i class="bi bi-twitter"></i>
        </button>
      </div>

      <div class="fs-6 text-center text-white p-3">
        Copyright ©2022 All rights reserved | Created with
        <i class="bi bi-balloon-heart"></i> by
        <span>Yaruki.com</span>
      </div>
       </div>
    </footer>
 
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  position: relative;
  bottom: 0;
  background-color: black;
}
button {
  padding: 6px 9px;
  text-decoration: none !important;
  background-color: transparent !important;
  border-radius: 50%;
  border: 1px solid#a3de83;
}
i,
span {
  color: #a3de83;
}
i:hover {
  color: white;
}
button {
  transition: 0.5s;
}
button:hover {
  transform: translateY(-8px);
}
</style>
