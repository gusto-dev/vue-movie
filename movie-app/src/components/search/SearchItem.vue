<template>
  <li>
    <a :href="item.link" target="_blank" class="u-flex aic">
      <div class="image">
        <img
          :src="
            item.image.length !== 0
              ? item.image
              : require('@/assets/images/no_image.png')
          "
          :alt="item.title"
        />
      </div>
      <div class="text">
        <h5 v-html="item.title"></h5>
        <dl>
          <dt>감독 :</dt>
          <dd>{{ item.director.slice(0, -1) }}</dd>
        </dl>
        <dl>
          <dt>출연 :</dt>
          <dd>{{ item.actor.slice(0, -1) }}</dd>
        </dl>
        <dl>
          <dt>개봉연도 :</dt>
          <dd>{{ item.pubDate }}</dd>
        </dl>
        <dl>
          <dt>평점 :</dt>
          <dd>{{ item.userRating }}</dd>
        </dl>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  created() {
    console.log(this.item)
  }
}
</script>

<style lang="scss" scoped>
li {
  a {
    padding: 16px;
    border: 1px solid rgba(61, 53, 36, 0.3);
    border-radius: 5px;
    transition: background-color ease-out 300ms;
    &:hover {
      background-color: #f7db8e;
    }
  }
}
li + li {
  margin-top: 12px;
}
.image {
  width: 110px;
  img {
    width: 100%;
  }
}
.text {
  display: block;
  flex: 1;
  margin-left: 16px;
  h5 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 700;
  }
  dl {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
  dt {
    margin-right: 8px;
  }
}
</style>
