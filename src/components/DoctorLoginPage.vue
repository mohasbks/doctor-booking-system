<template>
  <div class="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 min-h-screen">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Enhanced Page Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
          <span class="text-purple-600 dark:text-purple-400 text-sm sm:text-base font-semibold">🩺 Doctor Access</span>
        </div>
        <div class="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <svg class="w-12 h-12 sm:w-14 sm:h-14 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-purple-800 to-blue-700 dark:from-white dark:via-purple-300 dark:to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
          Elite Physician Portal
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          Access your <span class="font-semibold text-purple-600 dark:text-purple-400">premium practice dashboard</span> with secure authentication
        </p>
        
        <!-- Security Features -->
        <div class="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">🔒</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Secure Login</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">⚡</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Fast Access</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">🛡️</div>
            <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Protected</div>
          </div>
        </div>
      </div>

      <!-- Enhanced Login Form -->
      <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 sm:p-10">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">Secure Login</h2>
          <p class="text-gray-600 dark:text-gray-300">Enter your credentials to access your dashboard</p>
        </div>
        
        <form @submit.prevent="submitLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label class="flex items-center text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">
              <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email Address *
            </label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full px-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-lg"
              :class="{ 'border-red-500 ring-red-500': errors.email }"
              placeholder="doctor@healthcare.com"
            >
            <p v-if="errors.email" class="text-red-500 text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              {{ errors.email }}
            </p>
          </div>

          <!-- Password -->
          <div>
            <label class="flex items-center text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">
              <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              Password *
            </label>
            <div class="relative">
              <input 
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full px-4 py-4 pr-12 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white text-lg"
                :class="{ 'border-red-500 ring-red-500': errors.password }"
                placeholder="Enter your secure password"
              >
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="text-red-500 text-sm mt-2 flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              {{ errors.password }}
            </p>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
            <input 
              v-model="form.rememberMe"
              type="checkbox" 
              id="remember"
              class="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-600 rounded transition-colors"
            >
            <label for="remember" class="ml-3 flex items-center text-gray-700 dark:text-gray-300 font-medium">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Keep me signed in for 30 days
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="isSubmitting" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-lg mt-8">
            <svg v-if="isSubmitting" class="animate-spin w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-else class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            {{ isSubmitting ? 'Signing in...' : 'Access Elite Dashboard' }}
          </button>
        </form>

        <!-- Demo Credentials -->
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Demo Credentials</h3>
          <p class="text-blue-700 dark:text-blue-300 text-sm mb-2">Use these credentials to test the doctor dashboard:</p>
          <div class="space-y-1 text-sm">
            <p class="text-blue-600 dark:text-blue-400"><strong>Email:</strong> doctor@demo.com</p>
            <p class="text-blue-600 dark:text-blue-400"><strong>Password:</strong> demo123</p>
          </div>
        </div>

        <!-- Forgot Password -->
        <div class="mt-4 text-center">
          <a href="#" class="text-primary-600 hover:text-primary-700 text-sm">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DoctorLoginPage',
  emits: ['navigate'],
  setup(props, { emit }) {
    const form = ref({
      email: '',
      password: '',
      rememberMe: false
    })

    const errors = ref({})
    const isSubmitting = ref(false)
    const showPassword = ref(false)

    const validateForm = () => {
      errors.value = {}

      if (!form.value.email.trim()) {
        errors.value.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      }

      if (!form.value.password.trim()) {
        errors.value.password = 'Password is required'
      } else if (form.value.password.length < 6) {
        errors.value.password = 'Password must be at least 6 characters'
      }

      return Object.keys(errors.value).length === 0
    }

    const submitLogin = async () => {
      if (!validateForm()) return

      isSubmitting.value = true

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check demo credentials
      if (form.value.email === 'doctor@demo.com' && form.value.password === 'demo123') {
        // Save login state
        localStorage.setItem('doctorLoggedIn', 'true')
        localStorage.setItem('doctorInfo', JSON.stringify({
          name: 'Dr. Sarah Johnson',
          email: 'doctor@demo.com',
          specialty: 'Cardiologist',
          loginTime: new Date().toISOString()
        }))
        
        isSubmitting.value = false
        emit('navigate', 'doctor-dashboard')
      } else {
        isSubmitting.value = false
        errors.value.password = 'Invalid email or password'
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      showPassword,
      submitLogin
    }
  }
}
</script>
