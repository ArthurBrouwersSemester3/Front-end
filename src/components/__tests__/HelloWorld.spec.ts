import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import MyComponent from '../Contact.vue';

describe('MyComponent', () => {
    it('renders correctly', () => {
        const wrapper = mount(MyComponent);
        expect(wrapper.html()).toMatchSnapshot();
    });
}),
describe('Dropdown', () => {
    it('should show options when clicked', () => {
        document.body.innerHTML = `
      <div id="app">
        <select id="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    `

        const select = document.querySelector('#dropdown')
        select.click()

        expect(document.querySelector('#dropdown').options.length).toBe(3)
    })

    it('should select an option when clicked', () => {
        document.body.innerHTML = `
      <div id="app">
        <select id="dropdown">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    `

        const select = document.querySelector('#dropdown')
        select.value = 'option2'
        select.dispatchEvent(new Event('change'))

        expect(select.value).toBe('option2')
    })
})