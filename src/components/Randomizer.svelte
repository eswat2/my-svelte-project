<script>
  import Icon from "mdi-svelte"
  import { mdiClose, mdiRefresh, mdiChevronDoubleLeft } from "@mdi/js"
  import { blue, red, navy, sample, funnelDefs } from "../utils"

  const randomInt = () => {
    return Math.floor(Math.random() * 100)
  }

  const handleRefreshClick = () => {
    sample.set({
      values: funnelDefs.map(() => {
        return randomInt()
      })
    })
  }

  const handleResetClick = () => {
    sample.set({ values: [] })
  }
</script>

<style>
  .randomizer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
</style>

<div class="randomizer">
  <button
    style={`background-color: ${blue}; border-radius: 5px;`}
    on:click={handleRefreshClick}>
    <Icon color="white" path={mdiRefresh} />
  </button>
  <button
    style={`background-color: ${red}; border-radius: 5px; margin-left: 5px; margin-right: 10px;`}
    on:click={handleResetClick}>
    <Icon color="white" path={mdiClose} />
  </button>
  <Icon color={navy} path={mdiChevronDoubleLeft} />
  <span style={`color: ${navy};`}>
    <em>click a button...</em>
  </span>
</div>
