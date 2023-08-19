export default {
  computed: {
    ex1() {
      return `${this.exercicio1}`.replaceAll(" ", ",");
    },
    ex2() {
      let novaFrase = `${this.exercicio2}`
        .replace(/[ ]+/, " ")
        .split(" ")
        .map(p => `${p} (${p.length})`)
        .join(' ');

      return novaFrase.trim();
    },
  },
};