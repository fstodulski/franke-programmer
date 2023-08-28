<script lang="ts">
  import { ExternalLink } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

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
  class="project-card flex w-full flex-col overflow-hidden rounded-xl bg-[{project.backgroundColor}] gap-6"
>
  <article class="flex flex-col">
    <div class="flex w-full justify-between">
      <h2 class="tex-base text-base-white font-syne pl-5 pt-4">{project.title}</h2>

      <div class="bg-slate-(lighten)-slate-900 rounded-bl-xl px-6 py-4">
        <a
          href={project.link.href}
          target="_blank"
          referrerpolicy="no-referrer"
          class="font-inter text-slate-500"
        >
          <span
            style="color: {project.fontColor}; border-color: {project.fontColor};"
            class="flex items-center gap-2 rounded-full border px-2 py-0.5"
          >
            Open link <Icon src={ExternalLink} size="14px" />
          </span>
        </a>
      </div>
    </div>
    <ul class="list-disc px-10" style="color: {project.fontColor}">
      {#each project.points as point}
        <li>{point}</li>
      {/each}
    </ul>
  </article>

  <div class="flex h-full w-full">
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

<style lang="scss">
</style>
