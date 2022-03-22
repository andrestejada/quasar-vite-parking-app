
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import { Quasar } from 'quasar'

import CounterPage from '~/pages/index.vue'
import { createI18n } from 'vue-i18n'



const i18n = createI18n({
  locale:'en',
  messages:{
    en:{
      title:'Hello testing'
    },
    es:{
      title:'hola testing'
    }
  }
})

const wrapperFactory = () => mount(CounterPage, {
  global: {
    plugins: [Quasar,i18n]
  }
})

test('mount component', () => {
  expect(CounterPage).toBeTruthy()
  
  const wrapper = wrapperFactory()
  console.log(wrapper.html())
  const count = wrapper.get('[data-id="counter"]')

  expect(count.text()).toContain('0')
  expect(wrapper.html()).toMatchSnapshot()
})

// test('handle + click', async () => {
//   const wrapper = wrapperFactory();
//   const count = wrapper.get('[data-id="counter"]');
//   const addBtn = wrapper.get('[data-id="add"]');

//   await addBtn.trigger('click')

//   expect(count.text()).toContain('1')
  
//   await addBtn.trigger('click')
  
//   expect(count.text()).toContain('2')
//   expect(wrapper.html()).toMatchSnapshot()
// })

