<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-6">
          Help & Support
        </h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl">
          Find answers to common questions and get the help you need
        </p>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="card-elegant text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="icon-phone text-primary-600 text-2xl"></span>
          </div>
          <h3 class="text-lg font-bold text-secondary-800 dark:text-white mb-2">Call Us</h3>
          <p class="text-secondary-600 dark:text-secondary-300 mb-4">Speak with our support team</p>
          <p class="text-primary-600 dark:text-primary-400 font-semibold">+1 (555) 123-4567</p>
        </div>

        <div class="card-elegant text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900 dark:to-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="icon-envelope text-accent-600 text-2xl"></span>
          </div>
          <h3 class="text-lg font-bold text-secondary-800 dark:text-white mb-2">Email Us</h3>
          <p class="text-secondary-600 dark:text-secondary-300 mb-4">Send us your questions</p>
          <p class="text-primary-600 dark:text-primary-400 font-semibold">help@medicareelite.com</p>
        </div>

        <div class="card-elegant text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="icon-clock text-green-600 text-2xl"></span>
          </div>
          <h3 class="text-lg font-bold text-secondary-800 dark:text-white mb-2">24/7 Support</h3>
          <p class="text-secondary-600 dark:text-secondary-300 mb-4">We're always here to help</p>
          <p class="text-primary-600 dark:text-primary-400 font-semibold">Round the clock</p>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="card-elegant">
        <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-6">
          <!-- FAQ Item 1 -->
          <div class="border-b border-secondary-200 dark:border-secondary-600 pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              How can I book an appointment?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              You can easily book an appointment through the Doctors page. Choose the appropriate doctor and click "Book Consultation" then fill out the form with the required information.
            </p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="border-b border-secondary-200 dark:border-secondary-600 pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              Can I cancel or reschedule my appointment?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              Yes, you can cancel or reschedule your appointment through the "My Appointments" page. Please cancel at least 24 hours in advance to avoid late cancellation fees.
            </p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="border-b border-secondary-200 dark:border-secondary-600 pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              What are your operating hours?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              We operate 24/7 throughout the week. Regular clinic hours are from 8:00 AM to 6:00 PM, with emergency services available around the clock.
            </p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="border-b border-secondary-200 dark:border-secondary-600 pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              Do you accept health insurance?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              Yes, we accept most health insurance plans. Please check with our support team to confirm that your health insurance is accepted.
            </p>
          </div>

          <!-- FAQ Item 5 -->
          <div class="border-b border-secondary-200 dark:border-secondary-600 pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              How can I access my medical records?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              You can request a copy of your medical records by calling us or sending an email. We will process your request within 5-7 business days.
            </p>
          </div>

          <!-- FAQ Item 6 -->
          <div class="pb-6">
            <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-3">
              What should I bring to my first appointment?
            </h3>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              Please bring your ID card, insurance card, a list of current medications, and any previous medical records if available.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="card-elegant mt-12">
        <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-6 text-center">Still Need Help?</h2>
        <p class="text-secondary-600 dark:text-secondary-300 text-center mb-8">
          Send us a message and we'll get back to you as soon as possible
        </p>
        
        <form class="space-y-6 max-w-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Name *</label>
              <input type="text" class="input-field" placeholder="Your full name">
            </div>
            <div>
              <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Email *</label>
              <input type="email" class="input-field" placeholder="your.email@example.com">
            </div>
          </div>
          
          <div>
            <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Subject *</label>
            <input type="text" class="input-field" placeholder="What can we help you with?">
          </div>
          
          <div>
            <label class="block text-base font-semibold text-secondary-700 dark:text-secondary-300 mb-3">Message *</label>
            <textarea rows="5" class="input-field" placeholder="Please describe your question or issue in detail..."></textarea>
          </div>
          
          <div class="text-center">
            <button type="submit" class="btn-primary py-3 px-8">
              <span class="icon-paper-plane mr-2"></span>Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- Back Button -->
      <div class="text-center mt-12">
        <button @click="$emit('navigate', 'home')" class="btn-secondary">
          <span class="icon-arrow-left mr-2"></span>Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpPage',
  emits: ['navigate']
}
</script>
