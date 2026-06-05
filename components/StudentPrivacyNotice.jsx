export const STUDENT_PRIVACY_NOTICE =
  'Student names are shown as "OneInfo Academy Student" to protect their privacy. Placement details, companies, and messages are real and verified.';

export default function StudentPrivacyNotice({ className = '' }) {
  return (
    <p
      className={`text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-center leading-relaxed ${className}`}
      role="note"
    >
      <span className="inline-flex items-center gap-1.5 justify-center">
        <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>
          <strong className="text-gray-600 dark:text-gray-300">Privacy:</strong> {STUDENT_PRIVACY_NOTICE}
        </span>
      </span>
    </p>
  );
}
