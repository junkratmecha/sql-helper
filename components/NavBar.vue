<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-500">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <nuxt-link to="/" class="flex items-center">
          <img src="/sql-helper/sql-helper.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"></img>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SQL ヘルパー</span>
        </nuxt-link>
        <div id="mobile-menu" class="hidden w-full md:block md:w-auto">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <nuxt-link to="/wherein" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-emerald-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                WhereIn句
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/bulkinsert" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-emerald-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Bulk Insert作成
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/delimitorchange" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-emerald-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                区切り文字変更
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
