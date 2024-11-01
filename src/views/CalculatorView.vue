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
    <div class="flex flex-col items-center gap-4">
      <div class="card w-96 bg-base-100 shadow-xl">

        <div
            v-if="alertVisible"
            class="absolute -top-24 right-5 p-4 rounded-lg bg-red-500 text-white shadow-lg transition-all duration-300 ease-in-out transform"
            role="alert"
            style="width: 16rem; max-width: 90%;"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.48 0 0 4.48 0 10c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm1 15h-2v-2h2v2zm0-4h-2V5h2v6z" />
            </svg>
            <span>S'ha arribat al màxim de 20 dígits</span>
          </div>
          <div class="absolute -bottom-2 right-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-500"></div>
        </div>

        <div class="card-body p-2">
          <div class="text-right mb-2 text-sm opacity-70">{{ expression }}</div>
          <div class="text-right text-3xl font-bold mb-4">{{ display }}</div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="grid grid-cols-4 gap-2">
            <button @click="addDigit('7')" class="btn btn-neutral">7</button>
            <button @click="addDigit('8')" class="btn btn-neutral">8</button>
            <button @click="addDigit('9')" class="btn btn-neutral">9</button>
            <button @click="setOperator('÷')" class="btn btn-secondary">÷</button>

            <button @click="addDigit('4')" class="btn btn-neutral">4</button>
            <button @click="addDigit('5')" class="btn btn-neutral">5</button>
            <button @click="addDigit('6')" class="btn btn-neutral">6</button>
            <button @click="setOperator('×')" class="btn btn-secondary">×</button>

            <button @click="addDigit('1')" class="btn btn-neutral">1</button>
            <button @click="addDigit('2')" class="btn btn-neutral">2</button>
            <button @click="addDigit('3')" class="btn btn-neutral">3</button>
            <button @click="setOperator('-')" class="btn btn-secondary">-</button>

            <button @click="addDigit('0')" class="btn btn-neutral col-span-2">0</button>
            <button @click="addDecimal" class="btn btn-accent">.</button>
            <button @click="setOperator('+')" class="btn btn-secondary">+</button>

            <button @click="clear" class="btn btn-error col-span-2">CLEAR</button>
            <button @click="calculate" class="btn btn-primary col-span-2">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>