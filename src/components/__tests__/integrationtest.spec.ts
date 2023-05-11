import { describe, it, expect, test } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

import { mount } from '@vue/test-utils';
import GymView from '@/views/GymView.vue'
import MyView from '@/views/HomeView.vue'
import Gym from '@/components/Gym.vue'
import axios from 'axios';
import { shallowMount } from '@vue/test-utils';
window.ResizeObserver = ResizeObserver



    //test
    describe('ComponentRenderGym', () => {
        it('renders the Gym component', async () => {
            const wrapper = shallowMount(Gym, {
                propsData: {
                    myString: 'some string',
                    buttonValue: 'some button value',
                },
            });

            await wrapper.vm.$nextTick();

            // Check that the component renders without errors
            expect(wrapper.exists()).toBe(true);

            // Check that the component has fetched data
            expect(wrapper.vm.data).not.toBe(null);
        });
    });
describe('CorrectDataGym', () => {
    it('Loads correct data for graph', async () => {
        const response = await axios.get('http://localhost:8080/graphdata?gym=$Eindhoven');
        const data = response.data;

        const wrapper = mount(Gym, {
            props: {
                myString: 'Eindhoven',
                data,
            },
        });

        expect(wrapper.vm.$data).toEqual([
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
            { name: '20:00', avg: 90 },
        ]);
    });
});
