<template>
 <div>
  <p class="text-h6 q-pt-md">Open Campaigns</p>

  <div class="row">
    <div class="col-9">
      <q-card
      v-for="(campaign, index) in campaigns"
      :key="index"
      class="my-card"
      >
        <q-card-section class="q-mb-lg">
          <div class="text-h6">{{ campaign }}</div>
           <a :href="`/#/campaigns/${campaign}`">View Campaign</a>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-3 text-right q-pl-md">
      <q-btn 
      @click="$router.push({name: 'new_campaign'})"
      class="full-width" 
      color="primary" 
      icon="add_circle" 
      no-caps 
      label="Create Campaign"
      />
    </div>
  </div>

  
 </div>
</template>

<script>
import factory from '../../ethereum/factory';

export default
{
 data:() =>
 ({
  campaigns: [],
 }),
 async mounted()
 {
  this.campaigns = await factory.methods.getDeployedCampaigns().call();
 },
 methods: { },
}
</script>
<style>
</style>