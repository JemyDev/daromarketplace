<template>
  <div class="main-layout">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <hr>

    <slot/>

    <hr>
    <footer>
      Site footer
    </footer>
  </div>
</template>
