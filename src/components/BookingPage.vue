<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <button @click="$emit('navigate', 'doctors')" class="btn-secondary mb-8 hover:scale-105">
        <span class="icon-arrow-left mr-3"></span>Back to Our Physicians
      </button>

      <!-- No Doctor Selected -->
      <div v-if="!selectedDoctor" class="text-center py-16">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span class="icon-user-md text-primary-600 text-3xl"></span>
        </div>
        <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">No doctor selected</h2>
        <p class="text-secondary-600 dark:text-secondary-300 mb-6">Please select a doctor from the doctors list to book an appointment.</p>
        <button @click="$emit('navigate', 'doctors')" class="btn-primary py-3 px-6">
          <span class="icon-search mr-2"></span>Browse Doctors
        </button>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Doctor Information -->
        <div class="card-elegant">
          <div class="text-center mb-8">
            <div class="relative inline-block">
              <img :src="selectedDoctor.image" :alt="selectedDoctor.name" 
                   class="w-36 h-36 rounded-2xl mx-auto object-cover mb-6 shadow-xl">
              <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-secondary-800 flex items-center justify-center">
                <span class="icon-check text-white text-sm"></span>
              </div>
            </div>
            
            <h1 class="text-3xl font-bold text-secondary-900 dark:text-white mb-3">{{ selectedDoctor.name }}</h1>
            <p class="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">{{ selectedDoctor.specialty }}</p>
            
            <div class="flex items-center justify-center gap-8 text-secondary-600 dark:text-secondary-300 mb-6">
              <div class="text-center">
                <div class="font-bold text-lg">{{ selectedDoctor.rating }}</div>
                <div class="text-sm">Rating</div>
              </div>
              <div class="text-center">
                <div class="font-bold text-lg">{{ selectedDoctor.experience }}</div>
                <div class="text-sm">Experience</div>
              </div>
            </div>
            
            <div class="text-center mb-6">
              <p class="text-lg font-semibold text-secondary-700 dark:text-secondary-300">{{ selectedDoctor.location }}</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-6 mb-6">
            <h4 class="text-xl font-bold text-secondary-800 dark:text-white mb-4">About Dr. {{ selectedDoctor.name.split(' ').pop() }}</h4>
            <p class="text-secondary-600 dark:text-secondary-300 leading-relaxed text-lg">{{ selectedDoctor.about }}</p>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="card-elegant">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900 dark:to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="icon-calendar-plus text-accent-600 text-2xl"></span>
            </div>
            <h2 class="text-2xl font-bold text-secondary-900 dark:text-white mb-3">Schedule Your Consultation</h2>
            <p class="text-secondary-600 dark:text-secondary-300 text-lg">Book your appointment with Dr. {{ selectedDoctor.name.split(' ').pop() }}</p>
          </div>
          
          <form @submit.prevent="submitBooking" class="space-y-6">
            <!-- Patient Name -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Full Name *
              </label>
              <input 
                v-model="form.patientName"
                type="text" 
                required
                class="input-field"
                :class="{ 'border-red-500': errors.patientName }"
                placeholder="Enter your full name"
              >
              <p v-if="errors.patientName" class="text-red-500 text-sm mt-1">{{ errors.patientName }}</p>
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Phone Number *
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="input-field"
                :class="{ 'border-red-500': errors.phone }"
                placeholder="Enter your phone number"
              >
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
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

            <!-- Appointment Date -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Appointment Date *
              </label>
              <input 
                v-model="form.appointmentDate"
                type="date" 
                required
                class="input-field"
                :class="{ 'border-red-500': errors.appointmentDate }"
                :min="new Date().toISOString().split('T')[0]"
                :max="'2025-12-31'"
                @change="updateAvailableTimes"
              >
              <p v-if="errors.appointmentDate" class="text-red-500 text-sm mt-1">{{ errors.appointmentDate }}</p>
            </div>

            <!-- Appointment Time -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Appointment Time *
              </label>
              <select 
                v-model="form.appointmentTime"
                required
                class="input-field"
                :class="{ 'border-red-500': errors.appointmentTime }"
                :disabled="!form.appointmentDate"
              >
                <option value="">Select a time</option>
                <option v-for="time in availableTimes" :key="time" :value="time">
                  {{ formatTime(time) }}
                </option>
              </select>
              <p v-if="errors.appointmentTime" class="text-red-500 text-sm mt-1">{{ errors.appointmentTime }}</p>
            </div>

            <!-- Reason -->
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                Reason for Visit (Optional)
              </label>
              <textarea 
                v-model="form.reason"
                rows="3"
                class="input-field"
                placeholder="Brief description of your concern or reason for visit"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting" class="btn-primary w-full text-lg py-4 mt-8">
              <span v-if="isSubmitting" class="icon-spinner mr-3"></span>
              <span v-else class="icon-calendar-check mr-3"></span>
              {{ isSubmitting ? 'Booking...' : 'Confirm Premium Consultation' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Confirmation Modal -->
      <div v-if="showConfirmation" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="card-elegant max-w-lg w-full animate-pulse">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span class="icon-check text-green-600 dark:text-green-300 text-3xl"></span>
            </div>
            <h3 class="text-3xl font-bold text-secondary-800 dark:text-white mb-4">Consultation Confirmed!</h3>
            <p class="text-secondary-600 dark:text-secondary-300 mb-8 text-lg">
              Your premium appointment has been successfully scheduled.
            </p>
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 mb-8 text-left">
              <div class="space-y-3">
                <p class="flex items-center"><span class="font-bold text-secondary-800 dark:text-white w-20">Doctor:</span> <span class="text-secondary-600 dark:text-secondary-300">{{ selectedDoctor.name }}</span></p>
                <p class="flex items-center"><span class="font-bold text-secondary-800 dark:text-white w-20">Date:</span> <span class="text-secondary-600 dark:text-secondary-300">{{ formatDate(form.appointmentDate) }}</span></p>
                <p class="flex items-center"><span class="font-bold text-secondary-800 dark:text-white w-20">Time:</span> <span class="text-secondary-600 dark:text-secondary-300">{{ formatTime(form.appointmentTime) }}</span></p>
                <p class="flex items-center"><span class="font-bold text-secondary-800 dark:text-white w-20">Location:</span> <span class="text-secondary-600 dark:text-secondary-300">{{ selectedDoctor.location }}</span></p>
              </div>
            </div>
            <div class="flex gap-4">
              <button @click="$emit('navigate', 'appointments')" class="btn-primary flex-1 py-3">
                <span class="icon-calendar-check mr-2"></span>View Appointments
              </button>
              <button @click="closeConfirmation" class="btn-secondary flex-1 py-3">
                <span class="icon-plus mr-2"></span>Book Another
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  name: 'BookingPage',
  props: {
    selectedDoctor: {
      type: Object,
      default: null
    }
  },
  emits: ['navigate'],
  setup(props, { emit }) {
    // Get doctor from prop or localStorage as fallback
    const selectedDoctor = computed(() => {
      if (props.selectedDoctor) {
        return props.selectedDoctor
      }
      // Fallback to localStorage
      const savedDoctor = localStorage.getItem('selectedDoctor')
      if (savedDoctor) {
        try {
          return JSON.parse(savedDoctor)
        } catch (e) {
          console.error('Error parsing selectedDoctor from localStorage:', e)
          return null
        }
      }
      return null
    })

    const form = ref({
      patientName: '',
      phone: '',
      email: '',
      appointmentDate: '',
      appointmentTime: '',
      reason: ''
    })

    const errors = ref({})
    const isSubmitting = ref(false)
    const showConfirmation = ref(false)
    const availableTimes = ref([])

    const updateAvailableTimes = () => {
      if (form.value.appointmentDate) {
        // Provide standard available times for any selected date
        const selectedDate = new Date(form.value.appointmentDate)
        const dayOfWeek = selectedDate.getDay()
        
        // Weekend (Friday & Saturday in many regions) - limited hours
        if (dayOfWeek === 5 || dayOfWeek === 6) {
          availableTimes.value = ["09:00", "10:30", "12:00", "13:30", "15:00"]
        } else {
          // Weekdays - full schedule
          availableTimes.value = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
        }
      } else {
        availableTimes.value = []
      }
    }

    const validateForm = () => {
      errors.value = {}

      if (!form.value.patientName.trim()) {
        errors.value.patientName = 'Full name is required'
      }

      if (!form.value.phone.trim()) {
        errors.value.phone = 'Phone number is required'
      } else if (!/^[\d\-\+\(\)\s]+$/.test(form.value.phone)) {
        errors.value.phone = 'Please enter a valid phone number'
      }

      if (!form.value.email.trim()) {
        errors.value.email = 'Email address is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      }

      if (!form.value.appointmentDate) {
        errors.value.appointmentDate = 'Please select an appointment date'
      }

      if (!form.value.appointmentTime) {
        errors.value.appointmentTime = 'Please select an appointment time'
      }

      return Object.keys(errors.value).length === 0
    }

    const submitBooking = async () => {
      if (!validateForm()) return

      isSubmitting.value = true

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create appointment object
      const appointment = {
        id: Date.now(),
        doctorName: selectedDoctor.value.name,
        doctorImage: selectedDoctor.value.image,
        specialty: selectedDoctor.value.specialty,
        location: selectedDoctor.value.location,
        patientName: form.value.patientName,
        phone: form.value.phone,
        email: form.value.email,
        date: form.value.appointmentDate,
        time: form.value.appointmentTime,
        reason: form.value.reason,
        status: 'confirmed',
        bookedAt: new Date().toISOString()
      }

      // Save to localStorage
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      existingAppointments.push(appointment)
      localStorage.setItem('appointments', JSON.stringify(existingAppointments))

      isSubmitting.value = false
      showConfirmation.value = true
    }

    const closeConfirmation = () => {
      showConfirmation.value = false
      // Reset form
      form.value = {
        patientName: '',
        phone: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
        reason: ''
      }
      availableTimes.value = []
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const formatTime = (timeString) => {
      const [hours, minutes] = timeString.split(':')
      const hour = parseInt(hours)
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const displayHour = hour % 12 || 12
      return `${displayHour}:${minutes} ${ampm}`
    }

    return {
      form,
      errors,
      isSubmitting,
      showConfirmation,
      availableTimes,
      selectedDoctor,
      validateForm,
      updateAvailableTimes,
      submitBooking,
      closeConfirmation,
      formatDate,
      formatTime
    }
  }
}
</script>
