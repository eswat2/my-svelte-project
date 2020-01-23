<script>
  import { ChevronDoubleLeft, Close, Refresh } from "s4e-icons"
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
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .labels {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button {
    display: flex;
    align-content: center;
    border-radius: 5px;
    padding: 5px;
    margin: 0px;
    margin-right: 5px;
  }
</style>

<div class="randomizer">
  <button
    aria-label="Refresh"
    title="Refresh"
    style={styles.refresh}
    on:click={handleRefreshClick}>
    <Refresh />
  </button>
  <button
    aria-label="Reset"
    title="Reset"
    style={styles.reset}
    on:click={handleResetClick}>
    <Close />
  </button>
  <div class="labels" style={styles.span}>
    <ChevronDoubleLeft hex={navy} size={28} />
    <span class="info">
      click a button...
      <sup>{$clicks}</sup>
    </span>
  </div>
</div>
