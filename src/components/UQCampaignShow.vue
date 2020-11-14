<template>
    <div>
        <div class="row items-start q-mb-md q-gutter-md">
        <q-card class="my-card" style="width: 100%; max-width: 300px; height: 170px;">
          <q-card-section>
            <div class="text-h6 exactFit">{{ manager }}</div>
            <div class="text-subtitle2 q-mb-sm text-grey">Address of Manager</div>
            {{ text }}
          </q-card-section>
        </q-card>

        <q-card class="my-card" style="width: 100%; max-width: 300px; height: 170px;">
          <q-card-section>
            <div class="text-h6 exactFit">{{ minimum_contribution }}</div>
            <div class="text-subtitle2 q-mb-sm text-grey">Minimum Contribution (wei)</div>
            {{ min_text }}
          </q-card-section>
        </q-card>

      </div>
        <div class="row items-start q-mb-md q-gutter-md">
        <q-card class="my-card" style="width: 100%; max-width: 300px; height: 170px;">
          <q-card-section>
            <div class="text-h6 exactFit">{{ requests_count }}</div>
            <div class="text-subtitle2 q-mb-sm text-grey">Number of Requests</div>
            {{ req_text }}
          </q-card-section>
        </q-card>
        
        <q-card class="my-card" style="width: 100%; max-width: 300px; height: 170px;">
          <q-card-section>
            <div class="text-h6 exactFit">{{ approvers_count }}</div>
            <div class="text-subtitle2 q-mb-sm text-grey">Number of Approvers</div>
            {{ appr_text }}
          </q-card-section>
        </q-card>
      </div>

        <div class="row items-start q-mb-md q-gutter-md">
        <q-card class="my-card" style="width: 100%; max-width: 300px; height: 170px;">
          <q-card-section>
            <div class="text-h6 exactFit">{{ balance }}</div>
            <div class="text-subtitle2 q-mb-sm text-grey">Campaign Balance (ether)</div>
            {{ bal_text }}
          </q-card-section>
        </q-card>
      </div>
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
        minimum_contribution: '',
        balance: '',
        requests_count: '',
        approvers_count: '',
        manager: '',
        campaign: null,
        text: 'The manager created this campaign and can create requests to withdraw money',
        min_text: 'You must contribute at leat this much wei to become an approver',
        req_text: 'A requets tries to withdraw money from the contract. Requests must be approved by the approvers',
        appr_text: 'Number of people who have already donated to this campaign',
        bal_text: 'The balance is how much money this campaign has left to spend'
    }),
    async mounted()
    {
        this.campaign               = Campaign(this.address);
        let summary                 = await this.campaign.methods.getSummary().call();
        this.minimum_contribution   = summary[0];
        this.balance                = web3.utils.fromWei(summary[1], 'ether');
        this.requests_count         = summary[2];
        this.approvers_count        = summary[3];
        this.manager                = summary[4];
    },
    methods:
    {
    }
}
</script>