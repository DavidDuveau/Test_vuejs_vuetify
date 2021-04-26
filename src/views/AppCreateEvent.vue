<template>
    <div>
        <v-form>
            <v-text-field
            v-model="organizer"
            label="Organizer name"
            required
        ></v-text-field>

        <v-text-field
            v-model="title"
            label="Title"
            required
        ></v-text-field>

        <v-text-field
            v-model="place"
            label="Place"
            required
        ></v-text-field>
        </v-form>

        <p>{{ organizer }}</p>
        <p>{{ title }}</p>
        <p>{{ place }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                organizer: '',
                title: '',
                place: '',
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>