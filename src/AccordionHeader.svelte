<script>
  export let title = undefined;
  export let open = undefined;
  export let className = "";
</script>

<style>
  .accordion-section__header {
    border-radius: 5px;
    border: 1px solid #e2e9f8;
    background-color: #f8fafe;
    padding-bottom: 12px;
    margin-bottom: 6px;
    padding-top: 12px;
    padding-left: 12px;
    padding-right: 12px;
    cursor: pointer;
  }
</style>

<div on:click class={`accordion-section__header ${className}`}>
  <span>
    {#if open}
      <span>&#9660;</span>
    {:else}
      <span>&#9650;</span>
    {/if}
  </span>
  {title}
</div>
