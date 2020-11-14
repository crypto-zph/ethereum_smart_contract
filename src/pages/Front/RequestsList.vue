<template>
<div>
  <div class="q-mt-lg">
    <p class="text-h6">Requests</p>
  </div>
  <div>
    <q-btn 
      :loading="loading" 
      @click="$router.push({name: 'new_request'})" 
      color="primary" 
      unelevated
      >
      Add Request
    </q-btn>
  </div>
</div>
</template>

<script>

export default
{
 data:() =>
 ({
 }),
 async mounted()
 {
 },
 methods: { },
 components: { }
}
</script>
<style>
div.exactFit {
  word-wrap: break-word;
}
</style>
