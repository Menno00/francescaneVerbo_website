<template>
    <v-container>
        <!-- Section: Title -->
        <v-row>
            <v-col cols="12">
                <v-header class="text-center">
                    <h1 class="mb-2">Chi Siamo</h1>
                </v-header>
            </v-col>
        </v-row>

        <!-- Section: Vocazione e Missione -->
        <v-row class="bg-451C">
            <v-col cols="12" md="6">
                <v-img src="@/assets/images/intro.jpg" alt="Vocazione e missione" class="mb-4" lazy></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <v-header>
                    <h2 class="mb-4">La Nostra Vocazione-Missione</h2>
                    <p>
                        Siamo donne consacrate a Dio e vogliamo seguire più da vicino Gesù, Verbo Incarnato e in Lui
                        donare la nostra vita alla gloria di Dio e proclamare le meraviglie del suo Amore per l'umanità.
                        Nel mistero dell’incarnazione, la nostra vocazione-missione vissuta nel “qui e ora”, trova il
                        centro vitale della propria identità.
                    </p>
                    <p>
                        Nello spirito francescano che ci caratterizza, siamo chiamate ad essere fraternità evangelica,
                        che in un clima di famiglia, esprime l’ut unum sint, si estende alla Chiesa e con Essa si apre
                        all'universo e alla sua storia, amando tutte le creature.
                    </p>
                    <p>
                        Siamo inviate a preparare le vie del Signore ed a far sì che ogni persona prenda consapevolezza
                        di essere dimora di Dio, privilegiando i più bisognosi di ogni realtà. Viviamo in piccole
                        comunità, attualmente presenti in Angola, Bolivia, Brasile, Italia, Uruguay e partecipiamo ad
                        una comunità intercongregazionale in Turchia.
                    </p>
                    <p>
                        Unite dallo stesso ideale di vita, formiamo e siamo riconosciute dalla Chiesa Cattolica come
                        Famiglia religiosa di vita apostolica e missionaria.
                    </p>
                    <p>
                        Madre Giovanna Francesca dello Spirito Santo è la nostra fondatrice.
                    </p>
                </v-header>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h2 class="mb-4">Breve Storia dell'Istituto</h2>
            </v-col>
        </v-row>

        <!-- Timeline -->
        <v-timeline dense>
            <!-- Eventi della Timeline -->
            <v-timeline-item v-for="(event, index) in timelineEvents" :key="index" :color="event.color"
                :icon="event.icon">
                <template v-slot:opposite>
                    <v-row>
                        <v-col cols="12">
                            <span class="font-weight-bold">{{ event.date }}</span>
                        </v-col>
                    </v-row>
                </template>

                <v-card flat>
                    <v-card-text>
                        <p>{{ event.text }}</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <v-divider class="my-6"></v-divider>

        <!-- Section: Organizzazione -->
        <v-row>
            <v-col cols="12">
                <h2 class="mb-4">Organizzazione</h2>
                <v-typography class="text-black body-1 mb-4">
                    <b>Struttura dell'Istituto:</b> Il suo scopo è di aiutare l'Istituto, le singole comunità e ogni
                    persona a costruire e vivere nell'unità e fedeltà al carisma di fondazione, in un servizio di
                    minorità.
                    La struttura dà fondamento all'Istituto, e il Governo accompagna nella realizzazione del progetto
                    dello stesso, mediante un servizio fraterno e responsabile.
                </v-typography>
                <br>
                <v-typography class="text-black body-1 mb-4">
                    <b>Autorità collegiale e personale:</b> Nell'Istituto l'autorità è esercitata in forma collegiale e
                    personale. L'autorità collegiale è esercitata dal Capitolo generale e provinciale legittimamente
                    congregati.
                    L'autorità personale è esercitata in modo ordinario dalla Superiora generale, provinciale e locale.
                </v-typography>
            </v-col>

            <!-- General Government Composition -->
            <v-col cols="12">
                <h3 class="mb-2">Composizione del Governo Generale (2021-2027)</h3>
                <v-row>
                    <v-col v-for="(member, index) in generalGovernment" :key="index" cols="12" md="4">
                        <v-card class="pa-3">
                            <v-card-title class="headline">{{ member.name }}</v-card-title>
                            <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                            <v-card-text>
                                <a :href="'mailto:' + member.email" v-if="member.email">{{ member.email }}</a>
                                <span v-else>-</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>


                <v-typography class="body-1">
                    <span class="text-black"><b>Indirizzo della Casa Generale:</b><br>
                    Casa Madonna, Via Madre Giovanna Ferrari, 1<br>
                    50014 Fiesole (FI) - ITALIA<br>
                    Tel. (0039) 055/59200<br>
                    <b>Email:</b> <a href="mailto:casamadre@francescaneverbo.com">casamadre@francescaneverbo.com</a></span>
                </v-typography>
            </v-col>

            <!-- Italy Delegation -->
            <v-col cols="12">
                <h3 class="mb-2">Composizione del Governo Delegato - Italia (Luglio 2022 - Luglio 2025)</h3>
                <v-row>
                    <v-col v-for="(member, index) in italyDelegation" :key="index" cols="12" md="4">
                        <v-card class="pa-3">
                            <v-card-title class="headline">{{ member.name }}</v-card-title>
                            <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                            <v-card-text>
                                <a :href="'mailto:' + member.email" v-if="member.email">{{ member.email }}</a>
                                <span v-else>-</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-typography class="body-1">
                    <span class="text-black"><b>Per contattare la Delegata:</b> 0039 - 348 930 96 96</span>
                </v-typography>
            </v-col>

            <!-- Latin American Delegation -->
            <v-col cols="12">
                <h3 class="mb-2">Delegazione Latinoamericana (Uruguay - Brasile - Bolivia, 2023 - 2026)</h3>
                <v-row>
                    <v-col v-for="(member, index) in latinAmericanDelegation" :key="index" cols="12" md="4">
                        <v-card class="pa-3">
                            <v-card-title class="headline">{{ member.name }}</v-card-title>
                            <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                            <v-card-text>
                                <a :href="'mailto:' + member.email" v-if="member.email">{{ member.email }}</a>
                                <span v-else>-</span>   
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-typography class="body-1">
                    <span class="text-black"><b>Indirizzo della Delegazione:</b><br>
                    Casa Delegazione, Millán 3127<br>
                    Montevideo c.p.11.700 - URUGUAY<br>
                    Tel. (00598) 2/203 31 68</span>
                </v-typography>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "VocazioneMissione",
    data() {
        return {
            generalGovernment: [
                { name: "Madre Fatima Godiño", role: "Superiora generale", email: "fatimagodin-o@libero.it" },
                { name: "Suor Ancilla Rinadi", role: "Vicaria generale e prima consigliera"},
                { name: "Suor Chiara Lusetti", role: "Consigliera ed Economa generale"},
                { name: "Suor Solange Badaraco", role: "Consigliera generale"},
                { name: "Suor Mariapia Giannasi", role: "Consigliera generale"},
                { name: "Suor Giovanna Banchi Fabrizi", role: "Segretaria generale"}
            ],
            italyDelegation: [
                { name: "Suor Franca Facchetti", role: "Delegata regionale", email: "mfvifranca@gmail.com" },
                { name: "Suor Rosa Ferretti", role: "Consigliera ed Economa regionale"},
                { name: "Suor Carla Bisso", role: "Consigliera regionale" }
            ],
            latinAmericanDelegation: [
                { name: "Sr Ana Inés Alvariza", role: "Delegata regionale", email: "alvarizaradio@gmail.com" },
                { name: "Sr Ana Laura Rivero", role: "Consigliera ed Economa regionale"},
                { name: "Sr Claudete De Carvalho", role: "Consigliera regionale"}
            ],
            timelineEvents: [
                {
                    date: '10 Dicembre 1929',
                    text: `A Reggio Emilia (Italia), nell'oratorio detto delle "Otto facce", Luisa Ferrari (che assunse il nome di Giovanna Francesca dello Spirito Santo) si riunì ad altre 6 compagne, e alla presenza del cappuccino Daniele Coppini da Torricella di Sissa (PR), si consacrarono al Signore.`,
                    color: 'primary',
                    icon: 'mdi-calendar-check',
                },
                {
                    date: '10 Dicembre 1930',
                    text: `Inizia ufficialmente l'Istituto delle Missionarie Francescane del Verbo Incarnato con l'apertura della prima casa in Calabria, segnando l'inizio della missione delle religiose.`,
                    color: 'secondary',
                    icon: 'mdi-calendar-plus',
                },
                {
                    date: '21 Dicembre 1932',
                    text: `Il padre Daniele Coppini aiuta Madre Giovanna nella stesura del primo "abbozzo di Regola" dell'Istituto delle Terziarie Francescane "Spose del Verbo".`,
                    color: 'accent',
                    icon: 'mdi-pencil',
                },
                {
                    date: '1930',
                    text: `Si apre la prima casa a Motta Filocastro (CZ-Italia), su invito del parroco Achille Fosco. Le religiose si dedicano alla formazione religiosa dei bambini e all'assistenza degli anziani e infermi.`,
                    color: 'green',
                    icon: 'mdi-home-city',
                },
                {
                    date: '1932-1933',
                    text: `Apertura di case in altre località della Calabria e dell'Emilia, tra cui Salsomaggiore (PR), Sabbione (RE), e Villarotta (RE).`,
                    color: 'blue',
                    icon: 'mdi-city',
                },
                {
                    date: '11 Ottobre 1947',
                    text: `Vengono approvate le Costituzioni dell'Istituto dalla Congregazione per i Religiosi della Santa Sede.`,
                    color: 'purple',
                    icon: 'mdi-file-document',
                },
                {
                    date: '9 Giugno 1972',
                    text: `Il decreto di Lode della Santa Sede conferma la validità e la missione dell'Istituto delle Missionarie Francescane del Verbo Incarnato.`,
                    color: 'red',
                    icon: 'mdi-certificate',
                }
            ],
        };
    },
    metaInfo() {
        return {
            title: "La Nostra Vocazione-Missione - Suore Francescane Missionarie del Verbo Incarnato",
            meta: [
                { name: "description", content: "Scopri la vocazione e missione delle Suore Francescane Missionarie del Verbo Incarnato." },
                { name: "keywords", content: "vocazione, missione, francescane, Verbo Incarnato, suor, consacrate, religiose" },
                { name: "robots", content: "index, follow" },
                { property: "og:title", content: "La Nostra Vocazione-Missione" },
                { property: "og:description", content: "Unisciti a noi nel nostro impegno per vivere la missione del Verbo Incarnato." }
            ]
        };
    }
};
</script>

<style scoped>
.bg-451C {
        background-color: #CFDC97;
        color:black
}
.v-container {
    max-width: 1200px;
}

.v-card {
    margin: 10px 0;
    background-color:#CFDC97;
}

.v-header h1 {
    font-size: 2rem;
}

.v-typography {
    margin-bottom: 20px;
}
</style>