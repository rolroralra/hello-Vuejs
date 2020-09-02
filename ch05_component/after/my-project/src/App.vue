<template>
    <div style="text-align: center">
        <div style="display:inline-block">
            <!-- sum component -->
            <sum></sum>
            <br />
            <hr />
            <!-- discount component -->
            <discount></discount>
        </div>
    </div>
</template>

  <script>
/* 사용할 컴포넌트 선언  */
import sum from "./components/Sum.vue";
import discount from "./components/Discount.vue";

export default {
    /* 사용할 컴포넌트 등록  */
    components: { sum, discount }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>