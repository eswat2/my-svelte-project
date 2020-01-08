<script>
  import Radio from "./icons/Radio.svelte"
  import { colorNames, namedColors, pick } from "../utils"

  const handleColorClick = key => {
    return () => {
      pick.set({ value: key })
    }
  }
</script>

<style>
  .picker {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
</style>

<div class="picker">
  {#each colorNames as key, i}
    <div aria-label={key} title={key} on:click={handleColorClick(key)}>
      <Radio hex={namedColors[key]} selected={$pick.value === key} />
    </div>
  {/each}
</div>
