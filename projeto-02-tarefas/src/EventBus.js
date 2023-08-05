import Vue from 'vue';
export default new Vue({
    methods: {
        onAddTask(callback) {
            this.$on('addTask', callback)
        },
        registerTask(task) {
            this.$emit('addTask', task);
        },
        toggleDoneState(idx) {
            this.$emit('onMarkAsDone', idx);
        },
        onToggleDoneState(callback) {
            this.$on('toggleDoneState', callback);
        },
        onRemoveTask(callback) {
            this.$on('removeTask', callback)
        },
        removeTask(idx) {
            this.$emit('removeTask', idx);
        }
    }
});