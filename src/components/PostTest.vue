// 熟悉mock是什麼用
<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post.id">
      <p>
        {{ post.id }}: <strong>{{ post.title }}</strong>
      </p>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      posts: []
    };
  },

  async created() {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts`
    );
    this.posts = response.data;
  }
};
</script>