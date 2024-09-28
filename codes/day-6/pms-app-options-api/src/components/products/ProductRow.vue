<template>
  <td>
    <RouterLink :to="{ path: 'products/view/' + product.productId }">
      <img
        :src="product.imageUrl"
        alt="NA"
        class="image-style" />
    </RouterLink>
  </td>
  <td>{{ product.productName }}</td>
  <td>{{ product.price }}</td>
  <td>{{ product.starRating }}</td>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .image-style {
    margin: 2px;
    width: 80px;
  }
</style>
