'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import CourseCTABanner from '@/components/CourseCTABanner';
import { getRelatedCourses } from '@/data/courses';
import { PHONE_TEL, whatsappUrlForCourse } from '@/lib/contact';
import { testimonials } from '@/data/testimonials';

export default function CourseDetail({ course }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [openModule, setOpenModule] = useState(0);

  const related = getRelatedCourses(course.relatedCourses || []);
  const courseTestimonials = testimonials.filter(
    (t) => t.courseSlug === course.slug || course.relatedCourses?.includes(t.courseSlug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
      <Navbar />

      <main className="pt-24 pb-20">
        <section className="relative h-[400px] mb-16 overflow-hidden">
          <img src={course.image} alt={course.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <span className="text-6xl mb-6 block drop-shadow-lg">{course.icon}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight mb-4 drop-shadow-md">
                {course.title}
              </h1>
              <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">{course.subTitle}</p>
              <div className="inline-block px-4 py-2 bg-secondary text-white rounded-full font-bold text-sm uppercase tracking-wider mb-6">
                Perfect for: {course.perfectFor}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#contact" className="px-8 py-3 bg-secondary text-white font-bold rounded-full hover:opacity-90">
                  Book Free Demo
                </a>
                <a
                  href={whatsappUrlForCourse(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:opacity-90"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Average Salary</span>
                    <div className="text-3xl font-black text-secondary">{course.averageSalary}</div>
                  </div>
                  <div className="h-12 w-[1px] bg-gray-200 dark:bg-gray-700 hidden md:block" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</span>
                    <div className="text-xl font-bold text-primary dark:text-white">{course.duration}</div>
                  </div>
                  <div className="h-12 w-[1px] bg-gray-200 dark:bg-gray-700 hidden md:block" />
                  <div className="space-y-1 text-left md:text-right">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Career Pathway</span>
                    <div className="text-lg font-bold text-primary dark:text-white">{course.careerPath}</div>
                  </div>
                </div>

                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-6 border-l-8 border-secondary pl-4">
                  Why this Course?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium whitespace-pre-line">
                  {course.description}
                </p>
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 whitespace-pre-line">
                  {course.detailedContent.split('\n\n').map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </div>

                {course.extendedSections?.map((section, i) => (
                  <div key={i} className="mt-8">
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{section.heading}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </section>

              <CourseCTABanner
                courseTitle={course.title}
                placementHref={course.slug === 'cyber-security-course-coimbatore' ? '/cyber-security-placement-program' : '/placements'}
              />

              {course.tools && (
                <section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                    Tools & <span className="text-secondary">Technologies</span>
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {course.tools.map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-xl border border-secondary/20 text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              <section className="bg-gradient-to-br from-primary to-primary-dark p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-[100px]" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Build <span className="text-secondary">{course.projects.length} Real-World Projects</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {course.projects.map((project, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                        <div className="text-2xl mb-4">🚀</div>
                        <h3 className="font-bold text-lg mb-2">{project}</h3>
                        <p className="text-xs text-white/70">A production-ready project for your professional portfolio.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {course.syllabus && (
                <section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                    Course <span className="text-secondary">Syllabus</span>
                  </h2>
                  <div className="space-y-4">
                    {course.syllabus.map((mod, idx) => (
                      <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenModule(openModule === idx ? -1 : idx)}
                          className="w-full flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-900 text-left font-bold text-primary dark:text-white hover:bg-secondary/5 transition-colors"
                        >
                          <span>{mod.module}</span>
                          <span className="text-secondary text-xl">{openModule === idx ? '−' : '+'}</span>
                        </button>
                        {openModule === idx && (
                          <ul className="p-5 space-y-2">
                            {mod.topics.map((topic, ti) => (
                              <li key={ti} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <span className="text-secondary">✓</span> {topic}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                  Key <span className="text-secondary">Topics</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">✓</div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-secondary/10 to-primary/5 p-8 rounded-3xl border border-secondary/20">
                <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-6">
                  🎯 100% Placement Support
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Resume & ATS Optimization', 'LinkedIn Branding', 'Technical Mock Interviews', '100+ Hiring Partners'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-secondary font-bold">✓</span> {item}
                    </div>
                  ))}
                </div>
                <Link href="/placements" className="inline-block mt-6 text-secondary font-bold hover:underline">
                  Learn more about our placement support →
                </Link>
              </section>

              {courseTestimonials.length > 0 && (
                <section>
                  <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                    Student <span className="text-secondary">Testimonials</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courseTestimonials.map((story, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400 italic mb-4">&ldquo;{story.quote}&rdquo;</p>
                        <div className="font-bold text-primary dark:text-white">{story.name}</div>
                        <div className="text-sm text-secondary">{story.role}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {course.faqs && (
                <section>
                  <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                    Frequently Asked <span className="text-secondary">Questions</span>
                  </h2>
                  <div className="space-y-4">
                    {course.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 bg-white dark:bg-gray-800 text-left font-bold text-primary dark:text-white"
                        >
                          {faq.question}
                          <span className="text-secondary ml-4">{openFaq === idx ? '−' : '+'}</span>
                        </button>
                        {openFaq === idx && (
                          <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {course.localAreaLinks?.length > 0 && (
                <section>
                  <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4">
                    Training near you in <span className="text-secondary">Coimbatore</span>
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {course.localAreaLinks.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/${loc.slug}`}
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-secondary transition"
                      >
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                  {course.slug === 'cyber-security-course-coimbatore' && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Outcome-focused track:{' '}
                      <Link href="/cyber-security-placement-program" className="text-secondary font-semibold hover:underline">
                        Cyber Security placement program →
                      </Link>
                    </p>
                  )}
                </section>
              )}

              {course.relatedBlogs?.length > 0 && (
                <section>
                  <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-6">
                    Cyber Security <span className="text-secondary">guides</span>
                  </h2>
                  <ul className="space-y-3">
                    {course.relatedBlogs.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="text-secondary font-semibold hover:underline">
                          {post.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {related.length > 0 && (
                <section>
                  <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                    Related <span className="text-secondary">Courses</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {related.map((rc) => (
                      <Link key={rc.slug} href={`/${rc.slug}`} className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-secondary transition-all">
                        <span className="text-3xl mb-3 block">{rc.icon}</span>
                        <h3 className="font-bold text-primary dark:text-white mb-2">{rc.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{rc.description}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="bg-secondary/10 p-8 rounded-3xl border-2 border-dashed border-secondary/30">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Your Career Goal
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium italic">{course.outcome}</p>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-2xl sticky top-28">
                <h3 className="text-2xl font-bold mb-6">Start Your Journey Today</h3>
                <ul className="space-y-4 mb-8">
                  {['Industry Mentor Led Programs', 'Hands-on Live Projects', '100% Placement Support', 'Flexible Batch Timings'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full text-center py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all shadow-lg">
                  Book a Free Demo
                </a>
                <a
                  href={whatsappUrlForCourse(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 mt-3 bg-[#25D366] text-white font-bold rounded-2xl transition-all"
                >
                  WhatsApp Now
                </a>
                <a href={PHONE_TEL} className="block w-full text-center py-3 mt-2 border border-white/30 text-white font-semibold rounded-2xl">
                  Call Admissions
                </a>
                <p className="text-center text-xs text-white/50 mt-4">Limited seats available for the next batch.</p>
              </div>
            </aside>
          </div>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
