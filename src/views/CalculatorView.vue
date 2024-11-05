<script setup lang="ts">
import { ref } from 'vue';

const display = ref('0');
const expression = ref('');
const alertVisible = ref(false);

function addDigit(digit: string) {
  if (display.value.length >= 20) {
    alertVisible.value = true;
    return;
  } else {
    alertVisible.value = false;
  }

  if (display.value === '0') {
    display.value = digit;
  } else {
    display.value += digit;
  }
}

function addDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clear() {
  display.value = '0';
  expression.value = '';
}

function setOperator(operator: string) {
  expression.value += `${display.value} ${operator} `;
  display.value = '0';
}

function calculate() {
  try {
    const fullExpression = expression.value.replace("×","*").replace("÷","/") + display.value;

    display.value = eval(fullExpression);
    expression.value = '';
  } catch (error) {
    display.value = error.message;
  }
}

</script>

<template>
  <div class="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-base-200 p-4">
    <div class="w-full max-w-[320px] sm:max-w-[384px] mx-auto relative">
      <!-- Alert -->
      <div
          v-if="alertVisible"
          class="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[280px] sm:w-[320px]"
          role="alert"
      >
        <div class="bg-error text-error-content p-4 rounded-lg shadow-lg">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.48 0 0 4.48 0 10c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm1 15h-2v-2h2v2zm0-4h-2V5h2v6z" />
            </svg>
            <span>S'ha arribat al màxim de 20 dígits</span>
          </div>
        </div>
      </div>

      <!-- Display -->
      <div class="card w-full bg-base-100 shadow-xl mb-4">
        <div class="card-body p-2">
          <div class="text-right mb-1 text-sm opacity-70 sm:text-base">{{ expression }}</div>
          <div class="text-right text-2xl sm:text-3xl font-bold mb-4">{{ display }}</div>
        </div>
      </div>

      <!-- Keypad -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body p-2 sm:p-4">
          <div class="grid grid-cols-4 gap-1 sm:gap-2">
            <button @click="addDigit('7')" class="btn btn-neutral h-12 min-h-0 sm:h-14">7</button>
            <button @click="addDigit('8')" class="btn btn-neutral h-12 min-h-0 sm:h-14">8</button>
            <button @click="addDigit('9')" class="btn btn-neutral h-12 min-h-0 sm:h-14">9</button>
            <button @click="setOperator('÷')" class="btn btn-secondary h-12 min-h-0 sm:h-14">÷</button>

            <button @click="addDigit('4')" class="btn btn-neutral h-12 min-h-0 sm:h-14">4</button>
            <button @click="addDigit('5')" class="btn btn-neutral h-12 min-h-0 sm:h-14">5</button>
            <button @click="addDigit('6')" class="btn btn-neutral h-12 min-h-0 sm:h-14">6</button>
            <button @click="setOperator('×')" class="btn btn-secondary h-12 min-h-0 sm:h-14">×</button>

            <button @click="addDigit('1')" class="btn btn-neutral h-12 min-h-0 sm:h-14">1</button>
            <button @click="addDigit('2')" class="btn btn-neutral h-12 min-h-0 sm:h-14">2</button>
            <button @click="addDigit('3')" class="btn btn-neutral h-12 min-h-0 sm:h-14">3</button>
            <button @click="setOperator('-')" class="btn btn-secondary h-12 min-h-0 sm:h-14">-</button>

            <button @click="addDigit('0')" class="btn btn-neutral col-span-2 h-12 min-h-0 sm:h-14">0</button>
            <button @click="addDecimal" class="btn btn-accent h-12 min-h-0 sm:h-14">.</button>
            <button @click="setOperator('+')" class="btn btn-secondary h-12 min-h-0 sm:h-14">+</button>

            <button @click="clear" class="btn btn-error col-span-2 h-12 min-h-0 sm:h-14">CLEAR</button>
            <button @click="calculate" class="btn btn-primary col-span-2 h-12 min-h-0 sm:h-14">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>