<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Patient Catalogue
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <vue-good-table
        :columns="columns"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table'
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records'
        }"
        styleClass="tableOne vgt-table"
        :rows="rows"
      >
        <!-- <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'img'">
            <img
              class="rounded"
              :src="props.row.img"
              style="width:50px ; height:50px"
              alt="corrupted img"
            />
          </span>
        </template> -->
      </vue-good-table>
   </div>
  </div>
</template>

<script>
// import { VueGoodTable } from 'vue-good-table';
import {get,post} from '@/Helpers/api';



export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Filter Table"
  },
  // add to component
// components: {
//   VueGoodTable,
// },
  data() {
    return {
      columns: [
        {
          label: "Name ",
          field: "name",
          width: "150px",
          thClass: "gull-th-class"
        },
        {
          label: "Phone",
          field: "phone",
          html: true
        },
        {
          label: "Check In At",
          field: "created_at",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "MMM Do yy"
        },
        {
          label: "Checked In By",
          field: "checked_in_by",
          
        },
        {
          label: "Directed To",
          field: "referred_to",
          
        }
      ],
     rows:[]
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    },
    getPatients(){
         get('https://server.digitallyfreed.com/api/patients').then(res => {
        console.log('patients',  res.data.patients)
        this.rows = res.data.patients
      })
    },
    patientCheckIn(){
      console.log('my patient', this.form)
      post('https://server.digitallyfreed.com/api/patient-checkin', this.form)
      .then(res => {
        console.log(' patient reg response', res.data.patient)
        if(res.data.user){
          
          this.$router.push({ path : '/admin/tables' });

        }

      })
      .catch(error => {
     console.log(error.message)
  })
    },
  }
};
</script>
<style >
</style>
