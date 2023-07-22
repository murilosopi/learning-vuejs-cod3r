<template>

    <div class="progress-bar">
        <p class="text">{{ progress }}%</p>
        <div class="fill" :style="{width: progress+'%'}">
        </div>
    </div>

</template>

<script>
import EventBus from '@/EventBus';
export default {

    data() {
        return {
            progress: 0
        }
    },

    created() {
        EventBus.onChangeProgress((obj) => {
            const res = Math.round(100*obj.done/obj.total);
            this.progress = res ? res : 0;
        });
    }
}
</script>

<style>
    .progress-bar {
        width: 75vw;
        min-height: 20px;
        border: 1px solid rgba(31, 45, 41, 0.434);
        position: relative;
        border-radius: 1rem;
    }

    .progress-bar .fill {
        height: 100%;
        border-radius: 1rem;
        background-color: rgba(15, 18, 17, 0.434);
    }

    .progress-bar .text {
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;
        margin: 0;
    }
</style>