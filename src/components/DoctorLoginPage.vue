<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <div class="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span class="icon-stethoscope text-primary-600 text-3xl"></span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-4">Elite Physician Portal</h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl leading-relaxed">Access your premium practice dashboard</p>
      </div>

      <!-- Login Form -->
      <div class="card-elegant">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="icon-sign-in-alt text-primary-600 text-2xl"></span>
          </div>
          <h2 class="text-2xl font-bold text-secondary-800 dark:text-white">Secure Login</h2>
          <p class="text-secondary-600 dark:text-secondary-300 mt-2">Enter your credentials to access your dashboard</p>
        </div>
        
        <form @submit.prevent="submitLogin" class="space-y-6">
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
              placeholder="doctor@healthcare.com"
            >
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
              Password *
            </label>
            <div class="relative">
              <input 
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="input-field pr-10"
                :class="{ 'border-red-500': errors.password }"
                placeholder="Enter your password"
              >
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <span :class="showPassword ? 'icon-eye-slash' : 'icon-eye'" class="text-gray-400"></span>
              </button>
            </div>
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center">
            <input 
              v-model="form.rememberMe"
              type="checkbox" 
              id="remember"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            >
            <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="isSubmitting" class="btn-primary w-full text-lg py-4 mt-8">
            <span v-if="isSubmitting" class="icon-spinner mr-3"></span>
            <span v-else class="icon-sign-in-alt mr-3"></span>
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
