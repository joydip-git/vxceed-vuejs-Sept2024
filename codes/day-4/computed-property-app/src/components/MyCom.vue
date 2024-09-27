<template>
  <p>{{ call() }}</p>
</template>
<script>
  export default {
    methods: {
      call() {
        console.log("calling call");
      },
    },
  };
</script>
