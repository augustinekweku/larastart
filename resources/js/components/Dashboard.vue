<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <not-found></not-found>
            </div>
        </div>
    </div>
</template>

<script>
//import NotFound from './NotFound.vue'
    export default {
        name: "Dashboard",
        // components: {
        //     NotFound: NotFound
        // },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
