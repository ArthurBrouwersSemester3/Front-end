import { describe, it, expect, test } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

import { mount } from '@vue/test-utils';
import GymView from '@/views/GymView.vue'
window.ResizeObserver = ResizeObserver

    describe('ChosenGymPlace', () => {
        test('displays chosen gym', () => {
            const wrapper = mount(GymView, {
                props: {
                    myString: 'Breda'
                }
            })
            expect(wrapper.find('h1').text()).toBe('Breda')
        })
    });
describe('GymView', () => {
    it('displays the error message when trying to go back from Monday', async () => {
        const wrapper = mount(GymView, {
            props: {
                myString: ''
            }
        })

        const previousButton = wrapper.find('button:first-of-type')
        await previousButton.trigger('click')

        expect(wrapper.find('p').text()).toContain('u can not go previous when it is monday')
    })
        it('displays the error message when trying to go forward from Sunday', async () => {
            const wrapper = mount(GymView, {
                props: {
                    myString: 'Hello World'
                }
            })

            // Cast to the component type with the daynumber property
            const gymView = wrapper.vm as any as { daynumber: number }

            // Set daynumber to 6 (Sunday)
            gymView.daynumber = 6

            const nextButton = wrapper.find('button:last-of-type')
            await nextButton.trigger('click')

            expect(wrapper.find('p').text()).toContain('u can not go next when it is sunday')
        })
    })
