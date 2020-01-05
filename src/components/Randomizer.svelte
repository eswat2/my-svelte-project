<script>
  import Icon from "mdi-svelte"
  import { mdiClose, mdiRefresh, mdiChevronDoubleLeft } from "@mdi/js"
  import { blue, red, navy, clicks, sample, funnelDefs } from "../utils"

  const randomInt = () => {
    return Math.floor(Math.random() * 100)
  }

  const handleRefreshClick = () => {
    clicks.update(n => n + 1)
    sample.set({
      values: funnelDefs.map(() => {
        return randomInt()
      })
    })
  }

  const handleResetClick = () => {
    clicks.set(0)
    sample.set({ values: [] })
  }
</script>

<style>
  .randomizer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .labels {
    display: flex;
    flex-direction: row;
  }
  .myRefreshBtn {
    border-radius: 5px;
    margin-bottom: 0px;
  }
  .myResetBtn {
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
</style>

<div class="randomizer">
  <button
    class="myRefreshBtn"
    style={`background-color: ${blue};`}
    on:click={handleRefreshClick}>
    <Icon color="white" path={mdiRefresh} />
  </button>
  <button
    class="myResetBtn"
    style={`background-color: ${red};`}
    on:click={handleResetClick}>
    <Icon color="white" path={mdiClose} />
  </button>
  <div class="labels">
    <Icon color={navy} path={mdiChevronDoubleLeft} size={1.2} />
    <span style={`color: ${navy};`}>
      <em>
        click a button...
        <sup>{$clicks}</sup>
      </em>
    </span>
  </div>
</div>
