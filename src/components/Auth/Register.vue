<template>
  <div>
    <h2>Registrese</h2>
    <div>
      <mu-text-field label="Email" labelFloat/>
    </div>
    <div>
      <mu-text-field label="Nombre" labelFloat/>
    </div>
    <div>
      <mu-text-field label="Contraseña" labelFloat/>
    </div>
    <div>
      <mu-text-field label="Repita contraseña" labelFloat/>
    </div>
    <div>
      <mu-raised-button label="Registrase" class="demo-raised-button" primary/>
    </div>
    <div>
      <router-link :to="{ name: 'login' }">Volver he inicar sesión</router-link>
    </div>
  </div>
</template>
