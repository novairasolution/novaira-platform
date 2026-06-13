'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({
  children,
  className,
  loadingText = "Submitting...",
}: {
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} relative disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      <span className={pending ? "opacity-0" : "opacity-100 transition-opacity"}>
        {children}
      </span>
      {pending && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
          <i className="fas fa-spinner fa-spin mr-2"></i> {loadingText}
        </span>
      )}
    </button>
  );
}
