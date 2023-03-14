<template>
  <form @submit.prevent="submitForm">
    <div class="u-flex aic jcc">
      <select v-model="searchCountry">
        <option value="">전체</option>
        <option value="KR">한국</option>
        <option value="US">미국</option>
        <option value="GB">영국</option>
        <option value="JP">일본</option>
        <option value="FR">프랑스</option>
        <option value="HK">홍콩</option>
        <option value="ETC">기타</option>
      </select>
      <input
        type="text"
        v-model="searchText"
        placeholder="검색어를 입력하세요."
      />
      <button type="submit">검색</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      searchText: '',
      searchCountry: ''
    }
  },
  methods: {
    submitForm() {
      if (this.searchText.length > 0) {
        this.$emit('search', {
          query: this.searchText,
          country: this.searchCountry
        })
      } else {
        alert('검색어를 입력하세요.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  select {
    width: 100px;
    height: 45px;
    padding: 0 12px;
    font-size: 16px;
    background: #fefefe;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    transition: border-color ease-out 300ms;
    appearance: auto;
    &:focus {
      outline: none;
      border-color: #8f1e12;
    }
  }
  input {
    width: 550px;
    height: 45px;
    margin-left: 12px;
    padding: 0 12px;
    font-size: 16px;
    background: #fefefe;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    transition: border-color ease-out 300ms;
    &:focus {
      outline: none;
      border-color: #8f1e12;
    }
  }
  button {
    width: 120px;
    height: 45px;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #fefefe;
    background-color: #c32918;
    border-radius: 5px;
    transition: background-color ease-out 300ms;
    &:hover {
      background-color: #8f1e12;
    }
  }
}
</style>
