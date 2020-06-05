<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <passport-clients></passport-clients>
                <authorized-clients></authorized-clients>
                <personal-access-tokens></personal-access-tokens>
            </div>
        </div>
    </div>
</template>

<script>
import PersonalAccessTokens from './passport/PersonalAccessTokens.vue'
import AuthorizedClients from './passport/AuthorizedClients.vue'
import Clients from './passport/Clients.vue'

    export default {
        name: 'Developer',
        components: {
            PersonalAccessTokens: PersonalAccessTokens,
            AuthorizedClients: AuthorizedClients,
            PassportClients: Clients
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
