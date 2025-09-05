<template>
  <div class="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 dark:from-gray-900 dark:via-blue-900/30 dark:to-cyan-900/30 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Enhanced Page Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
          <span class="text-blue-600 dark:text-blue-400 text-sm sm:text-base font-semibold">👩‍⚕️ Meet Our Expert Team</span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-300 dark:to-cyan-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
          Elite Medical Professionals
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
          Connect with <span class="font-semibold text-blue-600 dark:text-blue-400">board-certified specialists</span> who are committed to delivering exceptional healthcare tailored to your unique needs
        </p>
        
        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{{ doctors.length }}+</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Expert Doctors</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Specialties</div>
          </div>
        </div>
      </div>

      <!-- Enhanced Search and Filter Section -->
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 mb-8 sm:mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <!-- Enhanced Search Bar -->
          <div class="lg:col-span-2">
            <label class="flex items-center text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">
              🔍 Find Your Doctor
            </label>
            <div class="relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Search by name, specialty, or location..."
                class="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                @input="filterDoctors"
              >
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Enhanced Specialty Filter -->
          <div>
            <label class="flex items-center text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">
              🏥 Medical Specialty
            </label>
            <select v-model="selectedSpecialty" @change="filterDoctors" class="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base">
              <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                {{ specialty }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Enhanced Results Count & Filter Pills -->
      <div class="mb-6 sm:mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p class="text-gray-600 dark:text-gray-300 text-lg font-medium">
            Found <span class="text-blue-600 dark:text-blue-400 font-bold text-xl">{{ filteredDoctors.length }}</span> of {{ doctors.length }} specialists
          </p>
          
          <!-- Active Filters -->
          <div class="flex flex-wrap gap-2" v-if="searchQuery || selectedSpecialty !== 'All Specialties'">
            <span v-if="selectedSpecialty !== 'All Specialties'" class="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {{ selectedSpecialty }}
              <button @click="selectedSpecialty = 'All Specialties'; filterDoctors()" class="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                ✕
              </button>
            </span>
            <span v-if="searchQuery" class="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
              "{{ searchQuery }}"
              <button @click="searchQuery = ''; filterDoctors()" class="ml-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
                ✕
              </button>
            </span>
          </div>
        </div>
      </div>

      <!-- Enhanced Doctors Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="doctor in paginatedDoctors" :key="doctor.id" class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 group">
          <!-- Enhanced Doctor Image -->
          <div class="text-center mb-6">
            <div class="relative inline-block">
              <div class="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <img :src="doctor.image" :alt="doctor.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
                <span class="text-white text-sm font-bold">✓</span>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ doctor.name }}</h3>
            <p class="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg">{{ doctor.specialty }}</p>
          </div>

          <!-- Enhanced Doctor Info -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 rounded-lg py-2 px-4">
              <svg class="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="font-medium text-sm">{{ doctor.location }}</span>
            </div>
            <div class="flex items-center justify-center text-gray-600 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg py-2 px-4">
              <svg class="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="font-semibold text-yellow-600 dark:text-yellow-400 text-sm">{{ doctor.rating }}</span>
              <span class="text-gray-500 dark:text-gray-400 ml-2 text-sm">• {{ doctor.experience }} exp.</span>
            </div>
          </div>

          <!-- Enhanced About -->
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
            {{ doctor.about }}
          </p>

          <!-- Enhanced Working Hours -->
          <div class="mb-6">
            <div class="flex items-center mb-3">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Available Days</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="day in doctor.workingDays.slice(0, 3)" :key="day" 
                    class="text-xs bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full font-medium border border-green-200 dark:border-green-700">
                {{ capitalizeFirst(day) }}
              </span>
              <span v-if="doctor.workingDays.length > 3" class="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-medium border border-blue-200 dark:border-blue-700">
                +{{ doctor.workingDays.length - 3 }} more
              </span>
            </div>
          </div>

          <!-- Enhanced Book Button -->
          <button @click="bookDoctor(doctor)" class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group-hover:shadow-2xl">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Schedule Consultation
          </button>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-if="filteredDoctors.length === 0" class="text-center py-16">
        <div class="w-24 h-24 bg-gradient-to-br from-secondary-100 to-accent-100 dark:from-secondary-800 dark:to-accent-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span class="icon-search text-secondary-400 text-3xl"></span>
        </div>
        <h3 class="text-2xl font-bold text-secondary-600 dark:text-secondary-300 mb-4">No Physicians Found</h3>
        <p class="text-secondary-500 dark:text-secondary-400 text-lg">Please refine your search criteria to discover our specialists</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-12">
        <div class="flex space-x-3">
          <button 
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-3 rounded-xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 shadow-sm"
          >
            <span class="icon-chevron-left"></span>
          </button>
          
          <button 
            v-for="page in visiblePages" 
            :key="page"
            @click="currentPage = page"
            :class="currentPage === page ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg' : 'bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 hover:border-primary-300'"
            class="px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm"
          >
            {{ page }}
          </button>
          
          <button 
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-3 rounded-xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 shadow-sm"
          >
            <span class="icon-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { doctors, specialties } from '../data/doctors.js'

export default {
  name: 'DoctorsPage',
  emits: ['navigate', 'book-appointment'],
  setup(props, { emit }) {
    const searchQuery = ref('')
    const selectedSpecialty = ref('All Specialties')
    const currentPage = ref(1)
    const doctorsPerPage = 6

    // Check for search query from home page
    onMounted(() => {
      // Load search criteria from localStorage
      const searchCriteria = localStorage.getItem('searchCriteria')
      if (searchCriteria) {
        try {
          const criteria = JSON.parse(searchCriteria)
          if (criteria.specialty) {
            selectedSpecialty.value = criteria.specialty
          }
          if (criteria.doctor) {
            searchQuery.value = criteria.doctor
          }
          localStorage.removeItem('searchCriteria') // Clean up
          filterDoctors()
        } catch (e) {
          console.log('Error parsing search criteria:', e)
        }
      }
      
      // Legacy support for old selectedSpecialty format
      const legacySpecialty = localStorage.getItem('selectedSpecialty')
      if (legacySpecialty) {
        selectedSpecialty.value = legacySpecialty
        localStorage.removeItem('selectedSpecialty')
        filterDoctors()
      }
    })

    const filteredDoctors = computed(() => {
      let filtered = doctors

      // Filter by specialty
      if (selectedSpecialty.value !== 'All Specialties') {
        filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty.value)
      }

      // Filter by search query
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(doctor => 
          doctor.name.toLowerCase().includes(query) || 
          doctor.specialty.toLowerCase().includes(query)
        )
      }

      return filtered
    })

    const totalPages = computed(() => Math.ceil(filteredDoctors.value.length / doctorsPerPage))
    
    const paginatedDoctors = computed(() => {
      const start = (currentPage.value - 1) * doctorsPerPage
      const end = start + doctorsPerPage
      return filteredDoctors.value.slice(start, end)
    })

    const visiblePages = computed(() => {
      const pages = []
      const total = totalPages.value
      const current = currentPage.value
      
      for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) {
        pages.push(i)
      }
      
      return pages
    })

    const filterDoctors = () => {
      currentPage.value = 1 // Reset to first page when filtering
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const bookDoctor = (doctor) => {
      emit('book-appointment', doctor)
    }

    return {
      searchQuery,
      selectedSpecialty,
      currentPage,
      doctors,
      specialties,
      filteredDoctors,
      paginatedDoctors,
      totalPages,
      visiblePages,
      filterDoctors,
      formatDate,
      capitalizeFirst,
      bookDoctor
    }
  }
}
</script>
