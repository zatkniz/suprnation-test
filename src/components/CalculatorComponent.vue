<template>
  <div class="flex flex-col">
    <input v-model="expression" class="border-2 text-4xl" type="text" />
    <small v-if="typeof error == 'string'">{{ error }}</small>
    <h4 v-else>{{ result }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { evaluateExpression } from "@/helpers/evaluate-expression";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { ComputedRef, Ref } from "vue";

/**
 * The model that binds the input change
 */
const expression: Ref<string> = ref("");

/**
 * The computed result of the expression
 */
const result: ComputedRef<number | undefined> = computed(() => {
  return expression.value
    .match(/[+\\-]*(\.\d+|\d+(\.\d+)?)/g)
    ?.reduce((acc: number, curr: string) => {
      return acc + +curr;
    }, 0);
});

/**
 * The computed error of the expression
 */
const error: ComputedRef<string | boolean> = computed<string | boolean>(() =>
  evaluateExpression(expression.value)
);
</script>
