<script lang="ts">
  // biome-ignore lint/style/useConst: <explanation>
  export let href = "";
</script>

<a href="/docs{href.startsWith('/') ? href : `/${href}`}"><slot /></a>
