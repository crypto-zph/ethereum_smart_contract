<template>
    <div>
        <q-form @submit="contribute">
            <div class="field">
                <label>
                    <strong>Amount to Contribute</strong>
                </label>

                <div class="q-mt-sm">
                    <q-input suffix="ether" v-model="contribution_amount" outlined dense>
                    </q-input>
                </div>

                <div v-show="errorMessage" class="bg-red-3 q-pa-sm q-mt-md">
                  <strong class="text-h6">Oops!</strong>
                  <p>{{ errorMessage }}</p>
                </div>

                <div class="q-mt-md">
                    <q-btn :loading="loading" type=submit color="primary" unelevated>Contribute!</q-btn>
                </div>
           </div>
        </q-form>
    </div>
</template>

<script>
import web3 from '../ethereum/web3.js'
import Campaign from '../ethereum/campaign';

export default
{
    props: ['address'],
    data:() =>(
    {
        contribution_amount: 0,
        loading: false,
        errorMessage: ''
    }),
    mounted()
    {
    },
    methods:
    {
        async contribute()
        {
            this.loading = true;
            const campaign = Campaign(this.address);

            try 
            {
                const accounts = await web3.eth.getAccounts();
                console.log(accounts[0])
                await campaign.methods.contribute().send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.contribution_amount, 'ether')
                });
                this.$emit('success', true);
            }
            catch (err)
            {
                this.errorMessage = err.message;
            }
            this.loading = false;
        }
    }
}
</script>