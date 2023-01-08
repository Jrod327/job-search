<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ verb }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light tracking-tight">
      Find your next job at Hooli.
    </h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";

export default {
  name: "TheHeadline",
  data() {
    return {
      verb: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        // build: this.verb === "Build",
        // create: this.verb === "Create",
        // design: this.verb === "Design",
        // code: this.verb === "Code",

        // REFACTORED TO:
        [this.verb.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeVerb();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeVerb() {
      this.interval = setInterval(() => {
        const headlineVerbs = ["Build", "Create", "Design", "Code"];
        // const currentVerbIndex = headlineVerbs.indexOf(this.verb);
        // const nextVerbIndex = (currentVerbIndex + 1) % 4;
        // const nextVerb = headlineVerbs[nextVerbIndex];
        // this.verb = nextVerb;

        // REFACTORED by writing a generic nextElementInList function in a utils folder and importing it here.
        this.verb = nextElementInList(headlineVerbs, this.verb);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
