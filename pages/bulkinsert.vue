<template>
  <div class="bg-green-100 h-screen">
    <nav-bar />

    <div class="grid col-span-4 relative text-center flex justify-center">
      <div class="my-10 block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Insert Ignore Into
        </h5>
      </div>
    </div>

    <div class="flex flex-wrap flex-row">
      <div class="w-5/12 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-500 w-10/12">
            <div class="flex justify-between">
              <span class="self-center font-semibold whitespace-nowrap dark:text-white">Before</span>
              <div>
                <button class="bg-white hover:bg-slate-200 font-bold text-sm py-1 px-2 border-b-4 border-slate-200 hover:border-slate-400 rounded" @click="copyToClipboardOrg()">
                  Copy
                </button>

                <button class="bg-white hover:bg-slate-200 font-bold text-sm py-1 px-2 border-b-4 border-slate-200 hover:border-slate-400 rounded" @click="removetextOrg()">
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-center flex">
          <textarea
            id="original"
            v-model="org"
            class="shadow-lg text-left form-control block w-10/12 px-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="15"
            placeholder="変換前のデータを入力してください。
user_id,user_name,user_age
100, ジャック, 10,
200, メアリー, 20"
          >
          </textarea>
        </div>
      </div>

      <div class="w-2/12 text-center">
        <button
          type="button"
          class="mt-32 inline-block px-9 py-4 dark:bg-emerald-500 text-white font-medium text-base leading-tight uppercase rounded-full shadow-md hover:dark:bg-emerald-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          @click="stringTransformed"
        >
          → 変換
        </button>
      </div>

      <div class="w-5/12 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-emerald-500 w-10/12">
            <div class="flex justify-between">
              <span class="self-center font-semibold whitespace-nowrap dark:text-white">After</span>
              <div>
                <button class="bg-white hover:bg-slate-200 font-bold text-sm py-1 px-2 border-b-4 border-slate-200 hover:border-slate-400 rounded" @click="copyToClipboardChanged()">
                  Copy
                </button>
                <button class="bg-white hover:bg-slate-200 font-bold text-sm py-1 px-2 border-b-4 border-slate-200 hover:border-slate-400 rounded" @click="removetextChanged()">
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-center flex">
          <textarea
            id="original"
            v-model="changed"
            class="shadow-lg text-left form-control block w-10/12 px-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="15"
            placeholder="変換結果が表示されます。
Insert Ignore Into テーブル名
('user_id','user_name','user_age'),
('100','ジャック','10'),
('200','メアリー','20')
"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BulkInsert',
  data () {
    return { org: '', changed: '' }
  },
  methods: {
    stringTransformed () {
      let logic = 'Insert Ignore Into テーブル名' + '\n'
      if (this.org !== '') {
        const orgArray = this.org.split(/\n/)
        orgArray.forEach(function (oa) {
          const oaChildArray = oa.split(',')
          oa = ''
          oaChildArray.forEach(function (oca) {
            oa += '"' + oca + '", '
          })
          oa = oa.slice(0, -2)
          oa = '(' + oa + '),'
          logic += oa + '\n'
        })
        logic = logic.slice(0, -2)
      }
      this.changed = logic
    },
    removetextOrg () {
      this.org = ''
    },
    removetextChanged () {
      this.changed = ''
    },
    copyToClipboardOrg () {
      navigator.clipboard.writeText(this.org)
    },
    copyToClipboardChanged () {
      navigator.clipboard.writeText(this.changed)
    }
  }
}
</script>

<style>
#original::placeholder {
   text-align: center;
}
</style>
