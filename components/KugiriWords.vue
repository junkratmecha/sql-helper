<template>
  <div class="flex justify-center">
    <div class="form-check my-auto">
      <input
        v-model="word"
        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        value="改行"
        checked
        @change="onChange"
      >
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        改行
      </label>
    </div>
    <div class="ml-3 form-check my-auto">
      <input
        v-model="word"
        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        value="Tab"
        @change="onChange"
      >
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
        Tab
      </label>
    </div>
    <div class="ml-3 form-check flex">
      <div class="my-auto">
        <input
          v-model="word"
          class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          :value="input"
          @change="onChange"
        >
      </div>
      <div>
        <input v-model="input" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="区切り文字">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      word: '改行',
      input: ''
    }
  },
  methods: {
    onChange (event) {
      this.$emit('toParent', this.word)
    }
  }
}
</script>
