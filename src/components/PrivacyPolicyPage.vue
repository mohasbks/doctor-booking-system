<template>
  <div class="py-12 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-secondary-800 to-primary-700 bg-clip-text text-transparent dark:from-white dark:to-primary-300 mb-6">
          Privacy Policy
        </h1>
        <p class="text-secondary-600 dark:text-secondary-300 text-xl">
          Your privacy is our top priority at MediCare Elite
        </p>
      </div>

      <!-- Content -->
      <div class="card-elegant prose max-w-none">
        <div class="space-y-8">
          <!-- Last Updated -->
          <div class="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6">
            <p class="text-sm text-secondary-600 dark:text-secondary-300 mb-0">
              <strong>Last Updated:</strong> September 3, 2025
            </p>
          </div>

          <!-- Introduction -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Introduction</h2>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              At MediCare Elite, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare services and website.
            </p>
          </section>

          <!-- Information We Collect -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Information We Collect</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-2">Personal Information</h3>
                <ul class="list-disc list-inside text-secondary-700 dark:text-secondary-300 space-y-2">
                  <li>Name, address, phone number, and email address</li>
                  <li>Date of birth and identification information</li>
                  <li>Emergency contact information</li>
                  <li>Insurance information and payment details</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold text-secondary-800 dark:text-white mb-2">Medical Information</h3>
                <ul class="list-disc list-inside text-secondary-700 dark:text-secondary-300 space-y-2">
                  <li>Medical history and current health conditions</li>
                  <li>Treatment records and prescription information</li>
                  <li>Test results and diagnostic reports</li>
                  <li>Appointment and consultation records</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- How We Use Information -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">How We Use Your Information</h2>
            <ul class="list-disc list-inside text-secondary-700 dark:text-secondary-300 space-y-2">
              <li>Provide medical care and treatment services</li>
              <li>Schedule and manage appointments</li>
              <li>Process payments and insurance claims</li>
              <li>Communicate important health information</li>
              <li>Improve our services and patient experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <!-- Information Sharing -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Information Sharing</h2>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">
              We may share your information only in the following circumstances:
            </p>
            <ul class="list-disc list-inside text-secondary-700 dark:text-secondary-300 space-y-2">
              <li>With your healthcare team for treatment purposes</li>
              <li>With insurance companies for payment processing</li>
              <li>As required by law or regulatory authorities</li>
              <li>In case of medical emergencies</li>
              <li>With your explicit written consent</li>
            </ul>
          </section>

          <!-- Data Security -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Data Security</h2>
            <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              We implement comprehensive security measures including encryption, secure servers, access controls, and regular security audits to protect your personal and medical information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <!-- Your Rights -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Your Rights</h2>
            <ul class="list-disc list-inside text-secondary-700 dark:text-secondary-300 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request restrictions on information use</li>
              <li>Request a copy of your medical records</li>
              <li>File complaints about privacy practices</li>
            </ul>
          </section>

          <!-- Contact Information -->
          <section>
            <h2 class="text-2xl font-bold text-secondary-800 dark:text-white mb-4">Contact Us</h2>
            <div class="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6">
              <p class="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or your personal information, please contact us:
              </p>
              <ul class="text-secondary-700 dark:text-secondary-300 space-y-2">
                <li><strong>Email:</strong> privacy@medicareelite.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> New York, United States</li>
              </ul>
            </div>
          </section>
        </div>
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
  name: 'PrivacyPolicyPage',
  emits: ['navigate']
}
</script>
