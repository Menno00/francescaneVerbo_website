<template>
  <v-container>
    <!-- Intestazione -->
    <v-row class="mb-6">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 font-weight-bold">Progetti 2025</h1>
        <p class="subtitle-1 text-secondary">
          Esplora i progetti missionari in tutto il mondo delle Suore Francescane.
        </p>
      </v-col>
    </v-row>

<!--     Slider di Immagini Principale -->
    <v-row class="mb-8">
      <v-col cols="12">
        <v-carousel show-arrows height="400px" class="elevation-3">
          <v-carousel-item
            v-for="(image, index) in mainImages"
            :key="'main-slider-' + index"
          >
            <v-img :src="image" class="fill-height"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Sezioni dei Progetti per Paese -->
    <v-row>
      <v-col cols="12" >
        <v-accordion>
          <v-accordion-item v-for="country in countries" :key="country.name" :title="country.name">
            <ProjectCountrySection :country="country" :id="country.name"/>
          </v-accordion-item>
        </v-accordion>
      </v-col>
    </v-row>

  </v-container>
</template>
  
<script>
import ProjectCountrySection from '@/components/ProjectCountrySection.vue';




export default {
  name: 'Projects',
  components: {
    ProjectCountrySection,
  },
  data() {
    return {
      mainImages: [
        new URL('@/assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
        new URL('@/assets/images/projects/merendero.jpg', import.meta.url).href,
        // Add more images as needed
      ],
      countries: [
        {
          name: 'Brasile',
          projects: [
            {
              id: 1,
              name: 'UNA TAZZA DI LATTE',
              image: new URL('@/assets/images/projects/una_tazza_di_latte.jpg', import.meta.url).href,
              short_description: 'Per l\'acquisto di latte per 70 bambini della "Casa Madre Giovanna"',
              description: `Porto Alegre è la Capitale dello Stato del Rio Grande do Sul (Brasile) fortemente popolato, con un ampio territorio ricoperto di “Favelas” (baraccopoli) dove la gente vive in un contesto di violenza e precarietà. Per venire incontro a questa esigenza,
              in una di queste “favelas” nel quartiere “la Tuca”, le suore Missionarie Francescane del Verbo Incarnato hanno dato vita ad un Centro di promozione per l’infanzia vulnerabile chiamato: “Casa Madre Giovanna” dove bambini ed adolescenti vengono accolti per offrirgli un’alimentazione salutare 
              e un accompagnamento educativo come alternativa ad una vita di strada fatta di spazzatura, droga e violenza. Attualmente il Centro è frequentato da 70 bambini ed adolescenti. Il programma comprende attività di: calcio, danza, arte, tempo libero, educazione popolare (metodo Freire) ed informatica. 
              Sono offerti per turno (mattina e pomeriggio) 2 pasti: colazione e pranzo oppure pranzo e merenda. Il tutto ha un costo. Alcune Ditte locali partecipano alle spese donando alimenti, ma sono insufficienti per coprire le necessità quotidiane.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale per migliorare le condizioni di questi bambini e adolescenti e dare loro una possibilità di futuro. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che avrà una ricaduta non indifferente sul futuro dei bambini e delle famiglie. Con gratitudine assicuriamo un ricordo nella preghiera.`
            },
            {
              id: 2,
              name: 'ALIMENTAR A VIDA',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description: 'Sostegno alimentare, educativo e sanitario dei bambini e adolescenti del Centro “Vida Nova” che ospita circa 800 bambini e bambine.',
              description: `Fortaleza dos Nogueiras è una cittadina nello stato del Maranhão (Brasile) caratterizzato da agro-negocios: grandi fazendas di proprietà di multinazionali straniere, per l’allevamento del bestiame, monoculture di soya e canna da zucchero. 
              La popolazione di origine in gran parte afro-indigen, soffre per lo sfruttamento di manodopera di queste imprese e per la poca possibilità di accesso ai servizi essenziali. Per venire incontro a questa esigenza, le suore Missionarie Francescane del Verbo Incarnato hanno dato vita ad un Programma chiamato “Vida Nova”: 
              un Centro di promozione per l’infanzia vulnerabile dove bambini ed adolescenti vengono accolti per ricevere un’alimentazione salutare e un accompagnamento educativo come alternativa ad una vita che offre poche prospettive di futuro e lascia spazio ad alcool, droga oppure all’emigrazione. 
              Attualmente il Centro è frequentato da circa 800 bambini e adolescenti. Il programma comprende: attività sportive e ricreative, protezione sociale di base per bambini,  adolescenti, e le loro famiglie con l'obiettivo di rafforzare i legami familiari, sociali e comunitari; rinforzo scolare, 
              attività artistiche, progetti di formazione professionale per favorire l’accesso al mondo del lavoro, educazione cristiana, educazione civica ed ai diritti del bambino e dell’adolescente, terapia di gruppo per la gestione delle emozioni e per curare situazioni di violenza domestica. 
              Sono offerti per turno (mattina e pomeriggio) 2 pasti: colazione e pranzo oppure pranzo e merenda. Il tutto ha un costo. Alcune Ditte locali partecipano alle spese donando alimenti, e lo Stato collabora con una convenzione ma questi aiuti sono insufficienti per coprire tutte le necessità.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale per rendere capaci di migliorare le condizioni di questi bambini e adolescenti e dare loro una possibilità di futuro. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro dei bambini e delle famiglie. Con gratitudine assicuriamo un ricordo nella preghiera.`
            },
          ],
        },
        {
          name: 'Uruguay',
          projects: [
            {
              id: 3,
              name: 'MERENDERO',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Sostegno educativo-alimentare per bambini di una favela alla periferia di Montevideo (2-8 anni)',
              description: `Montevideo, capitale dell’Uruguay, è una grande città sud americana che conta nella sua periferia numerose baraccopoli dove la gente vive in mezzo alla spazzatura in condizioni disumane. 
              In una di queste, nel quartiere Barrio Unidos, le suore Missionarie Francescane del Verbo Incarnato hanno dato vita ad un Centro chiamato “Arca de l’alegria”: 
              un Centro di accoglienza per l’infanzia della baraccopoli dove bambini ed adolescenti vengono accolti per ricevere un’alimentazione salutare e un accompagnamento educativo che promuova la loro dignità di persone.  
              Attualmente il Centro è frequentato da 50 bambini e adolescenti che seguono tutto il programma educativo e 100 che beneficiano di un pasto. 
              Al Centro vengono offerte attività ricreative, rinforzo scolare, terapia psicologia ed emozionale, educazione umana e cristiana, educazione civica ed ai diritti del bambino e dell’adolescente, attività per rafforzare la socializzazione e la convivenza. 
              Viene garantito un pasto al giorno. Il tutto ha un costo. Alcune Ditte locali partecipano alle spese donando alimenti, e lo Stato collabora con una convenzione ma questi aiuti  non sono sufficienti per coprire le necessità quotidiane di tanti bambini e adolescenti.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale per migliorare la qualità della vita di questi bambini e adolescenti. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini e famiglie emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 4,
              name: 'NUTRIENDO EL FUTURO',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description: "Collaborazione per il pranzo degli adolescenti del Centro Giovanile “La Casilla” (12-18 anni)",
              description: `Montevideo, capitale dell’Uruguay, è una grande città sud americana che conta nella sua periferia numerose situazioni di emarginazione dove spesso adolescenti e giovani portano le più amare conseguenze. 
              Per rispondere a questo disagio, le suore Missionarie Francescane del Verbo Incarnato hanno dato vita ad un Centro chiamato “Centro Giovanile la Casilla”. 
              Questa opera accoglie 50 adolescenti e giovani vulnerabili che spesso hanno lasciato la scuola ed hanno come alternativa la strada e la droga. 
              Al Centro questi giovani e adolescenti ricevono il pranzo ed una merenda sostanziosa, oltre a possibilità educative come: laboratori artigianali, informatica, cucina, educazione umana e cristiana. Tutto questo ha un costo. 
              Alcune Ditte locali partecipano alle spese donando alimenti, e lo Stato collabora con una convenzione ma questi aiuti non sono sufficienti per coprire le necessità quotidiane.
              Solo con un aiuto possiamo continuare ad offrire un servizio di accompagnamento a questi adolescenti e giovani. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti giovani e famiglie emarginate dalla società. 
              Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 5,
              name: 'RADICI',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description: "Aiuto agli anziani ed anziane della Casa di riposo “Hogar Blanca Castro de Argenzio\”",
              description: `Fraile Muerto è un paese del Cerro Largo in Uruguay vicino al confine con il Brasile dove si pratica l’allevamento del bestiame e la coltivazione di Eucaliptos da parte di multinazionali straniere. Parte della sua popolazione vive in condizioni di povertà ed emarginazione a causa delle condizioni di lavoro praticate da alcuni proprietari terrieri senza scrupoli che riducono in schiavitù i loro lavoratori più deboli privandoli, a volte, anche dei documenti personali. Per rispondere a questa situazione le suore Missionarie Francescane del Verbo Incarnato hanno svolto diverse attività di formazione e cura della popolazione, fra cui la Casa di riposo per anziani poveri: “Hogar Blanca Castro de Argenzio”.  Attualmente la di riposo ospita 30 anziani soli o in difficoltà. Nella Casa di riposo vengono offerte: cure sanitarie, attività ricreative, cibo salutare, animazione religiosa e tanto affetto. Il tutto ha un costo. Alcune Ditte locali partecipano alle spese donando alimenti, e lo Stato collabora con una convenzione ma questi aiuti sono insufficienti per coprire le necessità di questi anziani.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione adeguata e cure necessarie perché questi anziani possano trascorrere gli ultimi anni della loro vita in maniera dignitosa. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente oltre che sulla vita di queste persone anche dell’intero paese di Fraile Muerto. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 6,
              name: 'PASTORALE RURALE',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description: "Acquisto materiale per la catechesi e spese per gli spostamenti della pastorale delle Cappelle (viaggi nelle zone di campagna)",
              description: `Fraile Muerto è un paese del Cerro Largo in Uruguay vicino al confine con il Brasile dove si pratica l’allevamento e la coltivazione di Eucaliptos per conto di multinazionali straniere. Parte della sua popolazione vive nella campagna, in piccoli villaggi molto lontani dal Centro di riferimento che è Fraile Muerto, spesso in condizioni di solitudine e di emarginazione. Per rispondere alla necessità di vicinanza e di accompagnamento umano e religioso, le suore Missionarie Francescane del Verbo Incarnato hanno organizzato, ormai da tanti anni, la pastorale rurale svolgendovi attività come: la catechesi e la liturgia della Parola oltre che a diverse attività di formazione e cura della popolazione. Attualmente i villaggi in cui si pratica questa animazione sono 7: Toledo, la Septima, Ricón de Py, Tres Islas,la Cuchilla Grande,Cerro de las Cuentas e Ramón Trigo. Il tutto ha un costo. Le suore e gli abitanti collaborano nel sostenere le spese ma non riescono a coprire la somma necessaria soprattutto per l’acquisto del carburante e del materiale della catechesi.
              Solo con un aiuto possiamo continuare ad offrire un servizio di vicinanza a queste persone che vivono nell’interno. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente oltre che sulla vita di queste persone anche dell’intero paese di Fraile Muerto. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 7,
              name: 'LOTO D\'AMORE',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description: "Sostegno nella cura e custodia delle Sorelle Missionarie Anziane.",
              description: `Le suore Missionarie Francescane del Verbo Incarnato ritengono che la custodia delle sorelle anziane e malate sia parte della loro vocazione ad onorare la vita di ogni persona dalla nascita sulla terra alla nascita al Cielo quale luogo dell’incarnazione del Verbo. Le sorelle in quanto missionarie hanno speso la loro vita per soccorrere le debolezze della gente e ora sono loro che necessitano di cure.
              L’attuale situazione di squilibrio tra il numero di sorelle anziane e malate e quelle ancora attive ha imposto di assumere personale esterno. Le pensioni basse o inesistenti (in Uruguay), le donazioni, non sono sufficienti per coprire i costi di gestione di queste case. In questo contesto ogni aiuto è prezioso per continuare a curare ed assistere le nostre sorelle in maniera dignitosa. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno nel portare avanti questa assistenza per far si che anche questa fase della vita possa continuare ad essere luogo e testimonianza di solidarietà cura e accoglienza.
              Con gratitudine assicuriamo un ricordo nella preghiera.`,
            }
          ],
        },
        {
          name: 'Bolivia',
          projects: [
            {
              id: 8,
              name: 'INFANZIA',
              place: 'Villa Montes',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Aiuto per il “Nidito Verbo Encarnado” (scuola d’infanzia) o per il Centro “Juan Pablo II°” (Centro per bambini/e diversamente abili)',
              description: `Villa Montes è una cittadina che si trova nel Chaco boliviano, al sud della Bolivia, in una zona chiamata “infierno verde” per le altre temperature. La sua popolazione vive in condizioni modeste e spesso in povertà senza avere accesso ai servizi essenziali. Per rispondere a queste necessità, le suore Missionarie Francescane del Verbo Incarnato hanno dato vita a diverse opere fra cui “Il Nidito del Verbo Encarnado” e hanno contribuito alla nascita del Centro per ragazzi diversamente abili: “Juan Pablo II”. 
              Attualmente la Scuola per l’infanzia accoglie 40-45 bambini mentre il Centro Juan Pablo II più di 120 ragazzi. I bambini accolti nel Nidito del Verbo Encarnado, oltre a ricevere un’educazione che li preparerà alla scuola primaria, gli viene offerto un pasto. 
              Il Centro Juan Pablo II per ragazzi diversamente abili offre: attività educative, ricreative e di rinforzo scolare, fisioterapia, ginnastica, educazione umana e cristiana oltre che ad attività per rafforzare la socializzazione che valorizzano la loro dignità di persone. Il tutto ha un costo. Alcune Ditte locali partecipano alle spese donando alimenti, e lo Stato collabora con una convenzione ma questi aiuti sono insufficienti per coprire le necessità quotidiane di tanti bambini e adolescenti in difficoltà.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale per migliorare la qualità della vita di questi bambini e adolescenti. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini e famiglie emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            }
          ]
        },
        {
          name: 'Angola',
          projects: [
            {
              id: 9,
              name: 'INFANZIA',
              place: 'M\'Banza Congo',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Sostegno per lo stipendio di una aiuto-infermiera al "Centro Frei Giorgio Zulianello"',
              description: `M’Banza Kongo è una città capitale della provincia dello Zaire in Angola. Per ragioni storiche (era l’antica capitale del Regno del Congo) ora è Patrimonio dell’Unesco ma la sua popolazione vive in povertà, pur essendo in una zona petrolifera, in quanto non si sono ancora sviluppate nel territorio l’Agricoltura e l’Industria e l’estrazione del petrolio è in mano a Multinazionali straniere. La sua vicinanza alla Repubblica del Congo e alla Repubblica Democratica del Congo ne fa una città di frontiera e non dirado un luogo in cui si pratica il contrabbando e la tratta di esseri umani. Tanti sono i bambini vulnerabili che abitano la città. Per rispondere a queste necessità, i Frati Cappuccini hanno fondato un orfanatrofio chiamato: “Centro Frei Giorgio Zulianello” e le suore Missionarie Francescane del Verbo Incarnato hanno deciso di offrire la loro collaborazione nella gestione dell’opera.  Attualmente il Centro accoglie in forma residenziale, una novantina tra bambini e adolescenti di età compresa fra i 12 mesi e i 17 anni. L’orfanatrofio oltre ad offrire 2 pasti, una colazione e una merenda, dà la possibilità di svolgere attività: educative, ricreative, sportive, di rinforzo scolare, educazione umana e cristiana oltre che ad eventi per rafforzare la socializzazione e la valorizzazione della loro dignità di persone. Nel Centro è presente anche un ambulatorio con un servizio di accompagnamento sanitario quotidiano portato avanti da una suora. Malaria, febbre tifoide, piaghe tropicali sono alcune tra le malattie maggiormente curate.  La quantità di bambini da assistere giorno e notte necessità di una seconda persona. Si è resa indispensabile l’assunzione di un aiuto- infermiera per dare sostegno alla suora responsabile.  Il tutto ha un costo. Lo Stato dovrebbe collaborare pagando gli stipendi degli educatori ma in realtà spesso non lo fa e le donazioni di alimentari o altro di imprese locali sono rare.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale ed un’assistenza sanitaria costante per migliorare la qualità della vita di questi bambini e adolescenti. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini ed adolescenti emarginati dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 10,
              name: 'FAGIOLI',
              place: 'M\'Banza Congo',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Acquisto di fagioli, frutta e verdura per i bambini e i giovani orfani del "Centro Frei Giorgio Zulianello"',
              description: `M’Banza Kongo è una città capitale della provincia dello Zaire in Angola. Per ragioni storiche (era l’antica capitale del Regno del Congo) ora è Patrimonio dell’Unesco ma la sua popolazione vive in povertà, pur essendo in una zona petrolifera, in quanto non si sono ancora sviluppate nel territorio l’Agricoltura e l’Industria e l’estrazione del petrolio è in mano a Multinazionali straniere. La sua vicinanza alla Repubblica del Congo e alla Repubblica Democratica del Congo ne fa una città di frontiera e non dirado un luogo in cui si pratica il contrabbando e la tratta di esseri umani. Per rispondere a queste necessità,i Frati Cappuccini hanno fondato un orfanatrofio “Il centro Frei Giorgio Zulianello” e  le suore Missionarie Francescane del Verbo Incarnato hanno deciso di offrire la loro collaborazione nella gestione dell’opera. Attualmente il Centro accoglie una novantina tra bambini e adolescenti di età compresa dall’1 ai 17 anni. L’orfanatrofio oltre ad offrire 2 pasti una colazione e una merenda, dà la possibilità di svolgere: attività educative, ricreative, sportive,di rinforzo scolare, educazione umana e cristiana oltre che ad attività per rafforzare la socializzazione che valorizzino la loro dignità di persone.Nel Centro è presente anche un ambulatorio con un servizio di accompagnamento sanitario. Il tutto ha un costo. Lo Stato dovrebbe collaborare pagando gli stipendi degli educatori ma in realtà spesso non lo fa e le donazioni di alimentari o altro di imprese locali sono rare.
              Solo con un aiuto possiamo continuare ad offrire una un’alimentazione e una formazione solida ed integrale per migliorare la qualità della vita di questi bambini e adolescenti. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini e famiglie emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 11,
              name: 'RAGAZZE',
              place: 'M\'Banza Congo',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Aiuto per la pastorale giovanile-vocazionale e formazione- promozione della donna a M\'Banza Congo e Uige',
              description: `M’Banza Kongo è una città capitale della provincia dello Zaire in Angola. Per ragioni storiche (era l’antica capitale del Regno del Congo) è Patrimonio dell’Unesco ma la sua popolazione vive in povertà, pur essendo situata in una zona petrolifera, in quanto Agricoltura e Industria non sono ancora sviluppate e l’estrazione del petrolio è in mano a Multinazionali straniere. La sua vicinanza alla Repubblica del Congo e alla Repubblica Democratica del Congo ne fa una città di frontiera e non dirado un luogo in cui si pratica il contrabbando e la tratta di esseri umani. Per rispondere alle necessità della popolazione, i Frati Cappuccini hanno fondato un orfanatrofio chiamato: “Centro Frei Giorgio Zulianello” e le suore Missionarie Francescane del Verbo Incarnato hanno deciso di offrire la loro collaborazione nella gestione dell’opera. L’attività pastorale delle suore si svolge anche fuori del centro: Pastorale parrocchiale e giovanile vocazionale. Attualmente le suore svolgono questa attività sia in M’Banza Congo che nella Provincia di Uige. Questa attività richiede spostamenti quindi: carburante per fare lunghi viaggi, disporre di materiale adeguato per la formazione oltre al necessario per l’accoglienza delle ragazze durante gli stages. Il tutto ha un costo. Le ragazze partecipano con una piccola quota ma non è sufficiente per coprire le spese.
              Solo con un aiuto possiamo continuare ad offrire una formazione umana e cristiana per promuovere la vita di queste adolescenti e giovani che si aprono al futuro spesso con poche prospettive. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tante giovani emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 12,
              name: 'EXTRASCOLASTICO',
              place: 'M\'Banza Congo',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Sostegno a progetti scolastici (Corsi professionali, divise, libri) del "Centro Frei Giorgio Zulianello"',
              description: `M’Banza Kongo è una città capitale della provincia dello Zaire in Angola. Per ragioni storiche (era l’antica capitale del Regno del Congo) è Patrimonio dell’Unesco ma la sua popolazione vive in povertà, pur essendo situata in una zona petrolifera, in quanto Agricoltura e Industria non sono ancora sviluppate e l’estrazione del petrolio è in mano a Multinazionali straniere. La sua vicinanza alla Repubblica del Congo e alla Repubblica Democratica del Congo ne fa una città di frontiera e non dirado un luogo in cui si pratica il contrabbando e la tratta di esseri umani. Per rispondere a queste necessità, i Frati Cappuccini hanno fondato un orfanatrofio “Il centro Frei Giorgio Zulianello” e le suore Missionarie Francescane del Verbo Incarnato hanno deciso di offrire la loro collaborazione nella gestione dell’opera. 
              Attualmente il Centro accoglie una novantina tra bambini e adolescenti di età compresa fra 12 mesi  e i 17 anni. L’orfanatrofio, a regime residenziale, oltre ad offrire 2 pasti una colazione e una merenda, dà la possibilità di svolgere: attività educative, ricreative, sportive, di rinforzo scolare, assistenza sanitaria, educazione umana e cristiana. Nel Centro vengono offerti anche corsi professionali per favorire i giovani ad inserirsi nel mondo del lavoro. Il tutto ha un costo. Lo Stato dovrebbe collaborare pagando gli stipendi degli educatori ma in realtà spesso non lo fa e le donazioni di alimentari o altro di imprese locali sono rare.
              Solo con un aiuto possiamo continuare ad offrire corsi professionali, libri e divise scolastiche per favorire una formazione solida ed integrale a questi adolescenti e giovani. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini, giovani e famiglie emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
            {
              id: 13,
              name: 'CORAÇAO',
              place: 'Angola - Italia',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Collaborazione per gli studi universitari di giovani angolani in Italia (libri, tasse, esami, vitto, alloggio, documenti).',
              description: `M’Banza Kongo è una città capitale della provincia dello Zaire in Angola. Per ragioni storiche (era l’antica capitale del Regno del Congo) ora è Patrimonio dell’Unesco ma la sua popolazione vive in povertà, pur essendo in una zona petrolifera, in quanto Agricoltura e Industria non sono ancora sviluppate e l’estrazione del petrolio è in mano a Multinazionali straniere. La sua vicinanza alla Repubblica del Congo e alla Repubblica Democratica del Congo ne fa una città di frontiera e non dirado un luogo in cui si pratica il contrabbando e la tratta di esseri umani. Per rispondere a queste necessità, i Frati Cappuccini hanno fondato un orfanatrofio: “Il centro Frei Giorgio Zulianello” e le suore Missionarie Francescane del Verbo Incarnato hanno deciso di offrire la loro collaborazione nella gestione dell’opera. A questi bambini vengono offerti vitto, alloggio una formazione integrale e la possibilità di una assistenza sanitaria e scolastica. Ai giovani che manifestano propensione per lo studio viene offerta la possibilità di proseguire negli studi superiori e all’Università attraverso il “Progetto Coraçao”. Attualmente hanno beneficiato del sostegno 2 giovani angolani che hanno potuto frequentare l’Università in Italia. 
              Il progetto copre: vitto, alloggio, libri, pagamento delle tasse per gli esami. I giovani vengono invitati a cercarsi un lavoro per contribuire ai costi ma questi sforzi non sono sufficienti per coprire le spese. Solo con un aiuto possiamo continuare ad offrire una formazione di qualità (in Angola o all’estero) per promuovere giovani meritevoli. 
              Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti giovani emarginate dalla società. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            },
          ]
        },
        {
          name: 'Italia',
          projects: [
            {
              id: 14,
              name: 'ASILO NIDO',
              place: 'Italia',
              image: new URL('../assets/images/projects/alimentar_a_vida.jpg', import.meta.url).href,
              short_description:'Sostegno Educativo all\'Infanzia (Asili parrocchiali, Spazio Gioco, etc).',
              description: `Sabbione (RE) e Motta Filocastro (VV) sono due realtà dove le suore Missionarie Francescane del Verbo Incarnato hanno dato vita a scuole materne ormai storiche in ambienti di periferia dove ancora non esistevano luoghi educativi per l’infanzia.
              Nel corso degli anni le situazioni storiche sono cambiate, la conformazione dei paesi e del territorio ma la presenza di un luogo educativo di qualità attento alla formazione umana e cristiana dei bimbi e la vicinanza alle famiglie ha fatto sì che questi luoghi diventassero punti di riferimento per la popolazione locale. Attualmente questi centri educativi offrono un servizio per un’ottantina di famiglie. Sempre più necessaria si presenta l’accoglienza di bambini al di sotto dei 3 anni che richiedono un aumento del personale. Le rette, gli aiuti dello stato e le donazioni non sono sufficienti per coprire i costi soprattutto per sostenere la presenza di bambini figli di famiglie con poche possibilità economiche e le parrocchie non sono in grado di offrire più di quanto già fanno. Per evitarne la chiusura è necessario un sostegno esterno.
              Solo con un aiuto possiamo continuare ad offrire un’educazione di qualità attenta alla formazione umana e cristiana di tanti bambini, sostenere situazioni bisognose ed offrire un luogo in cui le famiglie possano sentirsi a casa ed essere sostenute nel loro compito educativo. Fin d’ora ringraziamo tutte le persone che ci sosterranno a mantenere viva quest’opera missionaria che ha una ricaduta non indifferente sul futuro di tanti bambini e famiglie in difficoltà. Con gratitudine assicuriamo un ricordo nella preghiera.`,
            }
          ]
        },
      ],
    };
  },
  scrollBehavior (to) {
    if (to.hash) {
      return {
        el: to.hash
      }
    }
  }
};
</script>