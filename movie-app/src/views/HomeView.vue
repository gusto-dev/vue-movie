<template>
  <div class="inner-container">
    <div :class="result.length !== 0 ? 'on' : 'off'">
      <h2>영화 검색</h2>
      <SearchForm :data="params" @search="getMovieData"></SearchForm>
      <SearchList :list="result"></SearchList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchForm from '@/components/search/SearchForm.vue'
import SearchList from '@/components/search/SearchList.vue'

export default {
  data() {
    return {
      params: {
        query: '',
        display: 10,
        start: 1,
        genre: '',
        country: ''
      },
      result: []
    }
  },
  components: { SearchForm, SearchList },
  methods: {
    async getMovieData({ query, country }) {
      this.params.query = query
      this.params.country = country
      try {
        const { data } = await axios.get(process.env.VUE_APP_API_URL, {
          params: this.params
        })
        this.result = data.items
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inner-container > div {
  border: 1px solid rgba(61, 53, 36, 0.3);
  box-shadow: 0 0 4px rgba(61, 53, 36, 0.3);
  border-radius: 10px;
  transition: padding-top ease-out 300ms;
  background: #fbf7ec;
}
.on {
  padding-top: 40px;
  h2 {
    display: none;
  }
}
.off {
  padding-top: 80px;
  h2 {
    display: block;
  }
}
h2 {
  margin-bottom: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>
