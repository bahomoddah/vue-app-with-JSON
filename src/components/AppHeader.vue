<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                MASO
            </div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>
                <router-link to="/help" tag="li">
                    <a>Help</a>
                </router-link>
                <router-link to="/contactus" tag="li">
                    <a>ContactUs</a>
                </router-link>
                <router-link to="/blog" tag="li" replace>
                    <a>Blog</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;
}
.logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    text-align: center;
    width: 100px;
}
ul {
    float: left;
    width: calc(100% - 100px);
    margin: 0;

    li {
        padding: 20px;
        display: inline-block;
        font-size: 18px;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
}
</style>
