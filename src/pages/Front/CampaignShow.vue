<template>
 <div>
  <p class="text-h6 q-pt-md">Campaign Show</p>

  <div class="row">
    <div class="col-7">
      <u-q-campaign-show :address="$route.params.address" :key="key"></u-q-campaign-show>
    </div>

    <div class="col-5">
      <u-q-contribution-form :address="$route.params.address" :key="key" @success="key++"></u-q-contribution-form>
    </div>
    <div class="q-mb-lg q-mt-sm">
      <q-btn :loading="loading" @click="$router.push({name: 'requests_list'})" color="primary" unelevated>View Requests</q-btn>
    </div>
  </div>
    
</div>
</template>

<script>
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3.js';
import UQContributionForm from '../../components/UQContributionForm';
import UQCampaignShow from '../../components/UQCampaignShow';

export default
{
 data:() =>
 ({
  key: 0
 }),
 async mounted()
 {
 },
 methods: { },
 components: { UQContributionForm, UQCampaignShow }
}
</script>
<style>
div.exactFit {
  word-wrap: break-word;
}
</style>
