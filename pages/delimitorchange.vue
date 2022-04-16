<template>
  <div class="bg-green-100 h-screen">
    <nav-bar />

    <div class="grid col-span-4 relative text-center flex justify-center">
      <div class="my-10 block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Dilimitor Change
        </h5>
      </div>
    </div>

    <div class="flex flex-wrap flex-row">
      <div class="w-2/5 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-500 w-96">
            <div class="flex items-center">
            <span class="self-center font-semibold whitespace-nowrap dark:text-white">before</span>
            </div>
          </div>
        </div>
        <div class="justify-center flex">
          <textarea
            id="original"
            class="shadow-lg text-center form-control block w-96 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="15"
            placeholder="変換前のデータを入力してください。
あ,い,う,え,お"
          >
          </textarea>
        </div>
      </div>

      <div class="w-1/5 text-center">
        <button type="button" class="mt-20 inline-block px-9 py-4 dark:bg-emerald-500 text-white font-medium text-base leading-tight uppercase rounded-full shadow-md hover:dark:bg-emerald-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
          → 変換
        </button>
      </div>

      <div class="w-2/5 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-500 w-96">
            <div class="flex items-center">
            <span class="self-center font-semibold whitespace-nowrap dark:text-white">after</span>
            </div>
          </div>
        </div>
        <div class="justify-center flex">
          <textarea
            id="original"
            class="shadow-lg text-center form-control block w-96 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="15"
            placeholder="変換結果が表示されます。
あ
い
う
え
お"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelimitorChange'
}
</script>
