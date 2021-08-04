<template>
    <div class="post-box">
        <span class="post-views">{{views}}</span>
        <h3 class="post-title">{{title }}</h3>
        <span class="post-date">{{date}}</span>
        <p class="post-content">
           {{content | shortIt(120,'  ...more')}}
        </p>
        <div class="row">
            <d class="col-sm-6">
                <span class="post-auther">{{auther | upcase() | shortIt(5,'')}}</span>
            </d>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{category | lowcase() }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["views","title","date","content","auther","category"],
    name: "blog_post"
};
</script>
<style lang="scss" scoped>
.post-box{
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #000;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
}
.post-views{
    position: absolute;
    top: 10px;
    right: 15px;
    background-color: #4cAf50;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
}
.post-date{
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
}
.post-content{
    line-height: 1.8;
    color: #666;
}
.post-auther{
    background-color: #607D88;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
}
.post-category{
    background-color: #E91E63;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
}
</style>
