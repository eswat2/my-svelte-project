<script>
  import ColorPicker from "./components/ColorPicker.svelte"
  import Randomizer from "./components/Randomizer.svelte"
  import { gray, navy, pick, sample } from "./utils"

  const styles = {
    label: `color: ${navy}; margin-right: 5px;`,
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
    padding: 1em;
  }
  .row {
    margin-top: 5px;
  }
</style>

<main>
  <Randomizer />
  <ColorPicker />
  <hr />
  <div>
    <strong style={styles.label}>color:</strong>
    <em style={styles.value}>{$pick.value}</em>
  </div>
  <div class="row">
    <strong style={styles.label}>sample:</strong>
    <em style={styles.value}>{$sample.values}</em>
  </div>
</main>
