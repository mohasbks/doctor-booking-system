<template>
  <div>
    <!-- Beautiful & Simple Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden overscroll-none">
      <!-- Clean Background -->
      <div class="absolute inset-0">
        <img src="/pexels-tara-winstead-7722680.jpg" alt="Medical Professional" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-900/80"></div>
      </div>
      
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
        <div class="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-twinkle" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle" style="animation-delay: 4s;"></div>
        <div class="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle" style="animation-delay: 6s;"></div>
      </div>
      
      <div class="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-left md:text-center z-10 overflow-hidden">
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 shadow-xl fade-in-up" style="animation-delay: 0.2s;">
            <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span class="text-white font-medium tracking-wide text-sm">✨ Premium Healthcare Excellence</span>
          </div>
          
          <!-- Main Heading with Typewriter Animation -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white typewriter-text" data-text="Your Health is">
              <span class="typewriter-cursor">|</span>
            </h1>
            <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent typewriter-text-2" data-text="Our Priority">
              <span class="typewriter-cursor-2">|</span>
            </h2>
          </div>
          
          <!-- Description -->
          <p class="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl md:mx-auto leading-relaxed fade-in-up" style="animation-delay: 0.8s;">
            Experience world-class healthcare with our network of board-certified specialists and cutting-edge medical technology
          </p>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 md:justify-center pt-8 fade-in-up" style="animation-delay: 1s;">
            <button @click="$emit('navigate', 'doctors')" class="hero-btn-primary">
              <span class="icon-user-md mr-2"></span>
              Find Specialists
            </button>
            <button @click="$emit('navigate', 'appointments')" class="hero-btn-secondary">
              <span class="icon-calendar-plus mr-2"></span>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Beautiful Search Section -->
    <section class="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-secondary-900 dark:via-blue-900 dark:to-cyan-900 relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div class="absolute top-32 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 3s;"></div>
        <div class="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Doctor
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Search and book appointments with qualified medical professionals
          </p>
        </div>
        
        <!-- Simple Search Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Specialty Selection -->
            <div>
              <label class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Specialty
              </label>
              <select v-model="searchSpecialty" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                <option value="">All Specialties</option>
                <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                  {{ specialty }}
                </option>
              </select>
            </div>
            
            <!-- Location Input -->
            <div>
              <label class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Location
              </label>
              <input 
                v-model="searchLocation" 
                type="text" 
                placeholder="Enter city or area" 
                class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            
            <!-- Search Button -->
            <div class="flex items-end">
              <button 
                @click="searchDoctors" 
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Search Doctors
              </button>
            </div>
          </div>
        </div>
        
        <!-- Quick Specialty Cards -->
        <div class="mt-12">
          <h3 class="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
            Popular Specialties
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="specialty in quickSpecialties" :key="specialty" 
                 @click="searchBySpecialty(specialty)"
                 class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
            >
              <div class="text-2xl mb-2">{{ getSpecialtyIcon(specialty) }}</div>
              <h4 class="font-medium text-gray-900 dark:text-white text-sm">{{ specialty }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 slide-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quality healthcare with modern technology and expert care
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-left">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">24/7 Care</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Round-the-clock medical support and emergency response teams.
            </p>
          </div>
        
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-up">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modern Technology</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Advanced medical equipment and treatment methods.
            </p>
          </div>
        
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-right">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Team</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              Board-certified physicians and healthcare professionals.
            </p>
          </div>
        </div>
      </div>
  </section>

    <!-- Medical Specialties Section -->
    <section class="py-20 bg-white dark:bg-gray-900 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 slide-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Medical Specialties
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert care across multiple medical disciplines
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(specialty, index) in specialtyCards" :key="specialty.name" 
               class="group cursor-pointer slide-in-up"
               :style="`animation-delay: ${index * 0.1}s`"
               @click="searchBySpecialty(specialty.name)">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400">
                {{ specialty.icon }}
              </div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">{{ specialty.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ specialty.description }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="text-center mt-12">
          <button @click="$emit('navigate', 'doctors')" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            View All Doctors
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 slide-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Patient Reviews
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from our patients
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-left">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              "Exceptional experience with professional doctors. The service exceeded my expectations."
            </p>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-medium text-sm">A</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white text-sm">Ahmed Mohammed</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Cardiology Patient</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-up">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              "Outstanding medical facility with advanced technology. The team made me feel comfortable throughout."
            </p>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-medium text-sm">S</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white text-sm">Sarah Johnson</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Orthopedic Patient</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 slide-in-right">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              "The level of care and expertise is unmatched. I highly recommend their services for quality healthcare."
            </p>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-medium text-sm">M</span>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white text-sm">Michael Chen</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Dermatology Patient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div class="absolute bottom-32 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Company Info -->
            <div>
              <div class="flex items-center mb-6">
                <span class="icon icon-heartbeat text-blue-400 text-3xl mr-3"></span>
                <span class="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MediCare Elite</span>
              </div>
              <p class="text-gray-300 leading-relaxed mb-8 max-w-md text-sm md:text-base">
                We provide the finest healthcare services with a network of specialized physicians and state-of-the-art medical facilities to ensure your health and wellbeing.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a href="#" class="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center hover:from-sky-400 hover:to-sky-500 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="#" class="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a href="#" class="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div>
              <h3 class="text-lg md:text-xl font-bold mb-6 text-blue-200">Quick Links</h3>
              <ul class="space-y-3">
                <li><a href="#" @click="$emit('navigate', 'home')" class="text-gray-300 hover:text-blue-200 transition-colors text-sm md:text-base">Home</a></li>
                <li><a href="#" @click="$emit('navigate', 'doctors')" class="text-gray-300 hover:text-blue-200 transition-colors text-sm md:text-base">Our Doctors</a></li>
                <li><a href="#" @click="$emit('navigate', 'appointments')" class="text-gray-300 hover:text-blue-200 transition-colors text-sm md:text-base">My Appointments</a></li>
                <li><a href="#" @click="$emit('navigate', 'contact')" class="text-gray-300 hover:text-blue-200 transition-colors text-sm md:text-base">Contact Us</a></li>
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div>
              <h3 class="text-lg md:text-xl font-bold mb-6 text-blue-200">Contact Information</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <span class="icon-phone text-blue-300 text-lg mr-3"></span>
                  <span class="text-gray-300 text-sm md:text-base">+1 (555) 123-4567</span>
                </li>
                <li class="flex items-center">
                  <span class="icon-envelope text-blue-300 text-lg mr-3"></span>
                  <span class="text-gray-300 text-sm md:text-base">info@medicareelite.com</span>
                </li>
                <li class="flex items-start">
                  <span class="icon-map-marker-alt text-blue-300 text-lg mr-3 mt-1"></span>
                  <span class="text-gray-300 text-sm md:text-base">New York, United States</span>
                </li>
                <li class="flex items-center">
                  <span class="icon-clock text-blue-300 text-lg mr-3"></span>
                  <span class="text-gray-300 text-sm md:text-base">24/7 Continuous Service</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Bottom Bar -->
          <div class="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-primary-300 text-xs md:text-sm mb-4 md:mb-0">
              © 2024 MediCare Elite. All rights reserved.
            </p>
            <div class="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              <a @click="$emit('navigate', 'privacy-policy')" class="text-primary-300 hover:text-white transition-colors cursor-pointer hover:underline">Privacy Policy</a>
              <a @click="$emit('navigate', 'terms-conditions')" class="text-primary-300 hover:text-white transition-colors cursor-pointer hover:underline">Terms & Conditions</a>
              <a @click="$emit('navigate', 'help')" class="text-primary-300 hover:text-white transition-colors cursor-pointer hover:underline">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { doctors, specialties, specialtyCards } from '../data/doctors.js'

export default {
  name: 'HomePage',
  emits: ['navigate'],
  setup(props, { emit }) {
    const searchSpecialty = ref('')
    const searchLocation = ref('')
    const searchDoctor = ref('')

    const specialties = [
      { name: 'Cardiology', icon: '❤️', description: 'Heart and cardiovascular care' },
      { name: 'Dentistry', icon: '🦷', description: 'Dental and oral health' },
      { name: 'Dermatology', icon: '✨', description: 'Skin and beauty care' },
      { name: 'Orthopedics', icon: '🦴', description: 'Bone and joint care' },
      { name: 'Pediatrics', icon: '👶', description: 'Children\'s healthcare' },
      { name: 'Neurology', icon: '🧠', description: 'Brain and nervous system' },
      { name: 'Psychiatry', icon: '🧘', description: 'Mental health and wellness' },
      { name: 'Ophthalmology', icon: '👁️', description: 'Eye care and vision' }
    ]

    const quickSpecialties = ['Cardiology', 'Dentistry', 'Dermatology', 'Pediatrics']
    
    const getSpecialtyIcon = (specialty) => {
      const specialtyMap = {
        'Cardiology': '❤️',
        'Dentistry': '🦷', 
        'Dermatology': '✨',
        'Orthopedics': '🦴',
        'Pediatrics': '👶',
        'Neurology': '🧠',
        'Psychiatry': '🧘',
        'Ophthalmology': '👁️'
      }
      return specialtyMap[specialty] || '🏥'
    }

    const searchDoctors = () => {
      emit('navigate', 'doctors')
    }

    const searchBySpecialty = (specialty) => {
      console.log('Searching by specialty:', specialty)
      localStorage.setItem('selectedSpecialty', specialty)
      emit('navigate', 'doctors')
    }

    // Statistics from localStorage
    const totalDoctors = computed(() => {
      const doctors = JSON.parse(localStorage.getItem('doctors') || '[]')
      return doctors.length || 500
    })

    const totalAppointments = computed(() => {
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]')
      return appointments.length
    })
    
    // Typewriter Animation
    const typeWriter = (element, text, speed = 100) => {
      let i = 0
      element.innerHTML = ''
      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i)
          i++
        } else {
          clearInterval(timer)
          // Hide cursor after typing is complete
          const cursor = element.nextElementSibling
          if (cursor && cursor.classList.contains('typewriter-cursor')) {
            setTimeout(() => cursor.style.display = 'none', 1000)
          }
          if (cursor && cursor.classList.contains('typewriter-cursor-2')) {
            setTimeout(() => cursor.style.display = 'none', 1000)
          }
        }
      }, speed)
    }

    // Scroll Animation Observer
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      }, { threshold: 0.1 })

      // Observe all slide elements
      document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .section-reveal').forEach(el => {
        observer.observe(el)
      })
    }

    onMounted(() => {
      // Start typewriter animations
      setTimeout(() => {
        const text1 = document.querySelector('.typewriter-text')
        if (text1) {
          typeWriter(text1, 'Your Health is', 80)
        }
      }, 1000)

      setTimeout(() => {
        const text2 = document.querySelector('.typewriter-text-2')
        if (text2) {
          typeWriter(text2, 'Our Priority', 80)
        }
      }, 3000)

      // Initialize scroll animations
      setTimeout(() => {
        observeElements()
      }, 500)
    })

    return {
      searchSpecialty,
      searchLocation,
      searchDoctor,
      specialties,
      specialtyCards,
      quickSpecialties,
      getSpecialtyIcon,
      searchDoctors,
      searchBySpecialty,
      totalDoctors,
      totalAppointments
    }
  }
}
</script>

