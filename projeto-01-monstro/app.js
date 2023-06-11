new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult() {
            return [this.playerLife, this.monsterLife].some(
                (life) => life == 0
            );
        },
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },

        stopGame() {
            this.running = false;
        },

        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player');
            if(this.monsterLife > 0 ) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
            }
        },

        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0;
            const hurt = this.generateRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);

            this.registerLog(`${source} atingiu ${target} com ${hurt} de dano`, cls);
        },

        heal(min, max) {
            const heal = this.generateRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);

            this.registerLog(`Jogador recebeu ${heal} pontos de vida`, 'player');
        },

        healAndHurt() {
            this.heal(10, 15);
            this.hurt('playlerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },

        generateRandom(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },

        registerLog(text, cls) {
            this.logs.unshift({ text, cls });
        }
    },
    watch: {
        hasResult(value) {
            if(value) this.running = false;
        }
    },
});
