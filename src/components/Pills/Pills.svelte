<script lang="ts">
  const PILLS = ['Leasing team of 10+', 'Recruiting Devs', 'Dev PreSales', 'Hardcode Coding'];
</script>

<div class="flex w-full flex-col items-center mt-4 gap-3">
  {#each PILLS as pill}
    <span class="pill">{pill}</span>
  {/each}
</div>
