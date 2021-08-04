<template>
    <div class="blog">
        <h1>{{ namePage }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPosts 
                        v-for="post in posts" 
                        :key="post.id"
                        :views="post.views"
                        :title="post.title"
                        :date="post.date"
                        :content="post.content"
                        :auther="post.auther"
                        :category="post.category" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts.json";
export default {
    data: function() {
        return {
            namePage: "Blog",
            pageDescription: "you are in blog page",
            posts:JsonPosts
        };
    },
    name: "Blog",
    components: {
        BlogPosts,
        BlogSidebar
    }
};
</script>
