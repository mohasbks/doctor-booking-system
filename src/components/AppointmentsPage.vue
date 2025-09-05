<template>
  <div class="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Enhanced Page Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
          <span class="text-blue-600 dark:text-blue-400 text-sm sm:text-base font-semibold">📅 Healthcare Management</span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-300 dark:to-cyan-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
          My Appointments
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          Track and manage your <span class="font-semibold text-blue-600 dark:text-blue-400">healthcare consultations</span> with ease
        </p>
        
        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{{ appointments.length }}</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Appointments</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">{{ confirmedCount }}</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Confirmed</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">{{ upcomingCount }}</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Upcoming</div>
          </div>
        </div>
      </div>

      <!-- Enhanced Appointments List -->
      <div v-if="appointments && appointments.length > 0" class="space-y-6 sm:space-y-8">
        <div v-for="(appointment, index) in appointments" :key="appointment.id" 
             class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 group">
          <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 sm:gap-8">
            <!-- Enhanced Doctor Info -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div class="relative">
                <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img :src="appointment.doctorImage" :alt="appointment.doctorName" 
                       class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                </div>
                <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-3 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ appointment.doctorName }}</h3>
                <p class="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg mb-2">{{ appointment.specialty }}</p>
                <div class="flex items-center justify-center sm:justify-start text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 rounded-lg px-3 py-1">
                  <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-sm font-medium">{{ appointment.location }}</span>
                </div>
              </div>
            </div>

            <!-- Enhanced Appointment Details -->
            <div class="flex-1">
              <div class="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-900/20 dark:via-gray-800/50 dark:to-cyan-900/20 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-800/30">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div class="bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm">
                    <div class="flex items-center mb-3">
                      <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Date & Time</p>
                    </div>
                    <p class="text-gray-800 dark:text-white font-bold text-base sm:text-lg mb-1">
                      {{ formatDate(appointment.date) }}
                    </p>
                    <p class="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg">
                      {{ formatTime(appointment.time) }}
                    </p>
                  </div>
                  <div class="bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm">
                    <div class="flex items-center mb-3">
                      <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Status</p>
                    </div>
                    <span :class="getStatusClass(appointment.status)" class="inline-block px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                      {{ appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1) }}
                    </span>
                  </div>
                </div>
                
                <div v-if="appointment.reason" class="bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm mb-6">
                  <div class="flex items-center mb-3">
                    <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Consultation Reason</p>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ appointment.reason }}</p>
                </div>
                
                <!-- Enhanced Action Buttons -->
                <div class="flex flex-wrap gap-3">
                  <button v-if="appointment.status === 'confirmed'" 
                          @click="rescheduleAppointment(appointment)"
                          class="flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800/70 dark:hover:to-cyan-800/70 font-semibold py-3 px-4 rounded-xl transition-all duration-200 border border-blue-200 dark:border-blue-700">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>Reschedule
                  </button>
                  
                  <button v-if="appointment.status === 'confirmed'" 
                          @click="showCancelModal(appointment)"
                          class="flex items-center bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 text-red-700 dark:text-red-300 hover:from-red-200 hover:to-pink-200 dark:hover:from-red-800/70 dark:hover:to-pink-800/70 font-semibold py-3 px-4 rounded-xl transition-all duration-200 border border-red-200 dark:border-red-700">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>Cancel
                  </button>

                  <button @click="viewAppointmentDetails(appointment)"
                          class="flex items-center bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-700/50 dark:to-slate-700/50 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-slate-200 dark:hover:from-gray-600/70 dark:hover:to-slate-600/70 font-semibold py-3 px-4 rounded-xl transition-all duration-200 border border-gray-200 dark:border-gray-600">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>Details
                  </button>
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
import { ref, onMounted, computed } from 'vue'

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

    // Computed properties for stats
    const confirmedCount = computed(() => 
      appointments.value.filter(apt => apt.status === 'confirmed').length
    )
    
    const upcomingCount = computed(() => 
      appointments.value.filter(apt => isFutureAppointment(apt)).length
    )

    return {
      appointments,
      appointmentToCancel,
      showCancelConfirmation,
      confirmedCount,
      upcomingCount,
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
