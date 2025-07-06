import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_x4fxlzc',
        'template_bz6c6bc',
        formRef.current,
        'APpS7siy6wAyRq95v'
      )
      .then(() => {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(err => {
        alert('Failed to send message. Please try again.');
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16 space-y-4"> 
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact Me</h2>
          <motion.div
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
            animate={{ scaleX: [0.5, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          />  
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
            Whether you have a question, need a quote, or just want to say hi, I'm here to help. 
            You can also reach me directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                <a href="mailto:mutanu801@gmail.com" className="text-blue-500 hover:underline">mutanu801@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                <a
                  href="https://wa.me/254735083446?text=Hi!%20I'm%20interested%20in%20a%20website%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  +254-735-083-446
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {submitSuccess ? (
              <div className="text-center bg-green-100 dark:bg-green-800/20 p-6 rounded-lg text-green-700 dark:text-green-300 shadow">
                <h3 className="text-lg font-semibold mb-1">Message Sent!</h3>
                <p>Thanks for reaching out. I’ll reply shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {field}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
