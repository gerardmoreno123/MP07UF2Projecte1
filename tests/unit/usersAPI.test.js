import { describe, it, beforeEach, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import UsersView from '../../src/views/UsersAPIView.vue';
import axios from 'axios';

describe('UsersView.vue', () => {
    let wrapper;

    beforeEach(() => {
        // Clear any previous mock for axios
        vi.restoreAllMocks();
    });

    it('should display loading spinner initially', () => {
        wrapper = mount(UsersView);
        expect(wrapper.find('.loading-spinner').exists()).toBe(true);
    });

    it('should display users after loading them', async () => {
        // Simulated mock response for users
        const mockUsers = [
            { id: 1, firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@x.dummyjson.com', age: 28, company: { name: 'Dooley, Kozey and Cronin' }, image: 'https://dummyjson.com/icon/emilys/128' }

        ];

        // Mock the axios get request to return the mock users data
        vi.spyOn(axios, 'get').mockResolvedValue({
            data: { users: mockUsers }
        });

        wrapper = mount(UsersView);

        // Wait for the axios request to complete and for the component to re-render
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick(); // Ensure rendering is updated

        // Verify that the loading spinner is removed
        expect(wrapper.find('.loading-spinner').exists()).toBe(false);

        // Verify that user data is displayed
        const userCards = wrapper.findAll('.card');
        expect(userCards.length).toBe(mockUsers.length);
        expect(userCards[0].text()).toContain('Emily Johnson');
    });

    it('should show an error message if loading fails', async () => {
        // Mock the axios get request to simulate an error
        vi.spyOn(axios, 'get').mockRejectedValue(new Error('Error loading users'));

        wrapper = mount(UsersView);

        // Wait for the error to be handled and the component to re-render
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        // Verify that the error message is displayed in the DOM
        expect(wrapper.find('.alert-error').exists()).toBe(true);
        expect(wrapper.find('.alert-error').text()).toContain('Error loading users');
    });
});
