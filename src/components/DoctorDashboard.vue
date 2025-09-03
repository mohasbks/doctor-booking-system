<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header with Logout -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Doctor Dashboard</h1>
          <p class="text-gray-600 dark:text-gray-300">Welcome back, {{ doctorInfo.name }}</p>
        </div>
        <button @click="logout" class="btn-secondary">
          <span class="icon-sign-out-alt mr-2"></span>Logout
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="icon-calendar-check text-blue-600 text-xl"></span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ todayAppointments.length }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Today's Appointments</p>
        </div>
        
        <div class="card text-center">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="icon-calendar-plus text-green-600 text-xl"></span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ upcomingAppointments.length }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Upcoming</p>
        </div>
        
        <div class="card text-center">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="icon-users text-purple-600 text-xl"></span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ totalPatients }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Total Patients</p>
        </div>
        
        <div class="card text-center">
          <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="icon-star text-yellow-600 text-xl"></span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">4.9</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Average Rating</p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="card mb-8">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button @click="showAddAvailabilityModal" class="btn-primary transform hover:scale-105 transition-all duration-300">
            <span class="icon-calendar-plus mr-2"></span>Add Availability
          </button>
          <button @click="showAddPatientModal" class="btn-secondary transform hover:scale-105 transition-all duration-300">
            <span class="icon-user-plus mr-2"></span>Add Patient
          </button>
          <button @click="showReportsModal" class="btn-secondary transform hover:scale-105 transition-all duration-300">
            <span class="icon-chart-bar mr-2"></span>View Reports
          </button>
        </div>
      </div>

      <!-- Filter Options -->
      <div class="card mb-6">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Date</label>
            <select v-model="selectedDateFilter" @change="filterAppointments" class="input-field">
              <option value="all">All Appointments</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Status</label>
            <select v-model="selectedStatusFilter" @change="filterAppointments" class="input-field">
              <option value="all">All Statuses</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Appointments List -->
      <div class="card">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Patient Appointments</h2>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ filteredAppointments.length }} appointments
          </span>
        </div>

        <div v-if="filteredAppointments.length > 0" class="space-y-4">
          <div v-for="appointment in filteredAppointments" :key="appointment.id" 
               class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
            
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                  <span class="icon-user text-primary-600"></span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ appointment.patientName }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">{{ appointment.phone }}</p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="getStatusBadgeClass(appointment.status)">
                {{ appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1) }}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="icon-calendar w-4 mr-2"></span>
                <span class="text-sm">{{ formatDate(appointment.date) }}</span>
              </div>
              <div class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="icon-clock w-4 mr-2"></span>
                <span class="text-sm">{{ formatTime(appointment.time) }}</span>
              </div>
              <div class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="icon-envelope w-4 mr-2"></span>
                <span class="text-sm">{{ appointment.email }}</span>
              </div>
              <div class="flex items-center text-gray-600 dark:text-gray-300">
                <span class="icon-calendar-plus w-4 mr-2"></span>
                <span class="text-sm">Booked {{ formatDateTime(appointment.bookedAt) }}</span>
              </div>
            </div>

            <div v-if="appointment.reason" class="mb-3">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <strong>Reason:</strong> {{ appointment.reason }}
              </p>
            </div>

            <!-- Appointment Actions -->
            <div class="flex gap-2">
              <button v-if="appointment.status === 'confirmed'" 
                      @click="markAsCompleted(appointment)"
                      class="bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300 text-xs font-medium py-1 px-3 rounded">
                <span class="icon-check mr-1"></span>Mark Complete
              </button>
              <button @click="contactPatient(appointment)"
                      class="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium py-1 px-3 rounded">
                <span class="icon-phone mr-1"></span>Contact
              </button>
              <button @click="viewPatientHistory(appointment)"
                      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium py-1 px-3 rounded">
                <span class="icon-history mr-1"></span>History
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <span class="icon-calendar-times text-gray-400 text-6xl mb-4"></span>
          <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No appointments found</h3>
          <p class="text-gray-500 dark:text-gray-400">No appointments match your current filters</p>
        </div>
      </div>
    </div>

    <!-- Add Availability Modal -->
    <div v-if="showAvailabilityModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-secondary-800 rounded-xl p-6 w-full max-w-md mx-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Add Availability</h3>
        <form @submit.prevent="addAvailability" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
            <input v-model="newAvailability.date" type="date" required class="input-field">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time Slots (comma separated)</label>
            <input v-model="newAvailability.times" type="text" placeholder="09:00, 10:30, 14:00" required class="input-field">
          </div>
          <div class="flex gap-3">
            <button type="submit" class="btn-primary flex-1">Add Slots</button>
            <button type="button" @click="closeAvailabilityModal" class="btn-secondary flex-1">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add Patient Modal -->
    <div v-if="showPatientModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-secondary-800 rounded-xl p-6 w-full max-w-md mx-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Patient</h3>
        <form @submit.prevent="addPatient" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <input v-model="newPatient.name" type="text" required class="input-field">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input v-model="newPatient.email" type="email" required class="input-field">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
            <input v-model="newPatient.phone" type="tel" required class="input-field">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Medical History</label>
            <textarea v-model="newPatient.history" class="input-field" rows="3"></textarea>
          </div>
          <div class="flex gap-3">
            <button type="submit" class="btn-primary flex-1">Add Patient</button>
            <button type="button" @click="closePatientModal" class="btn-secondary flex-1">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Reports Modal -->
    <div v-if="showReports" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-secondary-800 rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Medical Reports & Statistics</h3>
          <button @click="closeReportsModal" class="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200">Total Appointments</h4>
            <p class="text-2xl font-bold text-blue-600">{{ appointments.length }}</p>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800 dark:text-green-200">Completed</h4>
            <p class="text-2xl font-bold text-green-600">{{ completedAppointments.length }}</p>
          </div>
          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 class="font-semibold text-red-800 dark:text-red-200">Cancelled</h4>
            <p class="text-2xl font-bold text-red-600">{{ cancelledAppointments.length }}</p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">Recent Activity</h4>
          <div class="space-y-2">
            <div v-for="appointment in recentAppointments" :key="appointment.id" 
                 class="flex justify-between items-center text-sm">
              <span class="text-gray-600 dark:text-gray-300">{{ appointment.patientName }}</span>
              <span class="text-gray-500">{{ formatDate(appointment.date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'DoctorDashboard',
  emits: ['navigate'],
  setup(props, { emit }) {
    const appointments = ref([])
    const doctorInfo = ref({})
    const selectedDateFilter = ref('all')
    const selectedStatusFilter = ref('all')
    
    // Modal states
    const showAvailabilityModal = ref(false)
    const showPatientModal = ref(false)
    const showReports = ref(false)
    
    // Form data
    const newAvailability = ref({
      date: '',
      times: ''
    })
    
    const newPatient = ref({
      name: '',
      email: '',
      phone: '',
      history: ''
    })

    const loadData = () => {
      // Load doctor info
      const savedDoctorInfo = localStorage.getItem('doctorInfo')
      if (savedDoctorInfo) {
        doctorInfo.value = JSON.parse(savedDoctorInfo)
      }

      // Load appointments
      const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      appointments.value = savedAppointments.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`)
        const dateB = new Date(`${b.date} ${b.time}`)
        return dateA - dateB
      })
    }

    const todayAppointments = computed(() => {
      const today = new Date().toISOString().split('T')[0]
      return appointments.value.filter(apt => 
        apt.date === today && apt.status === 'confirmed'
      )
    })

    const upcomingAppointments = computed(() => {
      const now = new Date()
      return appointments.value.filter(apt => {
        const aptDate = new Date(`${apt.date} ${apt.time}`)
        return aptDate > now && apt.status === 'confirmed'
      })
    })

    const totalPatients = computed(() => {
      const uniqueEmails = new Set(appointments.value.map(apt => apt.email))
      return uniqueEmails.size
    })

    const filteredAppointments = computed(() => {
      let filtered = [...appointments.value]

      // Filter by date
      if (selectedDateFilter.value !== 'all') {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
        const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
        const monthFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)

        filtered = filtered.filter(apt => {
          const aptDate = new Date(apt.date)
          switch (selectedDateFilter.value) {
            case 'today':
              return aptDate.toDateString() === today.toDateString()
            case 'tomorrow':
              return aptDate.toDateString() === tomorrow.toDateString()
            case 'week':
              return aptDate >= today && aptDate <= weekFromNow
            case 'month':
              return aptDate >= today && aptDate <= monthFromNow
            default:
              return true
          }
        })
      }

      // Filter by status
      if (selectedStatusFilter.value !== 'all') {
        filtered = filtered.filter(apt => apt.status === selectedStatusFilter.value)
      }

      return filtered
    })

    const completedAppointments = computed(() => {
      return appointments.value.filter(apt => apt.status === 'completed')
    })

    const cancelledAppointments = computed(() => {
      return appointments.value.filter(apt => apt.status === 'cancelled')
    })

    const recentAppointments = computed(() => {
      return appointments.value
        .sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
        .slice(0, 5)
    })

    const filterAppointments = () => {
      // Filtering is handled by computed property
    }

    // Modal functions
    const showAddAvailabilityModal = () => {
      showAvailabilityModal.value = true
    }

    const closeAvailabilityModal = () => {
      showAvailabilityModal.value = false
      newAvailability.value = { date: '', times: '' }
    }

    const addAvailability = () => {
      const doctors = JSON.parse(localStorage.getItem('doctors') || '[]')
      const timeSlots = newAvailability.value.times.split(',').map(time => time.trim())
      
      // Update doctor's available slots
      const updatedDoctors = doctors.map(doctor => {
        if (doctor.id === doctorInfo.value.id) {
          const existingSlot = doctor.availableSlots.find(slot => slot.date === newAvailability.value.date)
          if (existingSlot) {
            existingSlot.times = [...new Set([...existingSlot.times, ...timeSlots])]
          } else {
            doctor.availableSlots.push({
              date: newAvailability.value.date,
              times: timeSlots
            })
          }
        }
        return doctor
      })
      
      localStorage.setItem('doctors', JSON.stringify(updatedDoctors))
      alert('Availability slots added successfully!')
      closeAvailabilityModal()
    }

    const showAddPatientModal = () => {
      showPatientModal.value = true
    }

    const closePatientModal = () => {
      showPatientModal.value = false
      newPatient.value = { name: '', email: '', phone: '', history: '' }
    }

    const addPatient = () => {
      const patients = JSON.parse(localStorage.getItem('patients') || '[]')
      const newPatientData = {
        id: Date.now(),
        ...newPatient.value,
        doctorId: doctorInfo.value.id,
        createdAt: new Date().toISOString()
      }
      
      patients.push(newPatientData)
      localStorage.setItem('patients', JSON.stringify(patients))
      alert('Patient added successfully!')
      closePatientModal()
    }

    const showReportsModal = () => {
      showReports.value = true
    }

    const closeReportsModal = () => {
      showReports.value = false
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

    const markAsCompleted = (appointment) => {
      const updatedAppointments = appointments.value.map(apt => 
        apt.id === appointment.id 
          ? { ...apt, status: 'completed' }
          : apt
      )
      appointments.value = updatedAppointments
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    }

    const contactPatient = (appointment) => {
      // In a real app, this would open a communication interface
      alert(`Contact ${appointment.patientName} at ${appointment.phone} or ${appointment.email}`)
    }

    const viewPatientHistory = (appointment) => {
      // In a real app, this would show patient's medical history
      alert(`Viewing history for ${appointment.patientName}`)
    }

    const logout = () => {
      localStorage.removeItem('doctorLoggedIn')
      localStorage.removeItem('doctorInfo')
      emit('navigate', 'doctor-login')
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
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
      // Check if doctor is logged in
      const isLoggedIn = localStorage.getItem('doctorLoggedIn')
      if (!isLoggedIn) {
        emit('navigate', 'doctor-login')
        return
      }
      loadData()
    })

    return {
      appointments,
      doctorInfo,
      selectedDateFilter,
      selectedStatusFilter,
      todayAppointments,
      upcomingAppointments,
      totalPatients,
      filteredAppointments,
      completedAppointments,
      cancelledAppointments,
      recentAppointments,
      filterAppointments,
      getStatusBadgeClass,
      markAsCompleted,
      contactPatient,
      viewPatientHistory,
      logout,
      formatDate,
      formatTime,
      formatDateTime,
      // Modal states
      showAvailabilityModal,
      showPatientModal,
      showReports,
      // Modal functions
      showAddAvailabilityModal,
      closeAvailabilityModal,
      addAvailability,
      showAddPatientModal,
      closePatientModal,
      addPatient,
      showReportsModal,
      closeReportsModal,
      // Form data
      newAvailability,
      newPatient
    }
  }
}
</script>
