const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    ppC() {
      return this.counter++;
    },

    mmC() {
      if (this.counter > 0) return this.counter--;
      else return 0;
    },

    submitForm(event) {
      alert(this.name);
    },

    resetBut() {
      this.name = "";
    },
  },
});

app.mount("#events");
