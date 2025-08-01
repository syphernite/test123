import React from 'react';
import { Clock, Smartphone, Headphones, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most projects completed within 7-14 days. We respect your timeline and deliver on our promises.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-Optimized',
      description: 'Every website is built mobile-first, ensuring perfect performance across all devices and screen sizes.',
    },
    {
      icon: Headphones,
      title: 'Real Support',
      description: 'Direct access to your developer. No chatbots or outsourced support – just genuine, helpful assistance.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with modern security practices and hosted on reliable infrastructure for peace of mind.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-slate-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Built4You?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're not just another web agency. We're your dedicated partner in building a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;