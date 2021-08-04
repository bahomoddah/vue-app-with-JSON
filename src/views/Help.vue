<template>
    <div class="help">
        <h2>{{ namePage }}</h2>
        <p>{{ pageDescription }}</p>
    
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            namePage: "Help",
            pageDescription: "ask your quation?"
        };
    },
    name: "help"
};
</script>
