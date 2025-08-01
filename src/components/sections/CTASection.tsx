import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpCircle } from 'react-feather';
import {CTASectionProps} from '@/types';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Execute Your Vision?',
  subtitle = "Stop planning. Start building. Let's turn your ideas into powerful tools that drive growth.",
  buttonText = 'Get Your Free Execution Roadmap',
}) => (
  <section className="relative px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-r from-primary via-secondary to-accent">
    <div className="max-w-4xl mx-auto text-center text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heading level={2} className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
          <span className="font-heading text-primary-foreground">{title}</span>
        </Heading>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button
            href="/contact"
            variant="primary"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-primary-foreground/20 transition-all duration-300"
          >
            <ArrowUpCircle className="w-6 h-6" />
            {buttonText}
            <ArrowRight className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTASection; 