<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Patient Referral Form</h6>
        <!-- <button
        v-on:click="patientCheckIn"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Close
        </button> -->
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
              disabled
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
              disabled
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
              v-model="form.treated_by"
                type="hidden"
              />
              <input
              v-model="form.patient_id"
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
                Referred From Department
              </label>
               <select 
               disabled
               v-model="form.referred_from"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                <!-- <option value="null" disabled selected hidden>Select Department ..</option> -->
                 <option v-for="dpt in depts" :key="dpt.id" :value="dpt.id">{{ dpt.name }}</option>
                </select>
            </div>
          </div>
        
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          To be competed by the Doctor 
        </h6>
        <div class="flex flex-wrap">
         <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Referred To Department
              </label>
               <select 
               v-model="form.referral_to"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                <option value="null" disabled selected hidden>Select Department ..</option>
                 <option v-for="dpt in departments" :key="dpt.id" :value="dpt.id">{{ dpt.name }}</option>
                </select>
            </div>
          </div>
        </div>
        <!-- <div class="rounded-t bg-white mb-0 px-6 py-6"> -->
      <div class="text-center flex justify-between">
        <!-- <h6 class="text-blueGray-700 text-xl font-bold">Patient Treatment Form</h6> -->
          <a
              
                href="/main/dashboard"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
              >
               Back
              </a>
        <button
        v-on:click="patientReferral"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Update
        </button>
      <!-- </div> -->
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
      depts:[],

      form:{
        fullname:localStorage.getItem('myPatientName'),
        phone:localStorage.getItem('myPatientPhone'),
        treated_by: localStorage.getItem('id'),
        referred_from:localStorage.getItem('myPatientDept'),
        patient_id: localStorage.getItem('myPatientId'),
        diagnosis_notes: '',
        treatment_note: '',
        referral_to: ''

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
      get('https://server.digitallyfreed.com/api/departments-except-reception-nursing').then(res => {
        console.log('departments',  res.data.departments)
        this.departments = res.data.departments
      })
    },
    getCurrentDepartments(){
      get('https://server.digitallyfreed.com/api/departments-except-reception').then(res => {
        console.log('departments',  res.data.departments)
        this.depts = res.data.departments
      })
    },
    updateReferralStatus(){
      console.log('my patient referral', this.form)
      post('https://server.digitallyfreed.com/api/patient/refer', this.form)
      .then(res => {
        console.log(' patient ref response', res.data.patient)
        // if(res.data.ref){
          
        //   this.$router.push({ path : '/admin/tables' });

        // }

      })
      .catch(error => {
     console.log(error.message)
  })
    },
    patientReferral(){
      this.updateReferralStatus()
      // console.log('my patient referral', this.form)
      post('https://server.digitallyfreed.com/api/patient-referral', this.form)
      .then(res => {
        console.log(' patient ref response', res.data.ref)
        if(res.data.ref){
          
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
     this.getCurrentDepartments()
     
  }
};
</script>

