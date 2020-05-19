<script>
  import storbarang from './stor-barang'

  export let id
  export let nama = ''
  export let harga

  $: mode = id ? 'edit' : 'tambah'
  $: valid = nama.length > 0 && harga > 0

  function hanto(event) {
    if (!valid) {
      return
    }
    if (mode === 'tambah') {
      storbarang.tambah(nama, harga)
    }
    reset()
  }

  function reset() {
    harga = ''
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
    on:click|preventDefault={hanto}>
    {mode}
  </button>
  {#if mode === 'edit'}
    <button class="float-right" type="button" on:click|preventDefault={reset}>
      Kensel
    </button>
  {/if}
</form>
