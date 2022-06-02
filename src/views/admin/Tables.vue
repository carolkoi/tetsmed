<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <!-- <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div> -->
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTable.vue";
// import CardTable from "@/components/Cards/newTable.vue";

export default {
  components: {
    CardTable,
  },
  data(){
    return{
      loggedInUser:{
        name:'',
        department:'',
        id:''
      }

    }
  },
  methods: {
    getLoggedInUser(){
      this.loggedInUser.name = localStorage.getItem('userName')
      this.loggedInUser.department = localStorage.getItem('department')
      this.loggedInUser.id = localStorage.getItem('id')

      console.log('logged in user', this.loggedInUser)

    }
  },
  created(){
    this.getLoggedInUser()
  }
};
</script>
