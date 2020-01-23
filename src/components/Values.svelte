<script>
  import { pick, sample } from "../utils"
</script>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .label {
    color: var(--clrs-navy);
    font-weight: bold;
    margin-right: 10px;
  }
  .value {
    color: var(--clrs-slate4);
    font-style: italic;
  }
</style>

<div class="column">
  <div class="row">
    <span class="label">color:</span>
    <span class="value">{$pick}</span>
  </div>
  <div class="row">
    <span class="label">sample:</span>
    <span class="value">{$sample.values}</span>
  </div>
</div>
