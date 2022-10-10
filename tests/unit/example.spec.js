// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { mount } from '@vue/test-utils';
import NavBar from "/components/NavBar.vue";

// test("test App Component",function(){
//   const wrapper = mount(NavBar);
//   expect(wrapper.text()).toBe('Hello World')
// })


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
