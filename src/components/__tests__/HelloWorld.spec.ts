import { describe, it, expect, test } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

import { mount } from '@vue/test-utils';
import MyComponent from '../Contact.vue';
import GymView from '@/views/GymView.vue'
import MyView from '@/views/HomeView.vue'
import Gym from '@/components/Gym.vue'

window.ResizeObserver = ResizeObserver


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
describe('GymView', () => {
    test('displays chosen gym', () => {
        const wrapper = mount(GymView, {
            props: {
                myString: 'Breda'
            }
        })
        expect(wrapper.find('h1').text()).toBe('Breda')
    })
}),
    describe('Gym', () => {
        it('Loads correct data for graph', () => {
            const wrapper = mount(Gym, {
                props: {
                    myString: 'Eindhoven'
                }
            });
            //test
            expect(wrapper.vm.chosen).toBe('Eindhoven')
            expect(wrapper.vm.data).toEqual([
                { name: 'Mon', avg: 80 },
                { name: 'Tue', avg: 90 },
                { name: 'Wed', avg: 40 },
                { name: 'Thu', avg: 10 },
                { name: 'fri', avg: 10 },
                { name: 'Sat', avg: 40 },
                { name: 'Sun', avg: 90 }
            ])
        });
    });