<template>
  <router-link class="event-link" :to="{ name: 'AppEventDetails', params: { id: event.id } }">
    <div class="event">
      <h1>Title {{event.title}}</h1>
      <h2>Location {{event.location}}</h2>
      <h2
        v-if="event.organizer.id ===undefined"
      >
        Organizer {{event.organizer}}
      </h2>

      <h2 v-else>Organizer {{event.organizer.name}}</h2>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      event: Object
    },
    
  }
</script>

<style lang="scss" scoped>

.event {
  margin-top: 4rem;
  padding: 2rem;
  background: rgb(202, 189, 189);
  display: inline-block;
  width: 30%;
  border-radius:5px;
  transition: transform background-color .5s ease-out;
    text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: rgb(180, 162, 162);
  }
}
</style>