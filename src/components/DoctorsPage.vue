<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-6">Our Elite Physicians</h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl max-w-3xl mx-auto leading-relaxed">Discover exceptional healthcare professionals dedicated to your wellness and recovery</p>
      </div>

      <!-- Search and Filter Section -->
      <div class="card-elegant mb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Search Bar -->
          <div class="md:col-span-2">
            <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Find Your Doctor</label>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search by name or specialty..."
              class="input-field"
              @input="filterDoctors"
            >
          </div>
          
          <!-- Specialty Filter -->
          <div>
            <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Medical Specialty</label>
            <select v-model="selectedSpecialty" @change="filterDoctors" class="input-field">
              <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                {{ specialty }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-8">
        <p class="text-secondary-600 dark:text-secondary-300 text-lg font-medium">
          <span class="text-primary-600 dark:text-primary-400 font-bold">{{ filteredDoctors.length }}</span> of {{ doctors.length }} elite physicians
        </p>
      </div>

      <!-- Doctors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="doctor in paginatedDoctors" :key="doctor.id" class="doctor-card group">
          <!-- Doctor Image -->
          <div class="text-center mb-6">
            <div class="relative inline-block">
              <img :src="doctor.image" :alt="doctor.name" class="w-28 h-28 rounded-2xl mx-auto object-cover mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-secondary-800 flex items-center justify-center">
                <span class="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-secondary-800 dark:text-white mb-2">{{ doctor.name }}</h3>
            <p class="text-primary-600 dark:text-primary-400 font-semibold text-lg">{{ doctor.specialty }}</p>
          </div>

          <!-- Doctor Info -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-center text-secondary-600 dark:text-secondary-300">
              <span class="icon-map-marker-alt mr-3 text-accent-600"></span>
              <span class="font-medium">{{ doctor.location }}</span>
            </div>
            <div class="flex items-center justify-center text-secondary-600 dark:text-secondary-300">
              <span class="icon-star mr-3 text-yellow-500"></span>
              <span class="font-medium">{{ doctor.rating }} ⭐ • {{ doctor.experience }} experience</span>
            </div>
          </div>

          <!-- About -->
          <p class="text-secondary-600 dark:text-secondary-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {{ doctor.about }}
          </p>

          <!-- Working Hours Preview -->
          <div class="mb-6">
            <p class="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Available Days:</p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span v-for="day in doctor.workingDays.slice(0, 3)" :key="day" 
                    class="text-xs bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg font-medium shadow-sm">
                {{ capitalizeFirst(day) }}
              </span>
              <span v-if="doctor.workingDays.length > 3" class="text-xs bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg font-medium shadow-sm">
                +{{ doctor.workingDays.length - 3 }} more
              </span>
            </div>
          </div>

          <!-- Book Button -->
          <button @click="bookDoctor(doctor)" class="btn-primary w-full text-lg py-4 group-hover:shadow-xl">
            <span class="icon-calendar-plus mr-3"></span>Schedule Consultation
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
      const savedQuery = localStorage.getItem('searchQuery')
      const savedSpecialty = localStorage.getItem('selectedSpecialty')
      
      console.log('DoctorsPage mounted, savedSpecialty:', savedSpecialty)
      
      if (savedQuery) {
        searchQuery.value = savedQuery
        localStorage.removeItem('searchQuery')
      }
      
      if (savedSpecialty && savedSpecialty !== 'All Specialties') {
        selectedSpecialty.value = savedSpecialty
        localStorage.removeItem('selectedSpecialty')
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
