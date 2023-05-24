import { describe, it, expect } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

import Gym from '@/components/Gym.vue'
import { shallowMount } from '@vue/test-utils';
window.ResizeObserver = ResizeObserver



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
