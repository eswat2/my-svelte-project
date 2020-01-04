<script>
  import Icon from "svelte-awesome"
  import { circle, circleO } from "svelte-awesome/icons"
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

  .chip {
    margin: 2px;
  }
</style>

<div class="picker">
  {#each colors as key, i}
    <div class="chip" on:click={handleColorClick(key)}>
      <Icon
        style={`fill: ${namedColors[key]}`}
        data={$pick.value === key ? circle : circleO}
        scale={$pick.value === key ? 1.4 : 1} />
    </div>
  {/each}
</div>
