<script>
  import Icon from "mdi-svelte"
  import { mdiRadioboxMarked, mdiRadioboxBlank } from "@mdi/js"
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
    <div on:click={handleColorClick(key)}>
      <Icon
        color={namedColors[key]}
        path={$pick.value === key ? mdiRadioboxMarked : mdiRadioboxBlank} />
    </div>
  {/each}
</div>
