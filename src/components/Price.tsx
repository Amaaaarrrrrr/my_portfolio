import React from 'react';
import Contact from './Contact';
import { motion } from 'framer-motion';
const pricingData = [
  {
    category: 'Frontend Only (Static or Single-Page)',
    plans: [
      {
        name: 'Basic',
        price: 'Ksh 5,000 – 10,000',
        features: [
          'HTML, CSS, JS only',
          'Up to 3 pages',
          'Simple layout and structure',
          'Mobile-friendly layout',
        ],
      },
      {
        name: 'Intermediate',
        price: 'Ksh 11,000 – 20,000',
        features: [
          'Fully responsive design',
          'Animations and transitions',
          'Up to 5 pages',
          'Polished UI with component reusability',
        ],
      },
      {
        name: 'Advanced',
        price: 'Ksh 21,000 – 35,000',
        features: [
          'Built with React or Vue',
          'Highly optimized UI/UX',
          'Reusability and scalability',
          'Integrated contact/email forms',
        ],
      },
    ],
  },
  {
    category: 'Full-Stack Websites',
    plans: [
      {
        name: 'Basic Full-Stack',
        price: 'Ksh 25,000 – 45,000',
        features: [
          'Frontend + backend (Node/Flask/PHP)',
          'Contact form or basic data capture',
          'Database integration',
          'Authentication (optional)',
        ],
      },
      {
        name: 'E-commerce',
        price: 'Ksh 50,000 – 90,000',
        features: [
          'Product listings + search/filter',
          'Cart & Checkout functionality',
          'Admin dashboard for orders',
          'Payment integration (M-Pesa/Stripe)',
        ],
      },
      {
        name: 'Custom Web App',
        price: 'Ksh 80,000 – 150,000+',
        features: [
          'Tailored dashboards or platforms',
          'Authentication, roles & permissions',
          'Complex backend logic & APIs',
          'Custom features (booking, reporting, etc.)',
        ],
      },
    ],
  },
];

const otherFactors = [
  '📄 Number of pages required',
  '🔐 Features like authentication, payments, admin panel',
  '⏱️ Deadline — express = higher cost',
  '🌐 Hosting/domain setup (optional)',
  '🛠 Maintenance or post-launch support',
];

const Price: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Pricing & Packages
        </h2>
         <motion.div
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full items-center mx-auto mb-8"
            animate={{ scaleX: [0.5, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          />  
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Transparent pricing tailored to your needs. Below are typical package ranges — final quotes may vary based on features, urgency, and complexity.
        </p>

        {pricingData.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-6 border-l-4 border-blue-500 pl-4">
              {section.category}
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.plans.map((plan, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                  <span className="inline-block text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full mb-4">
                    {plan.price}
                  </span>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 pl-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <span className="mr-2 text-blue-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Other Pricing Factors */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Other Factors Affecting Pricing
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            These considerations help determine the exact cost and timeline for your project.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 text-base space-y-2 max-w-lg mx-auto text-left">
            {otherFactors.map((factor, i) => (
              <li key={i}>• {factor}</li>
            ))}
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24 text-center">
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to Get Started?</h3>
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
