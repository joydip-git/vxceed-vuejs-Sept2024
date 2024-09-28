<template>
  <nav
    class="navbar navbar-expand-lg bg-primary"
    data-bs-theme="dark">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#">
        PRODUCT MANAGEMENT SYSTEM
      </a>
      <div
        class="collapse navbar-collapse"
        id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/home">
              <a class="nav-link active">Home </a>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products">
              <a class="nav-link">Products</a>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="#">
              <a class="nav-link"> Add Product </a>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
