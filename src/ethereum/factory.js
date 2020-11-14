import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x8ae235326CB25f048c39D7ca1D3dCc65b5f91b6a'
);

export default instance;