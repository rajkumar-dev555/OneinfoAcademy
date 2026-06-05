'use client';

import Link from 'next/link';

const typeConfig = {
  placement: { label: '✅ Placed', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  shortlisted: { label: '🎯 Shortlisted', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  review: { label: '⭐ Google Review', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
};

export default function TestimonialCard({ story, showProof = false }) {
  const badge = typeConfig[story.type] || typeConfig.review;

  return (
    <article className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full flex-shrink-0" />
          <div>
            <h3 className="font-bold text-primary dark:text-white">{story.name}</h3>
            <p className="text-sm text-secondary font-semibold">{story.role}</p>
            {story.company && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {story.company}{story.location ? ` · ${story.location}` : ''}
                {story.package ? ` · ${story.package}` : ''}
              </p>
            )}
          </div>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      {story.type === 'review' && (
        <div className="flex gap-0.5 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="text-[#fbbc04]">★</span>
          ))}
        </div>
      )}

      <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed flex-grow mb-4">
        &ldquo;{story.quote}&rdquo;
      </p>

      {showProof && story.proofImage && (
        <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <img
            src={story.proofImage}
            alt={`Placement proof — OneInfo Academy Student`}
            className="w-full h-auto max-h-48 object-cover object-top"
            loading="lazy"
          />
          <p className="text-[10px] text-gray-400 px-3 py-2 bg-gray-50 dark:bg-gray-900">
            Verified WhatsApp placement update · {story.date}
          </p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          {story.technology || story.role}
        </span>
        {story.courseSlug && (
          <Link href={`/${story.courseSlug}`} className="text-secondary font-bold text-sm hover:underline">
            View course →
          </Link>
        )}
      </div>
    </article>
  );
}
