import { describe, it, beforeEach, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CalculatorView from '../../src/views/CalculatorView.vue';

describe('CalculatorView.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CalculatorView);
    });

    function findButtonByText(text) {
        return wrapper.findAll('button').find(button => button.text() === text);
    }

    it('should display 0 initially', () => {
        expect(wrapper.find('.text-2xl').text()).toBe('0');
    });

    it('should add digits to the display', async () => {
        await findButtonByText('1').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('1');
    });

    it('should add decimal point', async () => {
        await findButtonByText('1').trigger('click');
        await findButtonByText('.').trigger('click');
        await findButtonByText('5').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('1.5');
    });

    it('should clear the display', async () => {
        await findButtonByText('1').trigger('click');
        await findButtonByText('CLEAR').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('0');
    });

    it('should perform addition', async () => {
        await findButtonByText('1').trigger('click');
        await findButtonByText('+').trigger('click');
        await findButtonByText('2').trigger('click');
        await findButtonByText('=').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('3');
    });

    it('should perform subtraction', async () => {
        await findButtonByText('5').trigger('click');
        await findButtonByText('-').trigger('click');
        await findButtonByText('3').trigger('click');
        await findButtonByText('=').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('2');
    });

    it('should perform multiplication', async () => {
        await findButtonByText('3').trigger('click');
        await findButtonByText('×').trigger('click');
        await findButtonByText('4').trigger('click');
        await findButtonByText('=').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('12');
    });

    it('should perform division', async () => {
        await findButtonByText('8').trigger('click');
        await findButtonByText('÷').trigger('click');
        await findButtonByText('2').trigger('click');
        await findButtonByText('=').trigger('click');
        expect(wrapper.find('.text-2xl').text()).toBe('4');
    });

    it('should show alert when more than 20 digits are entered', async () => {
        for (let i = 0; i < 21; i++) {
            await findButtonByText('1').trigger('click');
        }
        expect(wrapper.find('.bg-error').exists()).toBe(true);
    });
});