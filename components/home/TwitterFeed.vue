<!-- components/TwitterFeed.vue -->
<template>
    <v-col cols="12" md="6" class="py-4">
        <v-card class="elevation-4 twitter-card">
            <v-card-text class="twitter-container">
              <div class='twitter-timeline' data-handle='francescanverbo' height='500' data-theme='light' ></div>            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
  name: "TwitterTimeline",
  props: {
    dataHandle: {
      type: String,
      default: "francescanverbo"
    },
    dataHeight: {
      type: String,
      default: "500"
    },
    dataTheme: {
      type: String,
      default: "light"
    }
  },
  mounted() {
    this.loadTwitterWidget();
  },
  methods: {
    loadTwitterWidget() {
      // Check if the widget script is already loaded
      if (!window.twttr) {
        const script = document.createElement("script");
        script.src = "https://www.athabasca.dev/content/scripts/widget.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          this.initializeTwitterTimeline();
        };
      } else {
        this.initializeTwitterTimeline();
      }
    },
    initializeTwitterTimeline() {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(this.$refs.twitterTimeline);
      }
    }
  }
};
</script>

<style scoped>
.twitter-card {
    height: 100%;
}

.twitter-container {
    height: 100%;
}

:deep(.twitter-timeline) {
    height: 100% !important;
}

:deep(iframe) {
    height: 100% !important;
}

</style>
