import React from "react";
import Link from "next/link";

function LibraryCard({ url, name, id, description }) {
  return (
    <>
      <Link
        title="Tailwind CSS Components Components - Announcements"
        className="group relative block h-36 bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-black"
        href={url}
        key={id}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="rounded-lg h-36 border-2 border-black bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4">
            <p className="mt-2 text-xl font-bold">{name}</p>

            <p className="mt-3 text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LibraryCard;
