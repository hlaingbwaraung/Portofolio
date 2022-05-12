<template>
  <footer class="text-center text-lg-start">
   <div>
      <div class="container-fluid">
      <div class="container d-flex justify-content-center py-5">
        <i class="sns bi bi-facebook"></i>

        <i class="sns bi bi-youtube"></i>

        <i class="sns bi bi-instagram"></i>

        <i class="sns bi bi-twitter"></i>
      </div>

      <div class="fs-6 text-center text-white p-3">
        Copyright ©2022 All rights reserved | Created with
        <i class="bi bi-balloon-heart"></i> by
        <span>Yaruki.com</span>
      </div>
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
  background-color: black;
}
.sns {
  margin: 10px;
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
i {
  transition: 0.5s;
}
i:hover {
  transform: translateY(-8px);
}
</style>
