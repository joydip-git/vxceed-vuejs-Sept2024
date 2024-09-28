<template>
  <td>
    <img
      :src="product.imageUrl"
      alt="NA"
      class="image-style"
      @click="$router.push('/products/view/' + product.productId)" />
  </td>
  <td>{{ product.productName }}</td>
  <td>{{ product.price }}</td>
  <td>{{ product.starRating }}</td>
</template>

<!-- options api -->
<!-- <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
</script> -->

<!-- composition api -->
<script setup>
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>
  .image-style {
    margin: 2px;
    width: 80px;
  }
</style>
