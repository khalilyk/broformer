import type { ReactNode } from "react";

export default function AdminPageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl uppercase leading-[0.95] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-xl text-sm text-ink/60">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
