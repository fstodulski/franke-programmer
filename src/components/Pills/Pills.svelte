<script lang="ts">
  const PILLS = ['Leasing team of 10+', 'Recruiting Devs', 'Dev PreSales', 'Hardcode Coding'];
</script>

<div class="mt-4 flex w-full flex-col flex-wrap items-center gap-3 md:max-w-[80%] md:flex-row">
  {#each PILLS as pill}
    <span class="pill">{pill}</span>
  {/each}
</div>
