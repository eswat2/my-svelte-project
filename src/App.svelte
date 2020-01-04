<script>
  import ColorPicker from "./components/ColorPicker.svelte"
  import { namedColors, pick } from "./utils"

  const gray = namedColors["gray"]
  const navy = namedColors["navy"]
</script>

<style>
  main {
    padding: 1em;
  }
</style>

<main>
  <ColorPicker />
  <hr />
  <span>
    <strong style={`color: ${navy}`}>pick:</strong>
    <em style={`color: ${gray}`}>{$pick.value}</em>
  </span>
</main>