<style scoped>
/* Hero Section Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Buttons */
.hero-btn-primary {
  background: linear-gradient(to right, rgb(37 99 235), rgb(6 182 212));
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.hero-btn-primary:hover {
  background: linear-gradient(to right, rgb(29 78 216), rgb(8 145 178));
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.hero-btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  transform: scale(1);
  backdrop-filter: blur(4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.hero-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

/* Smooth Animations */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

/* Typewriter Animation */
.typewriter-text, .typewriter-text-2 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid transparent;
  max-width: 100%;
  width: fit-content;
}

.typewriter-cursor, .typewriter-cursor-2 {
  opacity: 1;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes typewriter2 {
  from { width: 0; }
  to { width: 100%; }
}

/* Slide Animations */
.slide-in-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.8s ease-out;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.8s ease-out;
}

.slide-in-up {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.slide-in-left.revealed,
.slide-in-right.revealed,
.slide-in-up.revealed {
  opacity: 1;
  transform: translate(0);
}

.section-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.section-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Specialty Cards */
.specialty-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse Animation */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Bounce Subtle */
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Text Shimmer */
@keyframes text-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-text-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  background-size: 200% 100%;
  animation: text-shimmer 3s ease-in-out infinite;
}

/* Text Gradient Shine */
.text-gradient-shine {
  background: linear-gradient(45deg, #1e40af, #0891b2, #06b6d4, #1e40af);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shine 3s ease-in-out infinite;
}

@keyframes gradient-shine {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Search Card Animation */
.search-card {
  animation: searchCardReveal 1s ease-out forwards;
}

@keyframes searchCardReveal {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Quick Specialty Cards */
.specialty-quick-card {
  opacity: 0;
  transform: translateY(30px);
  animation: specialtyCardReveal 0.8s ease-out forwards;
}

@keyframes specialtyCardReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced hover effects */
.specialty-quick-card:hover {
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

/* Dark mode adjustments */
.dark .text-gradient-shine {
  background: linear-gradient(45deg, #60a5fa, #22d3ee, #06b6d4, #60a5fa);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shine 3s ease-in-out infinite;
}

/* Section Reveal Animation */
.reveal-section {
  opacity: 0;
  transform: translateY(50px);
  animation: revealSection 1s ease-out forwards;
}

@keyframes revealSection {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Feature Cards */
.feature-card {
  opacity: 0;
  transform: translateY(30px);
  animation: featureCardReveal 0.8s ease-out forwards;
}

@keyframes featureCardReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Specialty Professional Cards */
.specialty-professional-card {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: specialtyProfessionalReveal 0.8s ease-out forwards;
}

@keyframes specialtyProfessionalReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Testimonial Cards */
.testimonial-card {
  opacity: 0;
  transform: translateY(40px);
  animation: testimonialReveal 0.8s ease-out forwards;
}

@keyframes testimonialReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stats Section */
.stats-section {
  opacity: 0;
  transform: translateY(30px);
  animation: statsReveal 1s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes statsReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stat Items */
.stat-item {
  opacity: 0;
  transform: translateY(20px);
  animation: statItemReveal 0.6s ease-out forwards;
}

@keyframes statItemReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Counter Animation */
.counter-animation {
  animation: counterPulse 2s ease-in-out infinite;
}

@keyframes counterPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>

<style scoped>
/* Scroll-triggered animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
}

/* Page transition */
.page-enter-active, .page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Dark mode transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Skeleton loading animations */
@keyframes skeleton-loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400px 100%;
  animation: skeleton-loading 1.4s ease-in-out infinite;
}

.dark .skeleton {
  background: linear-gradient(90deg, #374151 25%, #4b5563 37%, #374151 63%);
  background-size: 400px 100%;
}

/* Enhanced hover effects */
.card-hover {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Floating animation for hero elements */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>

