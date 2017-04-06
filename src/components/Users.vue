<template>
  <div class="layout">
    <mu-table>
      <mu-thead>
        <mu-tr>
          <mu-th>Correo electrónico</mu-th>
          <mu-th>Nombre</mu-th>
          <mu-th>Apellido</mu-th>
          <mu-th>Nacimiento</mu-th>
        </mu-tr>
      </mu-thead>

      <mu-tbody>
        
        <mu-tr v-for="user in users " :key="user.Id">
          <mu-td>{{ user.email }}</mu-td>
          <mu-td>{{ user.name }}</mu-td>
          <mu-td>{{ user.lastName }}</mu-td>
          <mu-td>{{ user.age }}</mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
     <mu-float-button icon="add" class="float-button" @click="showAdd = true"/>
     <user-form :class="{active: showAdd}" @close="showAdd = false"></user-form>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from '../vuex/store'
  import UserForm from './Partials/AddUser'
  export default {
    name: 'users',
    beforeRouteEnter: (to, from, next) => {
      const query = `
        query AllUsers{
          users{
            id: Id,
            email: Email,
            name: Name,
            lastName: LastName,
            age: Age
          }
        }
      `
      axios.post(
        `http://localhost:1323/api?query=${query}`
      ).then(
        (response) => {
          store.dispatch('setUsers', response.data.data.users)
          next()
        },
        (response) => {
          next(false)
        }
      )
    },
    components: {
      UserForm
    },
    data () {
      return {
        showAdd: false
      }
    },
    computed: {
      users () {
        return this.$store.getters.getUsers
      }
    }
  }
</script>
