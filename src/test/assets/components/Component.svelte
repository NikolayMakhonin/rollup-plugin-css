<script>
  import SubComponent from './sub-component/SubComponent.svelte'
  import {helper} from '../helpers/helper'
</script>

<div class="container">
  <SubComponent />
  {helper()}
</div>

<style>
  .container {
    mask-image: url(./images/image.png)
  }
</style>
