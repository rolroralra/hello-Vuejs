<template>
    <div class="side-bar">
        <h1>
            <router-link to="/">Vue</router-link>
        </h1>
        <ul>
            <li><router-link to="/component">Component</router-link></li>
            <li><router-link to="/product">Product</router-link></li>
        </ul>
    </div>
</template>

<style>
.side-bar {
    width: 200px;
    height: 100vh;
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #fff;
}

.side-bar > h1 {
    text-align: left;
    padding: 20px 40px;
    margin: 0;
}

.side-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.side-bar li {
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    text-align: left;
    cursor: pointer;
}

.side-bar li > a {
    padding: 15px 40px;
    display: block;
}

.side-bar li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.side-bar ul li a.router-link-exact-active {
    font-weight: bold;
    color: #5b4df0;
}
</style>
