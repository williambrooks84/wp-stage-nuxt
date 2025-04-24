<template>
    <div v-if="show" class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50" @click.self="close">
        <div class="bg-white p-4 rounded-lg max-w-md w-full shadow-lg relative">
            <button class="absolute top-4 right-4 text-2xl bg-transparent border-none cursor-pointer" @click.self="close">&times;</button>
            <h2 class="mb-4 text-xl font-semibold">Contactez-nous</h2>
            <form @submit.prevent="send">
                <div class="flex flex-row gap-4">
                    <div class="relative mb-6">
                        <input id="firstname" v-model="form.firstname" type="text" placeholder=" " required class="floating-input"/>
                        <label for="firstname" class="floating-label">Prénom</label>
                    </div>

                    <div class="relative mb-6">
                        <input id="lastname" v-model="form.lastname" type="text" placeholder=" " required class="floating-input"/>
                        <label for="lastname" class="floating-label">Nom</label>
                    </div>
                </div>

                <div class="relative mb-6">
                    <input id="email" v-model="form.email" type="email" placeholder=" " required class="floating-input"/>
                    <label for="email" class="floating-label">Email</label>
                </div>

                <div class="relative mb-6">
                    <input id="subject" v-model="form.subject" type="text" placeholder=" " required class="floating-input"/>
                    <label for="subject" class="floating-label">Sujet</label>
                </div>

                <div class="relative mb-6">
                    <textarea id="message" v-model="form.message" rows="4" placeholder=" " required class="floating-input"></textarea>
                    <label for="message" class="floating-label">Message</label>
                </div>

                <button type="submit" class="btn btn-primary block mx-auto py-2 px-4 bg-blue-500 text-white rounded-lg">Envoyer</button>
            </form>
            <p v-if="sent" class="mt-4 text-green-500">Merci, votre message a été envoyé !</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ show: Boolean })
const emit = defineEmits(['close'])

const form = reactive({
    firstname: '',
    lastname: '',
    subject: '',
    email: '',
    message: '',
})

const sent = ref(false)

const send = async () => {
    console.log('Sending:', form)
    sent.value = true
    setTimeout(() => {
        emit('close')
        sent.value = false
        form.firstname = ''
        form.lastname = ''
        form.subject = ''
        form.email = ''
        form.message = ''
    }, 2000)
}

const close = () => {
    emit('close')
}
</script>

<style scoped>
.floating-input {
    width: 100%;
    padding: 12px 8px;
    font-size: 16px;
    border: 1px solid #ccc; /* Keep the borders */
    border-radius: 4px; /* Optional: Add rounded corners */
    outline: none;
    background: none;
    position: relative;
}

.floating-input:focus {
    border-color: var(--color-primary);
}

.floating-label {
    position: absolute;
    left: 12px; /* Adjust to align with input padding */
    top: 12px;
    font-size: 16px;
    color: #aaa;
    transition: all 0.2s ease;
    pointer-events: none;
    background: white; /* Add background to overlap the border */
    padding: 0 4px; /* Add padding to make it look better */
    z-index: 1; /* Ensure it appears above the border */
}

.floating-input:focus + .floating-label,
.floating-input:not(:placeholder-shown) + .floating-label {
    top: -8px;
    left: 8px; /* Adjust to align with input padding */
    font-size: 12px;
    color: #007bff;
}
</style>
