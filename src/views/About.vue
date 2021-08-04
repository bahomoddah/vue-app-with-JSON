<template>
    <div class="about">
        <h1>{{ namePage }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            namePage: "About Us",
            pageDescription: "Here everything about us"
        };
    },
    name: "About"
};
</script>
