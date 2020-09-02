<template>
    <div class="content-area">
        <h3>1.이미지 GET 테스트</h3>
        <img :src="imgSrc" />
        <br />
        <button @click="changeRandomImg">Change Random Image</button>
        <hr />
        <h3>2.로컬 API 테스트</h3>
        <button @click="localAPI">로컬 API test</button>
        <br />
        <span>{{answer}}</span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            imgSrc: "https://picsum.photos/200/200/?image=100",
            answer: ""
        };
    },
    methods: {
        changeRandomImg() {
            // 0~255사이의 랜덤값을 GET 요청
            this.$axios
                .get(
                    "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
                )
                // 요청에 성공하면 실행될 메소드
                .then(response => {
                    console.log(response);
                    const no = response.data.data[0];
                    this.imgSrc = "https://picsum.photos/200/200/?image=" + no;
                });
        },
        localAPI() {
            this.$axios
                .get("http://localhost:8888/axiostest")
                .then(response => {
                    console.log(response);
                    this.answer = response.data;
                })
                .catch(ex => {
                    console.log("ERROR GET METHOD :", ex);
                });
        }
    }
};
</script>
