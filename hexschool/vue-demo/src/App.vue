<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <button type="button" class="btn btn-primary">Primary</button>
</template>

<style>
@import "bootstrap";
</style>
