<template>
    <v-row class="justify-space-around align-center bg-4026C">
        <v-col cols="12" md="6" class="py-10">
            <h1 class="text-center mx-10">Alla Sequela del Maestro, <br> sempre più, sempre meglio</h1>
            <div class="d-flex flex-row align-center justify-center">
                <v-btn class="mt-5 mr-5" color="secondary" href="/spazio-giovani">Spazio Giovani</v-btn>
                <v-btn class="mt-5" color="secondary" href="/projects">Progetti</v-btn>
            </div>
        </v-col>
        <v-col cols="12" md="6" class="py-5">
            <VideoCard />
        </v-col>
    </v-row>
</template>

<style scoped>
.bg-4026C{
    background-color: #bc8c3d;
}
</style>