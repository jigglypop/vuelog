<template>
  <div id="app">
    <router-view name="header" />
    <router-view name="menu" />
    <router-view name="footer" />
    <router-view />
  </div>
</template>


<style>
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("./assets/NanumBarunGothicSubset.woff2"); 
  }
  #root{
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height: 100vh;
  }
  #app{
    position: relative;
    margin-top : 50px;
    width: 100%;
    height: 100%;
  }
  body {
    background-size:cover;
    font-family: "NanumBarunGothic", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #141414;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(45deg, #a8ff78, #78ffd6);
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color:transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
