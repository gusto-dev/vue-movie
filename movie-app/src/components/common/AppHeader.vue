<template>
  <header>
    <div class="global-banner">
      <div class="inner-container">
        <div class="u-flex aic jce">
          <a
            href="https://github.com/gusto-dev/movie-app"
            target="_blank"
            class="nunito"
            >Github</a
          >
          <!-- <a
            href="https://blog.naver.com/jiji_0000"
            target="_blank"
            class="nunito"
            >jiji's Blog</a
          > -->
        </div>
      </div>
    </div>
    <div class="header-wrap">
      <div class="inner-container">
        <div class="u-flex aic jcb">
          <h1>
            <router-link to="/" class="u-flex aic jcc nunito">Logo</router-link>
          </h1>
          <!-- <nav>
            <router-link to="/">Home</router-link>
          </nav> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.global-banner {
  background: #444;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    padding: 0 8px;
    font-size: 16px;
    color: #fefefe;
  }
}
.header-wrap {
  h1 {
    a {
      width: 200px;
      height: 55px;
      font-size: 24px;
      font-weight: 500;
    }
  }
}
</style>
