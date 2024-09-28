<template>
  <div v-if="isFetchOver">
    <div v-if="errorInfo === ''">
      <div v-if="products.length > 0">
        <h2>List of Products</h2>
        <br />
        <FilterProduct
          @filter-text-changed="(value) => (textToFilter = value)" />
        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody class="table-dark">
            <tr
              v-for="p of filteredProducts"
              :key="p.productId">
              <ProductRow :product="p" />
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <span>No Products</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script>
  import ProductRow from "./ProductRow.vue";
  import FilterProduct from "./FilterProduct.vue";
  import { productsstore } from "../../store/productsstore";
  import { mapActions, mapState } from "pinia";

  export default {
    components: {
      ProductRow,
      FilterProduct,
    },
    data() {
      return {
        textToFilter: "",
      };
    },
    computed: {
      filteredProducts() {
        if (this.products.length > 0 && this.textToFilter !== "") {
          return this.products.filter((p) =>
            p.productName
              .toLocaleLowerCase()
              .includes(this.textToFilter.toLocaleLowerCase())
          );
        } else return this.products;
      },
      ...mapState(productsstore, ["products", "errorInfo", "isFetchOver"]),
    },
    methods: {
      ...mapActions(productsstore, ["fetchProducts"]),
    },
    mounted() {
      this.fetchProducts();
    },
  };
</script>
