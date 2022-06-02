<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Patient Check - In Form</h6>
        <button
        v-on:click="patientCheckIn"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Check In
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Patient Info
        </h6>
        <div class="flex flex-wrap">
          
          
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Full Name
              </label>
              <input
              v-model="form.fullname"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone Number:
              </label>
              <input
              v-model="form.phone"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

        </div>

        <!-- <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6> -->
        <div class="flex flex-wrap">
          <!-- <div class="w-full lg:w-12/12 px-4"> -->
            <!-- <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Checked - In By:
              </label> -->
              <input
              v-model="form.checked_in_by"
                type="hidden"
              />
            <!-- </div>
          </div> -->
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Directed To
              </label>
               <select 
               v-model="form.referred_department"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                <option value="null" disabled selected hidden>Select Department ..</option>
                 <option v-for="dpt in departments" :key="dpt.id" :value="dpt.id">{{ dpt.name }}</option>
                </select>
            </div>
          </div>
        
        </div>

      </form>
    </div>
  </div>
</template>
<script>
// import CardTable from "@/components/Cards/CardTable.vue";
import {get,post} from '@/Helpers/api';

export default {
  components: {
    // CardTable,
  },
  data(){
    return{
      loggedInUser:{
        name:'',
        department:'',
        id:''
      },
      departments:[],
      form:{
        fullname:'',
        phone:'',
        checked_in_by: localStorage.getItem('id'),
        referred_department:'',

      },

    }
  },
  methods: {
    getLoggedInUser(){
      this.loggedInUser.name = localStorage.getItem('userName')
      this.loggedInUser.department = localStorage.getItem('department')
      this.loggedInUser.id = localStorage.getItem('id')
      // this.form.checked_in_by = localStorage.getItem('id')

     console.log("logged in person is ", this.form.checked_in_by)

    },
    getDepartments(){
      get('https://server.digitallyfreed.com/api/departments-except-reception').then(res => {
        console.log('departments',  res.data.departments)
        this.departments = res.data.departments
      })
    },
    
    patientCheckIn(){
      console.log('my patient', this.form)
      post('https://server.digitallyfreed.com/api/patient-checkin', this.form)
      .then(res => {
        console.log(' patient reg response', res.data.patient)
        if(res.data.patient){
          
          this.$router.push({ path : '/main/dashboard' });

        }

      })
      .catch(error => {
     console.log(error.message)
  })
    },

  },
  created(){
    this.getLoggedInUser(),
     this.getDepartments()
     
  }
};
</script>

