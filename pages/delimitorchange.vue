<template>
  <div class="bg-green-100 h-screen">
    <nav-bar />

    <div class="flex flex-wrap flex-row">
      <div class="my-10 w-5/12 text-center justify-center">
        <kugiri-words @toParent="inputBefore" />
      </div>
      <div class="my-10 block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          Dilimitors - Changer
        </h5>
      </div>
      <div class="my-10 w-5/12 text-center justify-center">
        <kugiri-words @toParent="inputAfter" />
      </div>
    </div>
    <div class="flex flex-wrap flex-row">
      <div class="w-5/12 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-10/12" style="background-color:#14bc84;">
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
あ,い,う,え,お"
          >
          </textarea>
        </div>
        <div class="flex justify-center">
          文字数:{{ org.length }} 行数:
          <div v-if="org !== ''">
            {{ ( org.match( /\n/g ) || [] ).length + 1 }}
          </div>
          <div v-else>
            0
          </div>
        </div>
      </div>

      <div class="w-2/12 text-center">
        <button
          type="button"
          class="mt-32 inline-block px-9 py-4 text-white font-medium text-base leading-tight uppercase rounded-full shadow-md hover:dark:bg-emerald-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          style="background-color:#14bc84;"
          @click="stringTransformed"
        >
          → 変換
        </button>
      </div>

      <div class="w-5/12 text-center justify-center">
        <div class="justify-center flex">
          <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-10/12" style="background-color:#14bc84;">
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
あ
い
う
え
お"
          >
          </textarea>
        </div>
        <div class="flex justify-center">
          文字数:{{ changed.length }} 行数:
          <div v-if="changed !== ''">
            {{ ( changed.match( /\n/g ) || [] ).length + 1 }}
          </div>
          <div v-else>
            0
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelimitorChange',
  data () {
    return {
      org: '',
      changed: '',
      beforeInputChild: '改行',
      afterInputChild: '改行'
    }
  },
  methods: {
    stringTransformed () {
      let logic = ''
      let orgArray = []
      if (this.org !== '') {
        if (this.beforeInputChild === '改行') {
          orgArray = this.org.split(/\r\n|\n/)
        } else if (this.beforeInputChild === 'Tab') {
          orgArray = this.org.split(/\s/)
        } else {
          orgArray = this.org.split(this.beforeInputChild)
        }
        if (this.afterInputChild === '改行') {
          logic = orgArray.join('\n')
        } else if (this.afterInputChild === 'Tab') {
          logic = orgArray.join('\t')
        } else {
          logic = orgArray.join(this.afterInputChild)
        }
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
    },
    inputBefore (input) {
      this.beforeInputChild = input
    },
    inputAfter (input) {
      this.afterInputChild = input
    }
  }
}
</script>

<style>
#original::placeholder {
   text-align: center;
}
</style>
