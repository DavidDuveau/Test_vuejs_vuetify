<template>
    <div class='details'>
       <h1>Title : {{ event.title }}</h1>
       <h2>{{ event.location }}</h2>
       <h2>{{ event.organizer }}</h2>
       <h2>{{ event.category }}</h2>
       <p>{{ event.description }}</p>
       <ul class='details-list'>
           <li v-for="attendee in event.attendees" :key="attendee.id">
               {{ attendee.name }}
           </li>
       </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ['id'],

        created() {
            this.$store.dispatch('setEvent', this.id);
        },

        computed: {
            ...mapState([
                'event'
            ])
        }
    }
</script>

<style lang="scss" scoped>

.details {
  margin-top: 4rem;
  padding: 2rem;
  background: rgb(202, 189, 189);
  display: inline-block;
  width: 30%;
  border-radius:5px;
  transition: transform background-color .5s ease-out;
  &-list {
    list-style-type: none;
  }
}


</style>