<script>
  import { gray, navy, pick, sample } from "../utils"

  const styles = {
    label: `color: ${navy};`,
    value: `color: ${gray};`
  }
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
    font-weight: bold;
    margin-right: 10px;
  }
  .value {
    font-style: italic;
  }
</style>

<div class="column">
  <div class="row">
    <span class="label" style={styles.label}>color:</span>
    <span class="value" style={styles.value}>{$pick.value}</span>
  </div>
  <div class="row">
    <span class="label" style={styles.label}>sample:</span>
    <span class="value" style={styles.value}>{$sample.values}</span>
  </div>
</div>
