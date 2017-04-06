<template>
  <div class="add-forms">
    <div>
      <h2>Usuario</h2>
      <div class="content">
        <mu-text-field :fullWidth=true label="Nombre" labelFloat name="email"/>
        <mu-text-field :fullWidth=true label="Apellido" labelFloat name="email"/>
        <mu-text-field :fullWidth=true label="Email" labelFloat name="email"/>
        <mu-text-field :fullWidth=true label="Fecha de Nacimiento" labelFloat name="email"/>
        <mu-raised-button label="Guardar" class="demo-raised-button" primary/>
        <mu-raised-button label="Cerrar" class="demo-raised-button" primary @click="close()"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>
