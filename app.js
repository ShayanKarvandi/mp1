const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // fullname: "",
    };
  },

  watch: {
    counter(value) {
      if (value >= 100 || value < 0) this.counter = 0;
    },
  },

  computed: {
    fullname() {
      if (this.name === "") return "";
      return this.name + " " + this.lastname;
    },
  },

  methods: {
    ppC() {
      return this.counter++;
    },

    mmC() {
      return this.counter--;
    },

    submitForm(event) {
      alert(this.fullname);
    },

    resetBut() {
      this.name = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
