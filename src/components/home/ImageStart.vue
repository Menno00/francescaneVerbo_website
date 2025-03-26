<template>
    <div class="image-container">
        <v-img src="@/assets/images/home/home.jpg" >
            <div class="">
                <v-img src="@/assets/images/home/logo_missionario.png" class="logo mt-5" />
                <h1 class="title text-center">Rendersi utili, e' quello che Dio vuole da noi.</h1>
            </div>
        </v-img>
    </div>
</template>


<style scoped>
.logo {
  height: 150px;
}

.image-container {
  position: relative;
  top: 0px;
  z-index: 0;
}

.title {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #81312F;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 50px;
  font-family: "oooh baby", "oooh baby local", serif;
  padding: 10px;
  width: 90%;
  max-width: 800px;
  text-align: center;
}



/* Small devices (landscape phones) */
@media screen and (max-width: 768px) {
  .title {
    font-size: 35px;
  }
}

/* Extra small devices (portrait phones) */
@media screen and (max-width: 576px) {
  .title {
    font-size: 30px;
    top: 65%;
  }
  .logo {
    height: 100px;
  }
}

/* Very small devices */
@media screen and (max-width: 410px) {
  .title {
    font-size: 20px;
    top: 70%;
  }
  .logo {
    height: 70px;
  }
}
</style>