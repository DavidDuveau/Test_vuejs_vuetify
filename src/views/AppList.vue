<template>
<v-container>
  <div v-for="event in events" :key="event.id">
        <AppEvent 
            :event="event"
        />
  </div>
</v-container>

</template>

<script>
import { mapState } from 'vuex'
import AppEvent from '@/components/AppEvent.vue';

export default {
    components: {
        AppEvent
    },
    created() {
        this.$store.dispatch('setEvents');
    },

    computed: {
        ...mapState([
            'events'
        ])
    }
  }
</script>
