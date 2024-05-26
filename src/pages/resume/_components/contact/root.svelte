<script lang="ts">
  import { BentoCard, BentoParagraph, BentoTitle } from '$components/bento';
  import { Badge } from '$lib/components/badge';
</script>

<BentoCard class="col-span-6 items-start lg:col-span-2">
  <BentoTitle>📞 Contact</BentoTitle>
  <div class="grid gap-2">
    <BentoParagraph class="flex flex-wrap gap-2">
      You are welcome to contact with me via my email:
      <a class="text-muted-foreground" href="mailto:franek.stodulski@gmail.com">
        franek.stodulski@gmail.com
      </a>
    </BentoParagraph>
  </div>
</BentoCard>
