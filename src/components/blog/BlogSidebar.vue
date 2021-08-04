<template>
    <div class="side-bar">
{{title | toUpper}}    </div>
</template>

<script>
export default {
    data:function(){
        return{
            title:'testing for sidebar',
        }
    },
    name: "blog_sidebar",
    filters:{//local filter
    toUpper:function(value){
        return value.toUpperCase();}
    }
};
</script>
