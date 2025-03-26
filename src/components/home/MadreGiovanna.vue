<template>
    <v-row class="justify-space-around align-center bg-4026C mt-10" height="350px">

        <v-col>
            <v-img
                src="@/assets/images/home/madre_giovanna_4.jpg"
                aspect-ratio="1"
                class="rounded-circle mx-auto my-6 border-solid border-4 border-white"
                width="200px"
                contain
            ></v-img>     
        </v-col>
        <v-col class="justify-center align-center mx-auto">
            <h1 class="text-center">Alla Sequela del Maestro, <br> sempre più, sempre meglio</h1>

            <v-row class="justify-center mt-5">
                <v-btn class="mr-5" color="secondary" href="/madregiovanna">Madre Giovanna</v-btn>
                <v-btn color="secondary" href="/scritti">Gli scritti</v-btn>
            </v-row>
        </v-col>
        
    </v-row>
</template>

<style scoped>
.bg-4026C{
    background-color: #bc8c3d;
}
</style>    