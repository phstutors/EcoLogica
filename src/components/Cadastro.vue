<template>
<div class="app">
  <div class="content">
    
    <section class="left-side">
      <div class="agroup-content">
        <img src="public/Fundo1.png" alt="" srcset="">
        <h2>EcoLogica</h2>
        <p>Todos por um planeta mais sustentavel!</p>
      </div>
    </section>


    <!-- Right side of the page-->
    <div class="right-side">
    <img src="/public/C.png">
    <p>Por favor, insira seus <br/>dados para se cadastrar.</p>
    <div id="inputs-group">
      <div class="mb-3 row">
          <div class="col-sm-10">
              <label for="staticEmail">Digite seu Nome:</label>
              <input type="text" v-model="email" class="form-control" id="staticEmail" placeholder="Meu Nome">          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-10">
              <label for="staticEmail">Digite seu Email:</label>
              <input type="text" v-model="email" class="form-control" id="staticEmail" placeholder="email@example.com">
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-10">
          <label for="staticPassword">Escolha sua Senha:</label>
          <input type="password" v-model="senha" class="form-control" id="inputPassword" placeholder="********">
        </div>
        
      </div>
      <button type="button" @click="logar()" class="btn btn-primary btn-lg">Cadastrar</button>
      <p style="width: 100%; text-align: right;">Já é cadastrado? <a @click="cadastrar()">Clique Aqui para logar!</a></p>
    </div>
    </div>
  


  </div>
   </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  margin:0;
  display: flex!important;
  justify-items: center!important;
  justify-content: center!important;
  align-items: center!important;
}
.teste {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1F4FF;
  font-family: 'Red Hat Display', sans-serif!important;
}
.right-side p{
font-size: 15pt;
}
h2,p{
color: #1E2F40!important;
}
.content {
  height: 80%;
  width: 80%;
  display: flex;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.error{
  border: 1px solid red!important;
}
.left-side {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  flex-direction: column;
  background-color: antiquewhite;
}
.right-side {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border-left: 0.1rem solid black;
  background-color: antiquewhite;
  
}
.agroup-content img{
  width: 420px;
  animation: pulse 8s ease-in-out infinite;
}
.agroup-content h2{
  font-family: 'Red Hat Display', sans-serif;
  font-size: 50pt;
  margin-top: -7%;
}
.agroup-content p{
  font-family: 'Red Hat Display', sans-serif;
  font-size: 20pt;
}
.col-sm-10{
  width: 100%;
}
.right-side img{
width: 270px;
animation: flutuar 2s ease-in-out infinite;
}
#inputs-group{
width: 100%!important;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
}
.col-sm-10input{
  
  width: 70%;
}
.mb-3{
width: 100%!important;
}
button{
background-color: #4AB7AA;
border: none;
color: #fff;
padding-left: 20px!important;
padding-right: 20px!important;
box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
}
button:hover{
background-color: #1A314B!important;
animation: pulseAnimation 2s ease-in-out infinite!important;
}
@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes flutuar {
0% { transform: translateY(0); }
50% { transform: translateY(-20px); }
100% { transform: translateY(0); }
}
@keyframes pulse {
0% { transform: scale(1); }
50% { transform: scale(1.1); }
100% { transform: scale(1); }
}
@media (max-width: 768px) {
  .agroup-content img {
    width: 280px;
  }
}
/* CSS for mobile devices */
@media (max-width: 490px) {
  .left-side {
   display: none;
  }
  .right-side{
    width: 100%;
  }
  .right-side img{
    width: 180px;
  }
}
</style>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
     logar() {
      const valor1 = this.email;
      const valor2 = this.senha;
      if (valor1 == "admin@gmail.com" && valor2 == "root") {
        this.$router.push("/home");
      } else {
        alert("Você não tem acesso, tente se cadastrar!")
      }
     
    },
    cadastrar(){
      this.$router.push("/")
    },


  },
};
</script>