<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
    <button class="topLeftbtn">Duplicate
    <button class="oneBut">Change Background
      <button class="twoBut">Change Heading
        <button class="threBut">Delete Last Instance
        </button>
      </button>
    </button>
  </button>
  <div class="page">
  <div class="header"><h1>Heading for the title</h1></div>
  <img src="https://toppng.com/uploads/preview/and-blank-effect-transparent-11546868080xgtiz6hxid.png" style="width:80%;" class="img">
  <div class="paragraph"></div>
  <button class="btn">Details</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
