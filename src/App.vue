<template>
  <div class="min-h-screen">
    <!-- Navigation Bar -->
    <nav class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <span class="text-blue-600 text-2xl mr-2">🏥</span>
            <span class="text-xl font-bold text-gray-900 dark:text-white">MediCare Elite</span>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-6">
              <a @click="currentPage = 'home'" :class="navLinkClass('home')" class="nav-link cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a @click="currentPage = 'doctors'" :class="navLinkClass('doctors')" class="nav-link cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Doctors
              </a>
              <a @click="currentPage = 'appointments'" :class="navLinkClass('appointments')" class="nav-link cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                My Appointments
              </a>
              <a @click="currentPage = 'contact'" :class="navLinkClass('contact')" class="nav-link cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <a @click="currentPage = 'doctor-login'" :class="navLinkClass('doctor-login')" class="nav-link cursor-pointer text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Doctor Login
              </a>
            </div>
          </div>
          
          <!-- Dark Mode Toggle -->
          <div class="flex items-center space-x-3">
            <button @click="toggleDarkMode" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <span class="text-lg">{{ isDark ? '☀️' : '🌙' }}</span>
            </button>
            
            <!-- Mobile menu button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
              <div class="w-5 h-4 flex flex-col justify-between">
                <span :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''" class="block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-transform duration-200"></span>
                <span :class="mobileMenuOpen ? 'opacity-0' : ''" class="block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-opacity duration-200"></span>
                <span :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''" class="block h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-transform duration-200"></span>
              </div>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 mt-2 pt-4 pb-4">
          <div class="flex flex-col space-y-1">
            <a @click="currentPage = 'home'; mobileMenuOpen = false" :class="mobileNavLinkClass('home')" class="cursor-pointer px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              🏠 Home
            </a>
            <a @click="currentPage = 'doctors'; mobileMenuOpen = false" :class="mobileNavLinkClass('doctors')" class="cursor-pointer px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              👨‍⚕️ Doctors
            </a>
            <a @click="currentPage = 'appointments'; mobileMenuOpen = false" :class="mobileNavLinkClass('appointments')" class="cursor-pointer px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              📅 My Appointments
            </a>
            <a @click="currentPage = 'contact'; mobileMenuOpen = false" :class="mobileNavLinkClass('contact')" class="cursor-pointer px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              📞 Contact
            </a>
            <a @click="currentPage = 'doctor-login'; mobileMenuOpen = false" :class="mobileNavLinkClass('doctor-login')" class="cursor-pointer px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              🔐 Doctor Login
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1">
      <HomePage v-if="currentPage === 'home'" @navigate="navigateTo" />
      <DoctorsPage v-else-if="currentPage === 'doctors'" @navigate="navigateTo" @book-appointment="bookAppointment" />
      <BookingPage v-else-if="currentPage === 'booking'" @navigate="navigateTo" :selected-doctor="selectedDoctor" />
      <AppointmentsPage v-else-if="currentPage === 'appointments'" @navigate="navigateTo" />
      <ContactPage v-else-if="currentPage === 'contact'" @navigate="navigateTo" />
      <DoctorLoginPage v-else-if="currentPage === 'doctor-login'" @navigate="navigateTo" />
      <DoctorDashboard v-else-if="currentPage === 'doctor-dashboard'" @navigate="navigateTo" />
      <PrivacyPolicyPage v-else-if="currentPage === 'privacy-policy'" @navigate="navigateTo" />
      <TermsConditionsPage v-else-if="currentPage === 'terms-conditions'" @navigate="navigateTo" />
      <HelpPage v-else-if="currentPage === 'help'" @navigate="navigateTo" />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import HomePage from './components/HomePage.vue'
import DoctorsPage from './components/DoctorsPage.vue'
import BookingPage from './components/BookingPage.vue'
import AppointmentsPage from './components/AppointmentsPage.vue'
import ContactPage from './components/ContactPage.vue'
import DoctorLoginPage from './components/DoctorLoginPage.vue'
import DoctorDashboard from './components/DoctorDashboard.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import TermsConditionsPage from './components/TermsConditionsPage.vue'
import HelpPage from './components/HelpPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    DoctorsPage,
    BookingPage,
    AppointmentsPage,
    ContactPage,
    DoctorLoginPage,
    DoctorDashboard,
    PrivacyPolicyPage,
    TermsConditionsPage,
    HelpPage
  },
  setup() {
    const currentPage = ref('home')
    const selectedDoctor = ref(null)
    const mobileMenuOpen = ref(false)
    const isDark = ref(false)

    // Dark mode functionality
    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }

    // Initialize dark mode from localStorage
    onMounted(() => {
      const savedDarkMode = localStorage.getItem('darkMode')
      if (savedDarkMode === 'true') {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
      
      // Load selected doctor from localStorage if exists
      const savedDoctor = localStorage.getItem('selectedDoctor')
      if (savedDoctor) {
        try {
          selectedDoctor.value = JSON.parse(savedDoctor)
        } catch (e) {
          console.error('Error loading selectedDoctor from localStorage:', e)
        }
      }
    })

    const navigateTo = (page) => {
      currentPage.value = page
      mobileMenuOpen.value = false
    }

    const bookAppointment = (doctor) => {
      selectedDoctor.value = doctor
      localStorage.setItem('selectedDoctor', JSON.stringify(doctor))
      currentPage.value = 'booking'
    }

    const confirmBooking = () => {
      currentPage.value = 'appointments'
    }

    const navLinkClass = (page) => {
      return currentPage.value === page
        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
        : ''
    }

    const mobileNavLinkClass = (page) => {
      return currentPage.value === page
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
    }

    return {
      currentPage,
      selectedDoctor,
      mobileMenuOpen,
      isDark,
      navigateTo,
      bookAppointment,
      confirmBooking,
      toggleDarkMode,
      navLinkClass,
      mobileNavLinkClass
    }
  }
}
</script>

<style>
/* Removed page transitions for better performance */ 
/* Dark mode smooth transitions */
* {
  transition: background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), 
              border-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), 
              color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
              box-shadow 0.3s ease;
}

/* Loading skeleton */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400px 100%;
  animation: loading-skeleton 1.4s ease-in-out infinite;
}

.dark .loading-skeleton {
  background: linear-gradient(90deg, #374151 25%, #4b5563 37%, #374151 63%);
}

@keyframes loading-skeleton {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}
</style>
