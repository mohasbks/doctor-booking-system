# MediCare Elite - Doctor Appointment Booking System

A modern, responsive web application for booking medical appointments with professional doctors. Built with Vue.js 3 and designed for optimal user experience.

## Features

🏥 **Modern Interface** - Clean, professional design with dark mode support
👨‍⚕️ **Doctor Directory** - Browse and search through qualified medical professionals
📅 **Easy Booking** - Simple appointment scheduling system

## Technologies Used

- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS
- JavaScript ES6+
- LocalStorage for data persistence

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Ready for deployment on Vercel with included `vercel.json` configuration.

## Author

Created by mohasbks

## Live Demo

Access the application at: `http://localhost:5173` after running `npm run dev`

## About

MediCare Elite provides a seamless experience for patients to find and book appointments with qualified medical professionals. The platform features an intuitive interface, comprehensive doctor profiles, and flexible scheduling options.
ى
### Patient Features
- **Home Page**: Welcome banner with search functionality
- **Doctor Discovery**: Browse and search doctors by name or specialty
- **Smart Filtering**: Filter doctors by specialty with pagination
- **Easy Booking**: Simple appointment booking with form validation
- **Appointment Management**: View and cancel upcoming appointments
- **Contact System**: Contact form for inquiries and support

### Doctor Features
- **Secure Login**: Doctor authentication with demo credentials
- **Dashboard**: Comprehensive overview of appointments and statistics
- **Patient Management**: View patient details and appointment history
- **Real-time Updates**: Live appointment status tracking

### Technical Features
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **No CDN Dependencies**: All icons and assets are local
- **Data Persistence**: Uses localStorage for appointment and user data
- **Form Validation**: Comprehensive client-side validation
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Custom emoji-based icon system (no external dependencies)
- **Storage**: Browser localStorage

## Installation & Setup

1. **Clone/Download the project**
   ```bash
   cd finalproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
finalproject/
├── src/
│   ├── components/          # Vue components
│   │   ├── HomePage.vue
│   │   ├── DoctorsPage.vue
│   │   ├── BookingPage.vue
│   │   ├── AppointmentsPage.vue
│   │   ├── ContactPage.vue
│   │   ├── DoctorLoginPage.vue
│   │   └── DoctorDashboard.vue
│   ├── data/
│   │   └── doctors.js       # Mock doctor data
│   ├── assets/
│   │   └── icons.css        # Custom icon system
│   ├── App.vue              # Main app component
│   ├── main.js              # App entry point
│   └── style.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Usage Guide

### For Patients
1. **Browse Doctors**: Visit the home page and search for doctors by name or specialty
2. **Book Appointment**: Select a doctor and choose from available time slots
3. **Manage Appointments**: View your bookings and cancel if needed
4. **Contact Support**: Use the contact form for any inquiries

### For Doctors
1. **Login**: Use the demo credentials:
   - Email: `doctor@demo.com`
   - Password: `demo123`
2. **Dashboard**: View your appointments and patient statistics
3. **Patient Management**: Access patient contact information and appointment details

## Available Specialties

- Cardiologist
- Dentist
- Dermatologist
- Orthopedic
- Pediatrician
- Neurologist

## Key Features Details

### Responsive Design
- Mobile-first approach with breakpoints for all screen sizes
- Collapsible navigation menu for mobile devices
- Optimized touch interactions

### Dark Mode
- System-wide dark/light theme toggle
- Persistent theme preferences
- Smooth color transitions

### Data Management
- All appointment data stored in browser localStorage
- Mock doctor data with realistic information
- Form validation with error handling

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- Uses Vue 3 Composition API for better code organization
- Tailwind CSS for rapid UI development
- Custom icon system eliminates external CDN dependencies
- Component-based architecture for maintainability

## Future Enhancements

- Backend API integration
- Real-time notifications
- Payment gateway integration
- Advanced search filters
- Appointment reminders
- Multi-language support

## License

This project is for educational purposes.

## Demo Credentials

**Doctor Login:**
- Email: doctor@demo.com
- Password: demo123

---

Built with ❤️ using Vue.js and Tailwind CSS
