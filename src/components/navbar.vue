<template>
  <div class="container">
    <div class="logo-container">
      <RouterLink class="link-item" to="/">Portfolio</RouterLink>
    </div>
    <nav>
      <RouterLink class="link-item" to="/start">Projects</RouterLink>
      <RouterLink class="link-item" to="/completed">Completed</RouterLink>
      <RouterLink class="link-item" to="/extension">Completed with Extension</RouterLink>
      <RouterLink class="link-item" to="/resubmit">Under resubmit</RouterLink>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .container {
    font-size: 1.4vw;
    padding: 40px 60px 40px 60px;
    display: flex;
    background-color:#912d83;
  }
  .logo-container, nav, .extras-container {
    flex: 1;
  }
  .logo-container {
    font-size: 3vw;
    font-weight: 800;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .link-item {
    text-decoration: none;
    color: black;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
  }
  .link-item:hover {
    top: -10px;
    color: rgb(20, 18, 141);
  }

  
  @media (max-width: 1024px) {
    /* Tablet View */
  .container {
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  .logo-container {
    font-size: 24px;
  }
  nav {
    justify-content: center;
  }

}
</style>