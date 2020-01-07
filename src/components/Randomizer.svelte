<script>
  import Icon from "mdi-svelte"
  import { mdiClose, mdiRefresh, mdiChevronDoubleLeft } from "@mdi/js"
  import { blue, red, navy, clicks, sample, funnelDefs } from "../utils"

  const styles = {
    refresh: `background-color: ${blue};`,
    reset: `background-color: ${red};`,
    span: `color: ${navy};`
  }

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
  .info {
    font-style: italic;
  }
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
    color: #ffffff;
  }
  .myResetBtn {
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 10px;
    margin-bottom: 0px;
    color: #ffffff;
  }
</style>

<div class="randomizer">
  <button
    aria-label="Refresh"
    title="Refresh"
    class="myRefreshBtn"
    style={styles.refresh}
    on:click={handleRefreshClick}>
    <Icon path={mdiRefresh} />
  </button>
  <button
    aria-label="Reset"
    title="Reset"
    class="myResetBtn"
    style={styles.reset}
    on:click={handleResetClick}>
    <Icon path={mdiClose} />
  </button>
  <div class="labels" style={styles.span}>
    <Icon path={mdiChevronDoubleLeft} size={1.2} />
    <span class="info">
      click a button...
      <sup>{$clicks}</sup>
    </span>
  </div>
</div>
