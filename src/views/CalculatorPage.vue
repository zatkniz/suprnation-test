<template>
  <div class="calculator shadow-lg rounded-xl">
    <input
      v-model="calculatorResult"
      type="number"
      class="w-[400px] text-6xl bg-slate-800 text-white p-2 rounded-t-xl text-right"
    />
    <div class="bg-slate-500 flex w-[400px] flex-wrap">
      <div
        class="w-[100px] text-center p-2 border-black border-t-2 border-l-2 border-solid"
        :class="{
          'w-[200px]': item === '0',
          ' bg-orange-400': isCalculationItem(item),
        }"
        v-for="item in calculatorButtons"
        :key="item"
        @click="calculateValue(item)"
      >
        <span class="text-white">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getRandomNumber } from "@/services/random-number";
import { ref } from "@vue/reactivity";
import { computed, Ref } from "vue";

const calculatorButtons: string[] = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const calculatorResult: Ref<string> = ref("0");
const calculationValues: Ref<string[]> = ref([]);
const itemPushed: Ref<boolean> = ref(false);

try {
  /**
   * Fetches the random number from the API
   * But throws CORS error so its been commented out
   */
  //   const { data } = await getRandomNumber();
} catch (error) {
  console.log(error);
}

const summary = computed(() => {
  return calculationValues.value
    .join()
    .match(/[+\\-]*(\.\d+|\d+(\.\d+)?)/g)
    ?.reduce((acc: number, curr: string) => {
      return acc + +curr;
    }, 0);
  //   return calculationValues.value.reduce(
  //     (acc: number, curr: string, index: number) => {
  //       if (!isNaN(+curr)) {
  //         switch (calculationValues.value[index - 1]) {
  //           case "+":
  //             return +acc + +curr;
  //           case "-":
  //             return +acc - +curr;
  //           case "*":
  //             return +acc * +curr;
  //           case "/":
  //             return +acc / +curr;
  //           default:
  //             return +acc;
  //         }
  //       }

  //       return !isNaN(+curr) ? acc + +curr : acc;
  //     },
  //     0
  //   );
});

const calculateValue = (item: string): void => {
  if (!isNaN(+item)) {
    if (calculatorResult.value === "0" || itemPushed.value) {
      calculatorResult.value = item;
    } else {
      calculatorResult.value += item;
    }
    itemPushed.value = false;
  } else {
    calculationValues.value.push(item + calculatorResult.value);
    // calculationValues.value.push(item);
    itemPushed.value = true;
    calculatorResult.value = summary.value + "";
  }
};

const isCalculationItem = (item: string): boolean => {
  return ["+", "-", "*", "/", "="].includes(item);
};
</script>
