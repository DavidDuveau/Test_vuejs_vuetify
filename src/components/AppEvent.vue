<template>
  <router-link class="event-link" :to="{ name: 'AppEventDetails', params: { id: event.id } }">
    <v-card
      class="mx-auto mb-5"
      max-width="500"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ event.title }}
          </v-list-item-title>

          <v-list-item-subtitle>{{ event.location }}</v-list-item-subtitle>

          <v-list-item-subtitle
            v-if="event.organizer.id ===undefined"
          >
            {{ event.organizer }}
          </v-list-item-subtitle>

          <v-list-item-subtitle v-else>
            {{ event.organizer.name }} 
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          size="80"
          color="blue"
        ></v-list-item-avatar>
      </v-list-item>
    </v-card>
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

// .event {
//   margin-top: 4rem;
//   padding: 2rem;
//   background: rgb(202, 189, 189);
//   display: inline-block;
//   width: 30%;
//   border-radius:5px;
//   transition: transform background-color .5s ease-out;
//     text-decoration: none;

//   &:hover {
//     cursor: pointer;
//     transform: scale(1.05);
//     background-color: rgb(180, 162, 162);
//   }
// }
</style>