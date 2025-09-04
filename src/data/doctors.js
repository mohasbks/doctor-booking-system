export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    location: "Downtown Medical Center",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    experience: "15 years",
    rating: 4.9,
    about: "Specialist in heart diseases and cardiovascular surgery with extensive experience in treating complex cardiac conditions.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    workingHours: {
      weekdays: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      weekends: ["09:00", "10:30", "12:00", "13:30", "15:00"]
    }
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dentistry",
    location: "Smile Dental Clinic",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
    experience: "12 years",
    rating: 4.8,
    about: "Expert in cosmetic dentistry and oral surgery, committed to providing pain-free dental care.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    workingHours: {
      weekdays: ["08:00", "09:30", "11:00", "14:30", "16:00"],
      weekends: ["08:30", "10:00", "13:00", "15:30"]
    }
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    location: "Skin Care Institute",
    image: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/mqamyxyt9hgnkc9dxrq2/emily-rodriguez-do-new-york-ny.jpg",
    experience: "10 years",
    rating: 4.7,
    about: "Specializes in treating skin conditions, acne treatment, and cosmetic dermatology procedures.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    workingHours: {
      weekdays: ["10:00", "11:30", "13:00", "15:00", "16:30"],
      weekends: ["09:00", "10:30", "14:30"]
    }
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    location: "Bone & Joint Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    experience: "18 years",
    rating: 4.9,
    about: "Expert in bone and joint surgeries, sports medicine, and rehabilitation therapy.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    workingHours: {
      weekdays: ["08:30", "10:00", "13:30", "15:30", "17:30"],
      weekends: ["09:30", "11:30", "14:00"]
    }
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Pediatrics",
    location: "Children's Health Center",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face&auto=format",
    experience: "14 years",
    rating: 4.8,
    about: "Dedicated to providing comprehensive healthcare for children from infancy through adolescence.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    workingHours: {
      weekdays: ["09:00", "10:30", "14:30", "16:30"],
      weekends: ["08:30", "11:00", "13:00"]
    }
  },
  {
    id: 6,
    name: "Dr. Robert Martinez",
    specialty: "Neurology",
    location: "Brain & Spine Clinic",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
    experience: "20 years",
    rating: 4.9,
    about: "Leading neurologist specializing in brain disorders, stroke treatment, and neurological rehabilitation.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    workingHours: {
      weekdays: ["10:00", "13:00", "15:00", "17:00"],
      weekends: ["09:00", "11:30", "14:30"]
    }
  },
  {
    id: 7,
    name: "Dr. Amanda Foster",
    specialty: "Psychiatry",
    location: "Mental Health Center",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
    experience: "16 years",
    rating: 4.8,
    about: "Experienced psychiatrist specializing in anxiety, depression, and behavioral therapy.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    workingHours: {
      weekdays: ["09:00", "11:00", "14:00", "16:00"],
      weekends: ["10:00", "12:00"]
    }
  },
  {
    id: 8,
    name: "Dr. David Lee",
    specialty: "Ophthalmology",
    location: "Eye Care Institute",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face",
    experience: "13 years",
    rating: 4.7,
    about: "Expert in eye surgery, vision correction, and treatment of eye diseases.",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    workingHours: {
      weekdays: ["08:00", "10:00", "13:00", "15:00", "17:00"],
      weekends: ["09:00", "11:00", "14:00"]
    }
  }
]

export const specialties = [
  "All Specialties",
  "Cardiology",
  "Dentistry", 
  "Dermatology",
  "Orthopedics",
  "Pediatrics",
  "Neurology",
  "Psychiatry",
  "Ophthalmology"
]

export const specialtyCards = [
  {
    name: "Cardiology",
    icon: "❤️",
    description: "Heart and cardiovascular care"
  },
  {
    name: "Dentistry",
    icon: "🦷",
    description: "Dental and oral health"
  },
  {
    name: "Dermatology",
    icon: "✨",
    description: "Skin and beauty care"
  },
  {
    name: "Orthopedics",
    icon: "🦴",
    description: "Bone and joint care"
  },
  {
    name: "Pediatrics",
    icon: "👶",
    description: "Children's healthcare"
  },
  {
    name: "Neurology",
    icon: "🧠",
    description: "Brain and nervous system"
  },
  {
    name: "Psychiatry",
    icon: "🧘",
    description: "Mental health and wellness"
  },
  {
    name: "Ophthalmology",
    icon: "👁️",
    description: "Eye care and vision"
  }
]
