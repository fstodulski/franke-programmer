<script lang="ts">
  import MarqueeTextWidget from 'svelte-marquee-text-widget';

  import ProjectCard from '../../components/ProjectCard/ProjectCard.svelte';
  import { PROJECTS, TECH_STACK } from './projects';
</script>

{#each PROJECTS as project, index}
  <ProjectCard {project}></ProjectCard>

  {#if index === 0}
    <div
      class="bg-slate-(lighten)-slate-900 text-slate-slate-500 font-syne flex w-full items-center gap-6 rounded-full py-4 uppercase md:col-span-2"
    >
      <MarqueeTextWidget>
        {#each TECH_STACK as tech}
          <span class="mr-6">
            {tech}
          </span>
        {/each}
      </MarqueeTextWidget>
    </div>
  {/if}
{/each}
