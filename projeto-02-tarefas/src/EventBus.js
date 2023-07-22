import Vue from 'vue';
export default new Vue({
    methods: {
        onAddTask(callback) {
            this.$on('addTask', callback)
        },
        onChangeProgress(callback) {
            this.$on('onChangeProgress', callback)
        },
        registerTask(task) {
            this.$emit('addTask', task);
        }
    }
});