import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import MyComponent from '../Contact.vue';
import MyView from '@/views/HomeView.vue'

describe('MyComponent', () => {
    it('renders correctly', () => {
        const wrapper = mount(MyComponent);
        expect(wrapper.html()).toMatchSnapshot();
    });
}),

    describe('MyView', () => {
        it('should select an option when clicked', () => {
            const wrapper = mount(MyView)

            // Find the select element inside the MyView component
            const select = wrapper.find('#category')

            // Simulate selecting an option
            select.element.value = 'Eindhoven'
            select.trigger('change')

            // Assert that the select element has the correct value
            expect(select.element.value).toBe('Eindhoven')
            expect(select.element.value).not.toBe('Breda')
        })
    })
