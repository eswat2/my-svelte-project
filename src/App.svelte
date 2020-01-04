<script>
  import ColorPicker from "./components/ColorPicker.svelte"
  import Randomizer from "./components/Randomizer.svelte"
  import { gray, navy, pick, sample } from "./utils"
</script>

<style>
  main {
    padding: 1em;
  }
</style>

<main>
  <Randomizer />
  <ColorPicker />
  <hr />
  <div>
    <strong style={`color: ${navy}; margin-right: 5px`}>pick:</strong>
    <em style={`color: ${gray}`}>{$pick.value}</em>
  </div>
  <div style="margin-top: 5px">
    <strong style={`color: ${navy}; margin-right: 5px`}>sample:</strong>
    <em style={`color: ${gray}`}>{$sample.values}</em>
  </div>
</main>
