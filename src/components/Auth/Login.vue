<template>
  <form>
    <h2>Iniciar sesión</h2>
    <div>
      <mu-text-field label="Email" labelFloat name="email" v-model="email"/>
    </div>
    <div>
      <mu-text-field label="Contraseña" labelFloat/>
    </div>
    <div>
      <mu-raised-button label="Iniciar" class="demo-raised-button" primary/>
    </div>
    <div>
      <p>Aún no tiene cuenta</p>
      <router-link :to="{ name: 'register' }">Registrese</router-link>
    </div>
  </form>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    validators: {
      email: () => {
        // return Validator.value(value).required().email();
      }
    }
  }
</script>
