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

    props: {
        progress: Number
    },
}
</script>

<style>
    .progress-bar {
        width: 75vw;
        min-height: 20px;
        border: 2px solid rgba(0, 0, 0, 0.207);
        position: relative;
        border-radius: 1rem;
    }
    
    .progress-bar .fill {
        height: 100%;
        border-radius: 1rem;
        background-color: rgba(0, 0, 0, 0.207);
        transition: .3s ease-in;
    }

    .progress-bar .text {
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;
        margin: 0;
    }
</style>