<template>
<div>
  <div class="q-mt-lg">
    <p class="text-h6">Create a Request</p>
  </div>
  <div>
    <q-form>
      <label>
          <strong>Description</strong>
      </label>

      <div class="q-mt-sm">
          <q-input v-model="" outlined dense>
          </q-input>
      </div>

      <label>
          <strong>Value in Ether</strong>
      </label>

      <div class="q-mt-sm">
          <q-input v-model="" outlined dense>
          </q-input>
      </div>

      <label>
          <strong>Recipient</strong>
      </label>

      <div class="q-mt-sm">
          <q-input v-model="" outlined dense>
          </q-input>
      </div>

      <q-btn 
        type="submit"
        :loading="loading" 
        @click="" 
        color="primary" 
        unelevated
        >
        Create!
      </q-btn>
    </q-form>
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
</style>
