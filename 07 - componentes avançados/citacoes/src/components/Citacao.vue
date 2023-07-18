<template>
    <div class="citacao">
        <div class="row">
            <slot name="autor"></slot>
            <slot name="fonte"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {

    data() {
        return {

        }
    }

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h6 {
        font-weight: normal;
        font-style: italic;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
