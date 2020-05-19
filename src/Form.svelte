<script>
  export let id = 9
  export let nama = ''
  export let harga

  $: mode = id ? 'edit' : 'tambah'
  $: valid = nama.length > 0 && harga > 0

  function hanto(event) {
    if (!valid) {
      return
    }
    reset()
  }

  function reset() {
    price = ''
    name = ''
    id = undefined
  }
</script>

<style>
  button {
    margin-left: 20px;
  }
  button:disabled {
    cursor: not-allowed;
  }
</style>

<form>
  <fieldset>
    <label for="">Barang</label>
    <input
      bind:value={nama}
      type="text"
      id="namabarang"
      placeholder="Barang seperti ikan" />
  </fieldset>
  <fieldset>
    <label for="">Harga</label>
    <input
      bind:value={harga}
      type="number"
      id="hargabarang"
      placeholder="Berapa ringgit"
      min="0" />
  </fieldset>
  <button
    disabled={!valid}
    class="float-right"
    type="submit"
    on:submit|preventDefault={hanto}>
    {mode}
  </button>
  {#if mode === 'edit'}
    <button class="float-right" type="button" on:submit|preventDefault={reset}>
      Kensel
    </button>
  {/if}
</form>
