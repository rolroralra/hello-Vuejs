<template>
    <div>
        <p>{{ counter }}</p>
        <button @click="increaseCounter">증가</button>
        <button @click="decreaseCounter">감소</button>
    </div>
</template>

<script>
export default {
    data: function() {
        // 2. props 값을 초기 값으로 하는 로컬 데이터 속성 정의
        return {
            counter: this.baseCount
        }; // data 객체의 속성은 모두 프록시 처리되어 vue에 의해 관찰, 관리된다
    },
    // 1. { props 명 : 타입 }
    props: { baseCount: Number },
    methods: {
        // this는 vue에 의해 관리되는 vm객체를 가르킨다.
        // data와 methods 객체의 속성은 this에서 바로 참조가 가능하다.
        increaseCounter() {
            this.counter += this.baseCount;
            this.$emit("increase-counter", this.baseCount);
        },
        decreaseCounter() {
            this.counter -= this.baseCount;
            this.$emit("decrease-counter", this.baseCount);
        }
    }
};
</script>

<style>
</style>
