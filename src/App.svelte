<script>
  import ColorPicker from "./components/ColorPicker.svelte"
  import Randomizer from "./components/Randomizer.svelte"
  import { gray, navy, pick, sample } from "./utils"

  const styles = {
    label: `color: ${navy};`,
    value: `color: ${gray};`
  }
</script>

<style>
  :root {
    --clrs-navy: #001f3f;
    --clrs-blue: #0074d9;
    --clrs-aqua: #7fdbff;
    --clrs-teal: #39cccc;
    --clrs-olive: #3d9970;
    --clrs-green: #2ecc40;
    --clrs-lime: #01ff70;
    --clrs-yellow: #ffdc00;
    --clrs-orange: #ff851b;
    --clrs-red: #ff4136;
    --clrs-maroon: #85144b;
    --clrs-fuchsia: #f012be;
    --clrs-purple: #b10dc9;
    --clrs-black: #111111;
    --clrs-gray: #aaaaaa;
    --clrs-silver: #dddddd;
  }
  main {
    font-family: "Roboto", Helvetica, sans-serif;
    padding: 1em;
  }
  .row {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .label {
    font-weight: bold;
    margin-right: 10px;
  }
  .value {
    font-style: italic;
  }
</style>

<main>
  <Randomizer />
  <ColorPicker />
  <hr />
  <div class="row">
    <span class="label" style={styles.label}>color:</span>
    <span class="value" style={styles.value}>{$pick.value}</span>
  </div>
  <div class="row">
    <span class="label" style={styles.label}>sample:</span>
    <span class="value" style={styles.value}>{$sample.values}</span>
  </div>
</main>
