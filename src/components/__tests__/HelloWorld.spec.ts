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
            //testingssssssss
            expect(wrapper.vm.chosen).toBe('Eindhoven')
            expect(wrapper.vm.data).toEqual([
                { name: '8:00', avg: 80 },
                { name: '9:00', avg: 90 },
                { name: '10:00', avg: 40 },
                { name: '11:00', avg: 10 },
                { name: '12:00', avg: 10 },
                { name: '13:00', avg: 40 },
                { name: '14:00', avg: 90 },
                { name: '15:00', avg: 90 },
                { name: '16:00', avg: 90 },
                { name: '17:00', avg: 90 },
                { name: '18:00', avg: 90 },
                { name: '19:00', avg: 90 },
                { name: '20:00', avg: 90 }
            ])
        });
    });