<template>
    <div>
        <nav class="left-area">
            <sidebar />
        </nav>

        <h1 style="margin: 0 230px">{{subtitle}}</h1>
        <hr />
        <div class="content">
            <router-view class="sub-frame"></router-view>
        </div>
    </div>
</template>
<script>
import sidebar from "@/components/Sidebar.vue";
export default {
    components: { sidebar },
    data: function() {
        return {
            show: true,
            subtitle: this.$route.name
        };
    },
    watch: {
        $route() {
            this.subtitle = this.$route.name;
        }
    }
};
</script>
<style>
/* content */

.sub-frame {
    box-sizing: border-box;
    /* max-width: 1200px; */
    padding: 20px 50px;
    margin: 0 auto;
}
.left-area {
    /* position: relative; */
    z-index: 1;
    float: left;
}

html,
body {
    margin: 0;
    height: 100%;
    padding: 0;
    overflow: hidden;
}
.content {
    position: relative;
    overflow: auto;
    height: 100%;
}
.content-area {
    text-align: center;
}
</style>
