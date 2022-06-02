<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-3/12 px-4">
      <CardProfile />
    </div>
    <div class="w-full lg:w-6/12 ">
      <CardSettings />
    </div>
    <div class="w-full lg:w-3/12 px-4">
      <CardProfile />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/Cards/TreatForm.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";

export default {
  components: {
    CardSettings,
    CardProfile,
  },
};
</script>
