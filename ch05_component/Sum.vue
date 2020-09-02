<template>
    <div style="text-align: center">
        <!-- props를 전달할 때는 HTML 속성을 전달하듯이 사용할 수 있다 -->
        <!-- HTML의 속성은 대소문자를 구분하지 않으므로 kebab-case(하이픈 구분)를 사용해야 한다 -->
        <div style="display:inline-block">
            <!-- 1. counter 컴포넌트 선언 -->
            <!-- 2. props 속성에 대한 v-bind  -->
            <!-- 3. counter 컴포넌트에서 발신된 이벤트를 v-on: 으로 수신 -->
            <counter></counter>
        </div>
        <div style="display:inline-block">
            <!-- 1. counter 컴포넌트 선언 -->
            <!-- 2. props 속성에 대한 v-bind  -->
            <!-- 3. counter 컴포넌트에서 발신된 이벤트를 v-on: 으로 수신 -->
            <counter></counter>
        </div>
    </div>
</template>
<script>
import counter from "./Counter.vue"; // 사용할 컴포넌트 선언

export default {
    components: { counter } // 사용할 컴포넌트 등록
};
</script>
