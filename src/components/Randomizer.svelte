<script>
  import { ChevronDoubleLeft, Close, Refresh } from "s4e-icons"
  import { clicks, sample, funnelDefs } from "../utils"

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
    color: var(--clrs-navy);
    fill: var(--clrs-navy);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button {
    fill: var(--clrs-white);
    display: flex;
    align-content: center;
    border-radius: 5px;
    padding: 5px;
    margin: 0px;
    margin-right: 5px;
  }
  .refresh {
    background-color: var(--clrs-blue);
  }
  .reset {
    background-color: var(--clrs-red);
  }
</style>

<div class="randomizer">
  <button
    class="refresh"
    aria-label="Refresh"
    title="Refresh"
    on:click={handleRefreshClick}>
    <Refresh />
  </button>
  <button
    class="reset"
    aria-label="Reset"
    title="Reset"
    on:click={handleResetClick}>
    <Close />
  </button>
  <div class="labels">
    <ChevronDoubleLeft size={28} />
    <span class="info">
      click a button...
      <sup>{$clicks}</sup>
    </span>
  </div>
</div>
