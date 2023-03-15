import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import MyComponent from '../Contact.vue';

describe('MyComponent', () => {
    it('renders correctly', () => {
        const wrapper = mount(MyComponent);
        expect(wrapper.html()).toMatchSnapshot();
    });
});