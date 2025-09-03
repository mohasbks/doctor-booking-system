<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-6">Contact Our Elite Team</h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl max-w-3xl mx-auto leading-relaxed">Connect with our premium healthcare specialists for personalized medical consultation</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Contact Information -->
        <div class="card-elegant">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="icon-phone text-primary-600 text-2xl"></span>
            </div>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white">Connect With Excellence</h2>
          </div>
          
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 flex items-center">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl flex items-center justify-center mr-5">
                <span class="icon-phone text-primary-600 text-xl"></span>
              </div>
              <div>
                <h3 class="font-bold text-secondary-800 dark:text-white text-lg">24/7 Premium Support</h3>
                <p class="text-secondary-600 dark:text-secondary-300 font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 flex items-center">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl flex items-center justify-center mr-5">
                <span class="icon-envelope text-primary-600 text-xl"></span>
              </div>
              <div>
                <h3 class="font-bold text-secondary-800 dark:text-white text-lg">Executive Email</h3>
                <p class="text-secondary-600 dark:text-secondary-300 font-medium">elite@medicare.com</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 flex items-center">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl flex items-center justify-center mr-5">
                <span class="icon-map-marker-alt text-primary-600 text-xl"></span>
              </div>
              <div>
                <h3 class="font-bold text-secondary-800 dark:text-white text-lg">Premium Location</h3>
                <p class="text-secondary-600 dark:text-secondary-300 font-medium">Elite Medical Center<br>123 Prestige Boulevard, Suite 500</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 flex items-center">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl flex items-center justify-center mr-5">
                <span class="icon-clock text-primary-600 text-xl"></span>
              </div>
              <div>
                <h3 class="font-bold text-secondary-800 dark:text-white text-lg">Executive Hours</h3>
                <p class="text-secondary-600 dark:text-secondary-300 font-medium">
                  Mon-Fri: 7:00 AM - 9:00 PM<br>
                  Weekends: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <!-- Emergency Contact -->
          <div class="mt-8 p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-2 border-red-200 dark:border-red-700 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mr-4">
                <span class="icon-exclamation-triangle text-red-600 text-xl"></span>
              </div>
              <h3 class="font-bold text-red-800 dark:text-red-300 text-lg">Medical Emergency</h3>
            </div>
            <p class="text-red-700 dark:text-red-300 font-medium">
              For urgent medical emergencies, please call <span class="font-bold">911</span> or visit your nearest emergency facility immediately.
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card-elegant">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="icon-envelope text-primary-600 text-2xl"></span>
            </div>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white">Premium Consultation Request</h2>
            <p class="text-secondary-600 dark:text-secondary-300 mt-2">Send us a message for personalized healthcare assistance</p>
          </div>
          
          <form @submit.prevent="submitMessage" class="space-y-6">
            <!-- Phone -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Phone Number (Optional)
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="input-field"
                placeholder="Enter your phone number"
              >
            </div>
            <!-- Name -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Full Name *
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="input-field"
                :class="{ 'border-red-500': errors.name }"
                placeholder="Enter your full name"
              >
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Email Address *
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="input-field"
                :class="{ 'border-red-500': errors.email }"
                placeholder="Enter your email address"
              >
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Subject *
              </label>
              <select 
                v-model="form.subject"
                required
                class="input-field"
                :class="{ 'border-red-500': errors.subject }"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="appointment">Appointment Support</option>
                <option value="billing">Billing Question</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="other">Other</option>
              </select>
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Message *
              </label>
              <textarea 
                v-model="form.message"
                rows="5"
                required
                class="input-field"
                :class="{ 'border-red-500': errors.message }"
                placeholder="Enter your message..."
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting" class="btn-primary w-full text-lg py-4 mt-8">
              <span v-if="isSubmitting" class="icon-spinner mr-3"></span>
              <span v-else class="icon-paper-plane mr-3"></span>
              {{ isSubmitting ? 'Sending...' : 'Send Premium Message' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="card-elegant max-w-lg w-full">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="icon-check text-green-600 dark:text-green-300 text-3xl"></span>
            </div>
            <h3 class="text-3xl font-bold text-secondary-800 dark:text-white mb-4">Message Delivered!</h3>
            <p class="text-secondary-600 dark:text-secondary-300 mb-8 text-lg leading-relaxed">
              Your premium consultation request has been received. Our elite medical team will respond within <span class="font-semibold text-primary-600 dark:text-primary-400">12 hours</span>.
            </p>
            <button @click="closeSuccessMessage" class="btn-primary w-full py-3 text-lg">
              <span class="icon-check mr-2"></span>Perfect
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactPage',
  setup() {
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const errors = ref({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    const validateForm = () => {
      errors.value = {}

      if (!form.value.name.trim()) {
        errors.value.name = 'Full name is required'
      }

      if (!form.value.email.trim()) {
        errors.value.email = 'Email address is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      }

      if (!form.value.subject) {
        errors.value.subject = 'Please select a subject'
      }

      if (!form.value.message.trim()) {
        errors.value.message = 'Message is required'
      } else if (form.value.message.trim().length < 10) {
        errors.value.message = 'Message must be at least 10 characters long'
      }

      return Object.keys(errors.value).length === 0
    }

    const submitMessage = async () => {
      if (!validateForm()) return

      isSubmitting.value = true

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Save message to localStorage (in a real app, this would be sent to a server)
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
      messages.push({
        id: Date.now(),
        ...form.value,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('contactMessages', JSON.stringify(messages))

      isSubmitting.value = false
      showSuccess.value = true
    }

    const closeSuccessMessage = () => {
      showSuccess.value = false
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      showSuccess,
      submitMessage,
      closeSuccessMessage
    }
  }
}
</script>
