
const routes =
[
    {
        path: '/',
        component: () => import('layouts/FrontLayout.vue'),
        children:
        [
            { name: 'front_dashboard', path: '', component: () => import('pages/Front/Dashboard.vue') },
            { name: 'new_campaign', path: 'campaigns/new', component: () => import('pages/Front/New.vue') },
            { name: 'campaign_show', path: 'campaigns/:address', component: () => import('pages/Front/CampaignShow.vue') },
            { name: 'requests_list', path: 'campaigns/:address/requests', component: () => import('pages/Front/RequestsList.vue') },
            { name: 'new_request', path: 'campaigns/:address/requests/new', component: () => import('pages/Front/NewRequest.vue') },
            // { name: 'front_login', path: 'landing', component: () => import('pages/Front/Login.vue') },
        ]
    },
    {
        path: '/documentation',
        component: () => import('layouts/DocumentationLayout.vue'),
        children:
        [
            { name: 'documentation_landing', path: '', component: () => import('pages/Documentation/Landing.vue') },
            { name: 'documentation_login', path: 'login', component: () => import('pages/Documentation/Login.vue') },
            { name: 'documentation_registration', path: 'registration', component: () => import('pages/Documentation/Registration.vue') },
            { name: 'documentation_web3', path: 'web3', component: () => import('pages/Documentation/Web3.vue') },
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
