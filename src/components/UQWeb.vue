<template>
    <div>

	    <!-- content -->
	    <div class='content text-left'>
	    	<h2>Lottery Contract</h2>
            <p>This contract is managed by {{ manager }}. There are currently {{ players.length }}
                people entered, competing to win {{ balance }} ether!
            </p><hr />
            <h4>Want to try your luck?</h4>
            <q-form @submit="enterLottery">
                <div class="field">
                    <q-input
                    v-model="amount"
                    label="Amount of ether to enter"
                    outlined
                    dense
                    />
                </div>
                <div class="q-mt-sm">
                    <q-btn
                    type="submit"
                    style="background: #34548b; color: white;"
                    glossy
                    unelevated
                    >Enter</q-btn>
                </div>
            </q-form><br />
            <hr />
                <h4>Ready to pick a winner?</h4>
                <div class="q-mt-sm">
                    <q-btn
                    type="button"
                    style="background: #34548b; color: white;"
                    glossy
                    @click="pickWinner"
                    unelevated
                    >Pick a winner!</q-btn>
                </div><br />
            <hr />
            <h3>{{ message }}</h3>
	    </div>
    </div>
</template>

<script>
import { postLoginUser } from '../references/url';
import web3 from '../references/web3';
import lottery from '../references/lottery';

export default
{
    data:() =>(
    {
        amount: '',
        manager: '',
        players: [],
        balance: '',
        message: ''
    }),
    async mounted()
    {
        // web3.eth.getAccounts().then(console.log);
        // this.newWeb3();
        await this.setManager();
    },
    methods:
    {
        async setManager()
        {
            const manager = await lottery.methods.manager().call();
            const players = await lottery.methods.getPlayers().call();
            const balance = await web3.eth.getBalance(lottery.options.address);

            this.manager = manager;
            this.players = players;
            this.balance = await web3.utils.fromWei(balance, 'ether');
        },

        async enterLottery()
        {
            const accounts = await web3.eth.getAccounts();

            this.message = 'Waiting on transaction success...';

            await lottery.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei(this.amount, 'ether')
            });

            this.message = 'You have been entered!';
            await this.setManager();
        },

        async pickWinner()
        {
            const accounts = await web3.eth.getAccounts();

            this.message = 'Waiting on transaction success...';

            await lottery.methods.pickWinner().send({
                from: accounts[0],
            });

            this.message = 'The winner has been picked!';
            await this.setManager();
        },
    }
}
</script>