<template>
  <mu-drawer :open="open" :docked="docked">
    <div class="welcome">
      <h1>Only play</h1>
      <mu-row gutter>
        <mu-col width="30" desktop="30">
          <img src="../../../static/images/unknown_user.png" alt="">
        </mu-col>
        <mu-col width="70" desktop="70">
          <div>
            {{ user.name }}
          </div>
          <small>Administrador</small>
        </mu-col>
      </mu-row>
    </div>

    <mu-list>
      <router-link 
        v-for="item in menu_items"
        :to="{ path: item.path }" 
        :key="item.name">
        <mu-list-item :title="item.name">
          <mu-icon slot="left" 
          :value="item.icon"/>
        </mu-list-item>
      </router-link>
    </mu-list>
  </mu-drawer>
</template>
<script>
  export default {
    data () {
      return {
        open: true,
        docked: true,
        menu_items: [
          {
            name: 'Usuarios',
            path: '/users',
            icon: 'store'
          },
          {
            name: 'Opcion 1',
            path: '/',
            icon: 'flag'
          },
          {
            name: 'Opcion 2',
            path: '/',
            icon: 'collections'
          },
          {
            name: 'Opcion 3',
            path: '/',
            icon: 'group'
          },
          {
            name: 'Opcion 4',
            path: '/',
            icon: 'event'
          }
        ],
        user: {
          name: 'Aníbal Jorquera'
        }
      }
    }
  }
</script>
