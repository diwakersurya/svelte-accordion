<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { writable } from "svelte/store";
  import Section, { ACCORDION } from "./AccordionSection.svelte";
  export let value = undefined;
  export let className = "";
  const dispatch = createEventDispatcher();

  $: isControlled = typeof value !== "undefined";
  const selected = writable(null);

  $: if (isControlled) {
    selected.set(value);
  }

  const handleChange = function(newValue) {
    if (!isControlled) {
      selected.set(newValue);
    }
    dispatch("change", newValue);
  };

  setContext(ACCORDION, {
    handleChange,
    selected
  });
</script>

<style>
  .accordion {
    list-style: none;
  }
</style>

<ul class={`accordion ${className}`}>
  <slot />
</ul>
