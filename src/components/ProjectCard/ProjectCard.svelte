<script lang="ts">
  import type { Project } from '../../containeres/Projects/projects';
  import { Composition } from '../../containeres/Projects/projects';
  import DoubleComposition from './components/DoubleComposition.svelte';
  import SingleComposition from './components/SingleComposition.svelte';
  import SingleRotatedComposition from './components/SingleRotatedComposition.svelte';
  import TripleComposition from './components/TripleComposition.svelte';

  export let project: Project;
</script>

<div
  style="background-color: {project.backgroundColor};"
  class="project-card flex w-full flex-col overflow-hidden rounded-xl pt-3 bg-[{project.backgroundColor}] gap-6"
>
  <a href={project.link.href} aria-label={project.link.ariaLabel}>
    <article class="flex flex-col gap-6 px-5">
      <div class="flex w-full">
        <h2 class="tex-base text-base-white font-syne">{project.title}</h2>
      </div>
      <ul class="list-disc pl-4" style="color: {project.fontColor}">
        {#each project.points as point}
          <li>{point}</li>
        {/each}
      </ul>
    </article>
  </a>

  <div class="flex w-full">
    {#if project.composition === Composition.Triple}
      <TripleComposition assets={project.assets} />
    {/if}

    {#if project.composition === Composition.SingleRotated}
      <SingleRotatedComposition height={project.height} assets={project.assets} />
    {/if}

    {#if project.composition === Composition.Single}
      <SingleComposition assets={project.assets} />
    {/if}

    {#if project.composition === Composition.Double}
      <DoubleComposition assets={project.assets} />
    {/if}
  </div>
</div>
