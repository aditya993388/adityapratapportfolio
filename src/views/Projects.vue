<template>
  <div class="page-container">
    <div class="project-card">
      <div class="card-header">
        <h1 class="card-title">Projects</h1>
      </div>
      <div class="card-body">
        <ul>
          <li class="project-task">TASK 1.1P</li>
          <li class="project-task">TASK 1.2P</li>
          <li class="project-task">TASK 1.3P</li>
          <li class="project-task">Task 2.1C</li>
          <li class="project-task">Task 2.2C</li>
          <li class="project-task">Task 2.3C</li>
          <li class="project-task">Task 3.1D</li>
          <li class="project-task">Task 3.2D</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
};
</script>

<style scoped>

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.project-card {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px; 
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.card-header {
  background-color: #a7c4e4;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-title {
  font-size: 24px;
  margin: 0;
}

.card-body ul {
  list-style-type: none;
  padding: 0;
}

.project-task {
  font-size: 18px;
  margin-bottom: 5px;

}
</style>
