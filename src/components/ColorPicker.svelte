<script>
  import Icon from "mdi-svelte"
  import { mdiRadioboxMarked, mdiRadioboxBlank } from "@mdi/js"
  import { namedColors, pick } from "../utils"

  const handleColorClick = key => {
    return () => {
      pick.set({ value: key })
    }
  }

  const colors = Object.keys(namedColors)
</script>

<style>
  .picker {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>

<div class="picker">
  {#each colors as key, i}
    <div on:click={handleColorClick(key)}>
      <Icon
        color={namedColors[key]}
        path={$pick.value === key ? mdiRadioboxMarked : mdiRadioboxBlank} />
    </div>
  {/each}
</div>
