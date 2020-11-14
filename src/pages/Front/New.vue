<template>
 <div>
  <p class="text-h6 q-pt-md q-mb-sm">Create a Campaign</p>
  <strong>Minimum Contribution</strong>
  <q-form @submit="onSubmit">
    <div class="field">
        <div class="q-mb-sm">
          <q-input suffix="wei" v-model="minimumContribution" outlined dense>
          </q-input>
        </div>

        <div v-show="errorMessage" class="bg-red-3 q-pa-sm">
          <strong class="text-h6">Oops!</strong>
          <p>{{ errorMessage }}</p>
        </div>
    </div>

    <div class="q-mt-sm">
      <q-btn :loading="loading" class="q-px-md" type="submit" color="primary" no-caps label="Create!" outlined dense></q-btn>
    </div>
    
  </q-form>
 </div>
</template>

<script>
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default
{
 data:() =>
 ({
  minimumContribution: null,
  errorMessage: '',
  loading: false,
 }),
 async mounted()
 {
 },
 methods: 
 {
  async onSubmit() 
  {
    this.loading = true;
    this.errorMessage = '';
    try
    {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.minimumContribution)
        .send({
          from: accounts[0]
        })
      this.$router.push({name: 'front_dashboard'})
    }
    catch (err)
    {
      this.errorMessage = err.message;
    }
    this.loading = false;
  }
 },
}
</script>