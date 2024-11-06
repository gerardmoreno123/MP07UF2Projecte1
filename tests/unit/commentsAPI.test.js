import { describe, it, beforeEach, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CommentsView from '../../src/views/CommentsAPIView.vue';

describe('CommentsView.vue', () => {
    let wrapper;

    beforeEach(() => {
        // Clear any previous mock for fetch
        vi.restoreAllMocks();
    });

    it('should display loading spinner initially', () => {
        wrapper = mount(CommentsView);
        expect(wrapper.find('.loading-spinner').exists()).toBe(true);
    });

    it('should display comments after loading them', async () => {
        // Simulated mock response for comments
        const mockComments = [
            { id: 1, name: "id labore ex et quam laborum", email: "Eliseo@gardner.biz", body: "laudantium enim quasi est quidem magnam..." },
            { id: 2, name: "quo vero reiciendis velit similique earum", email: "Jayne_Kuhic@sydney.com", body: "est natus enim nihil est dolore omnis..." }
        ];

        // Mock the fetch to return the mock comments
        global.fetch = vi.fn().mockResolvedValue({
            json: () => Promise.resolve(mockComments),
        });

        wrapper = mount(CommentsView);

        // Wait for fetch to complete and Vue to re-render
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick(); // Ensure rendering is updated

        // Ensure the spinner is removed (loading completed)
        await wrapper.vm.$nextTick();

        // Verify the comments are displayed in the DOM
        const commentCards = wrapper.findAll('.card');
        expect(commentCards.length).toBe(mockComments.length);
        expect(commentCards[0].text()).toContain('id labore ex et quam laborum');
        expect(commentCards[1].text()).toContain('quo vero reiciendis velit similique earum');
    });

    it('should show an error message if loading fails', async () => {
        // Mock fetch to simulate an error
        global.fetch = vi.fn().mockRejectedValue(new Error('Error loading comments'));

        wrapper = mount(CommentsView);

        // Wait for the error to be handled and the component to re-render
        await wrapper.vm.$nextTick();
        await wrapper.vm.$nextTick();

        // Verify that the error message is displayed in the DOM
        expect(wrapper.find('.alert-error').exists()).toBe(true);
        expect(wrapper.find('.alert-error').text()).toContain('Error loading comments');
    });
});
