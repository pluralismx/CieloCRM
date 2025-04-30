<template>
  <div class="flex items-center justify-center bg-primary h-[100dvh]">
    <!-- Login box -->
    <div class="bg-shadows p-8 rounded-xl flex flex-col shadow-lg w-[300px]">
      <h1 class="text-basic text-center text-4xl mb-8">Cielo CRM</h1>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-basic">{{ $t('login.email')}}</label>
        <input
            v-model="data.email"
            class="bg-basic rounded-sm p-2"
        />
        <span class="text-warn text-sm">{{ $t('login.error')}}</span>
      </div>
      <div class="flex flex-col gap-2 mb-10">
        <label class="text-basic">{{ $t('login.password')}}</label>
        <input
            v-model="data.password"
            class="bg-basic rounded-sm p-2"
        />
        <span class="text-warn text-sm">{{ $t('login.error')}}</span>
      </div>
      <button
          @click="login()"
          class="bg-primary p-2 rounded-sm text-basic hover:cursor-pointer"
      >
        {{ $t('login.login')}}
      </button>
    </div>
  </div>
</template>
<script>
import api from '@/services/axios.js'
export default {
  name: 'Auth',
  data() {
    return {
      data: {
        "email": "gerardotopete7@gmail.com",
        "password": "12345678",
      }
    }
  },
  methods: {
    login: async function () {
      // Obtener los datos
      let data = JSON.stringify(this.data);

      // Iniciar sesion
      try{
        const response =  await api.post('/login', data)
        if(response.data.status === "success"){
          this.$emit('login-success');
        }
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>