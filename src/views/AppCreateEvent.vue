<template>
    <div>
        <v-main>
            <v-form
                class="mx-auto"
                max-width="800px"
            >
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

            <v-btn
            class="mr-4"
            type="submit"
            >
            submit
            </v-btn>
        </v-main>
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
