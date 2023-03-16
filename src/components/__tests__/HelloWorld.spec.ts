import { describe, it, expect, test } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

import { mount } from '@vue/test-utils';
import MyComponent from '../Contact.vue';
import GymView from '@/views/GymView.vue'

window.ResizeObserver = ResizeObserver


describe('MyComponent', () => {
    it('renders correctly', () => {
        const wrapper = mount(MyComponent);
        expect(wrapper.html()).toMatchSnapshot();
    });
}),

describe('GymView', () => {
    test('displays chosen gym', () => {
        const wrapper = mount(GymView, {
            props: {
                myString: 'Breda'
            }
        })
        expect(wrapper.find('h1').text()).toBe('Breda')
    })
})