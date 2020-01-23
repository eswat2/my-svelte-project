<script>
  import ColorPicker from "./components/ColorPicker.svelte"
  import Eswat2 from "./components/Eswat2.svelte"
  import Funnel from "./components/Funnel.svelte"
  import Randomizer from "./components/Randomizer.svelte"
  import Values from "./components/Values.svelte"
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

    --clrs-bada55: #bada55;
    --clrs-slate: #708090;
    --clrs-slate4: #4e5964;
    --clrs-white: #ffffff;
  }
  main {
    font-family: "Roboto", Helvetica, sans-serif;
    padding: 1em;
  }
</style>

<main>
  <Eswat2 />
  <Funnel />
  <Randomizer />
  <ColorPicker />
  <hr />
  <Values />
</main>
