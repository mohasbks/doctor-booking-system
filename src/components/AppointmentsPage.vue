<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-6">
          My Appointments
        </h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl">
          Manage your healthcare appointments
        </p>
      </div>

      <!-- Appointments List -->
      <div v-if="appointments && appointments.length > 0" class="space-y-6">
        <div v-for="(appointment, index) in appointments" :key="appointment.id" 
             class="card-elegant group">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <!-- Doctor Info -->
            <div class="flex items-center space-x-6">
              <div class="relative">
                <img :src="appointment.doctorImage" :alt="appointment.doctorName" 
                     class="w-20 h-20 rounded-xl object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-secondary-800 flex items-center justify-center">
                  <span class="icon-check text-white text-xs"></span>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-secondary-800 dark:text-white mb-2">{{ appointment.doctorName }}</h3>
                <p class="text-primary-600 dark:text-primary-400 font-semibold mb-1">{{ appointment.specialty }}</p>
                <p class="text-secondary-600 dark:text-secondary-400 text-sm flex items-center">
                  <span class="icon-location mr-1"></span>{{ appointment.location }}
                </p>
              </div>
            </div>

            <!-- Appointment Details -->
            <div class="flex-1">
              <div class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p class="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-2">Date & Time</p>
                    <p class="text-secondary-800 dark:text-white font-bold text-lg">
                      {{ formatDate(appointment.date) }}
                    </p>
                    <p class="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                      {{ formatTime(appointment.time) }}
                    </p>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-2">Status</p>
                    <span :class="getStatusClass(appointment.status)" class="inline-block px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                      {{ appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1) }}
                    </span>
                  </div>
                </div>
                <div v-if="appointment.reason" class="mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-600">
                  <p class="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-2">Consultation Reason</p>
                  <p class="text-secondary-600 dark:text-secondary-300">{{ appointment.reason }}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-600">
                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row gap-3">
                    <button v-if="appointment.status === 'confirmed'" 
                            @click="rescheduleAppointment(appointment)"
                            class="btn-secondary text-sm py-2 px-4">
                      <span class="icon-calendar-alt mr-2"></span>Reschedule
                    </button>
                    
                    <button v-if="appointment.status === 'confirmed'" 
                            @click="showCancelModal(appointment)"
                            class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 text-sm font-semibold py-2 px-4 rounded-xl">
                      <span class="icon-times mr-2"></span>Cancel
                    </button>

                    <button @click="viewAppointmentDetails(appointment)"
                            class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 text-sm font-semibold py-2 px-4 rounded-xl">
                      <span class="icon-info mr-2"></span>Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Appointments -->
      <div v-else class="text-center py-16">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span class="icon-calendar-times text-primary-600 text-4xl"></span>
        </div>
        <h3 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">No Appointments Found</h3>
        <p class="text-secondary-600 dark:text-secondary-300 text-lg mb-8 max-w-md mx-auto">
          You haven't booked any appointments yet. Start by finding a specialist that meets your healthcare needs.
        </p>
        <button @click="$emit('navigate', 'doctors')" class="btn-primary py-3 px-8">
          <span class="icon-search mr-2"></span>Find Doctors
        </button>
      </div>

      <!-- Cancel Confirmation Modal -->
      <div v-if="showCancelConfirmation" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="card-elegant max-w-lg w-full">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="icon-exclamation-triangle text-red-600 dark:text-red-400 text-3xl"></span>
            </div>
            <h3 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Cancel Consultation</h3>
            <p class="text-secondary-600 dark:text-secondary-300 mb-8 text-lg">
              Are you sure you want to cancel your consultation with <span class="font-semibold text-primary-600 dark:text-primary-400">{{ appointmentToCancel?.doctorName }}</span>?
            </p>
            <div class="flex gap-4">
              <button @click="confirmCancel" class="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl shadow-elegant hover:shadow-elegant-lg flex-1">
                <span class="icon-times mr-2"></span>Yes, Cancel
              </button>
              <button @click="showCancelConfirmation = false" class="btn-secondary flex-1 py-3">
                <span class="icon-check mr-2"></span>Keep Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'AppointmentsPage',
  emits: ['navigate'],
  setup(props, { emit }) {
    const appointments = ref([])
    const showCancelConfirmation = ref(false)
    const appointmentToCancel = ref(null)

    const loadAppointments = () => {
      const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      // Sort by date and time
      appointments.value = savedAppointments.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`)
        const dateB = new Date(`${b.date} ${b.time}`)
        return dateA - dateB
      })
    }

    const isFutureAppointment = (appointment) => {
      const appointmentDateTime = new Date(`${appointment.date} ${appointment.time}`)
      return appointmentDateTime > new Date()
    }

    const getAppointmentStatusClass = (appointment) => {
      if (appointment.status === 'cancelled') return 'border-red-500'
      if (isFutureAppointment(appointment)) return 'border-green-500'
      return 'border-gray-300 dark:border-gray-600'
    }

    const getStatusClass = (status) => {
      switch (status) {
        case 'confirmed':
          return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
        case 'cancelled':
          return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
        case 'completed':
          return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
        default:
          return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
      }
    }

    const getStatusBadgeClass = (status) => {
      switch (status) {
        case 'confirmed':
          return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
        case 'cancelled':
          return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
        case 'completed':
          return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
        default:
          return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
      }
    }

    const viewAppointmentDetails = (appointment) => {
      alert(`Appointment Details:\n\nDoctor: ${appointment.doctorName}\nDate: ${appointment.date}\nTime: ${appointment.time}\nStatus: ${appointment.status}\nReason: ${appointment.reason || 'General consultation'}`)
    }

    const closeCancelModal = () => {
      showCancelConfirmation.value = false
      appointmentToCancel.value = null
    }

    const showCancelModal = (appointment) => {
      appointmentToCancel.value = appointment
      showCancelConfirmation.value = true
    }

    const confirmCancel = () => {
      if (appointmentToCancel.value) {
        const updatedAppointments = appointments.value.map(apt => 
          apt.id === appointmentToCancel.value.id 
            ? { ...apt, status: 'cancelled' }
            : apt
        )
        appointments.value = updatedAppointments
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
      }
      showCancelConfirmation.value = false
      appointmentToCancel.value = null
    }

    const rescheduleAppointment = (appointment) => {
      // For now, redirect to doctors page - in a real app this would open a reschedule modal
      emit('navigate', 'doctors')
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

    const formatDateTime = (isoString) => {
      const date = new Date(isoString)
      return date.toLocaleDateString('en-US', { 
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      })
    }

    onMounted(() => {
      loadAppointments()
    })

    return {
      appointments,
      appointmentToCancel,
      showCancelConfirmation,
      loadAppointments,
      formatDate,
      formatTime,
      isFutureAppointment,
      getAppointmentStatusClass,
      getStatusClass,
      viewAppointmentDetails,
      showCancelModal,
      confirmCancel,
      closeCancelModal,
      rescheduleAppointment
    }
  }
}
</script>
