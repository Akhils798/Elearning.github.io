import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  ArrowRight, 
  Star,
  BookOpen,
  TrendingUp,
  Globe
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { mockCourses, mockCategories } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user, isAuthenticated } = useAuth();
  const featuredCourses = mockCourses.slice(0, 6);
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Students' },
    { icon: BookOpen, value: '200+', label: 'Courses Available' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Globe, value: '150+', label: 'Countries' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-sky-400/40" />
        <div className="absolute inset-0 bg-black/5" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-300/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-sky-300/20 rounded-full blur-xl animate-pulse"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-32 text-4xl animate-bounce opacity-30">📚</div>
        <div className="absolute top-60 left-20 text-3xl animate-pulse opacity-30">💻</div>
        <div className="absolute bottom-40 right-40 text-3xl animate-bounce opacity-30">🎯</div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isAuthenticated && user ? (
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-2">
                    Welcome back, <span className="text-yellow-300 font-bold">{user.name}</span>! 👋
                  </h2>
                  <p className="text-lg text-cyan-100">
                    Ready to continue your learning journey?
                  </p>
                </div>
              ) : null}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Future-Ready
                <span className="text-gradient bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent"> Learning</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                🚀 Transform your career with cutting-edge skills that matter today. 
                Join the revolution of learners who are building tomorrow's world, one course at a time.
              </p>
              <div className="bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-sky-500/30 backdrop-blur-sm border border-blue-400/40 rounded-xl p-4 mb-8 shadow-lg">
                <p className="text-blue-100 text-lg font-semibold flex items-center space-x-2">
                  <span className="text-2xl">🎉</span>
                  <span>All courses are completely FREE!</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="text-lg px-8 py-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>🚀 Start Learning FREE</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="text-lg px-8 py-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/30 text-white border-2 border-blue-400/40 rounded-xl backdrop-blur-sm font-semibold transition-all duration-300 hover:border-blue-400/60"
                >
                  <span>✨ Login</span>
                </Link>
              </div>
              
              {/* Additional Call-to-Action */}
              <div className="mt-6 text-center">
                <p className="text-blue-200 text-sm mb-3">Join over 50,000+ successful learners!</p>
                <div className="flex items-center justify-center space-x-4 text-blue-200">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span className="text-sm">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm">50K+ Students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm">200+ Courses</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                  alt="Modern online learning"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">💡</span>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-lg">⭐</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-white to-blue-50 rounded-xl p-4 shadow-xl border border-blue-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Learning Progress</p>
                      <p className="text-lg font-bold text-blue-800">87% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
                  index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                  index === 1 ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                  index === 2 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                  'bg-gradient-to-r from-emerald-400 to-emerald-500'
                }`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of topics and start your learning journey today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`group cursor-pointer rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200' :
                  index % 3 === 1 ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' :
                  'bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200'
                }`}
              >
                <div className="text-center">
                  <div className={`text-4xl mb-4 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center ${
                    index % 3 === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                    index % 3 === 1 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                    'bg-gradient-to-r from-cyan-400 to-cyan-500'
                  }`}>
                    <span className="text-white text-2xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 group-hover:scale-105 transition-transform duration-200 ${
                    index % 3 === 0 ? 'text-blue-800' :
                    index % 3 === 1 ? 'text-green-800' :
                    'text-cyan-800'
                  }`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className={`flex items-center justify-center space-x-2 text-sm ${
                    index % 3 === 0 ? 'text-blue-600' :
                    index % 3 === 1 ? 'text-green-600' :
                    'text-cyan-600'
                  }`}>
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{category.courseCount} courses</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses and start learning from industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/courses"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Abhishek Maurya",
                role: "Web Developer",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                text: "This platform transformed my entire career! From zero coding knowledge to landing a senior developer role at a top tech company in just 8 months. The hands-on projects, real-world case studies, and mentorship program are absolutely phenomenal. The instructors don't just teach - they inspire!",
                rating: 5
              },
              {
                name: "Anurag",
                role: "Data Scientist",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
                text: "Mind-blowing experience! The data science curriculum is so comprehensive and practical. I built 15+ real-world projects that became the foundation of my portfolio. The community support and career guidance helped me secure a 300% salary increase. This isn't just learning - it's career transformation!",
                rating: 5
              },
              {
                name: "Sachinn Chauuuuhan",
                role: "Creative Director",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                text: "Absolutely revolutionary! The design courses taught me everything from Figma mastery to user psychology. The portfolio reviews and industry connections opened doors I never knew existed. Now I'm leading design teams at Fortune 500 companies. The quality of education here rivals top design schools!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 