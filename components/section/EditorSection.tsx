'use client';
import Image from 'next/image';

interface Editor {
  imageUrl: string;
  name: string;
  description: string;
  keywords: string[];
}

interface EditorProps {
  editor: Editor;
}

export default function EditorSection({ editor }: EditorProps) {
  return (
    <section className="bg-navy-0 space-y-2 rounded-lg p-4">
      <div className="flex gap-4">
        <div className="relative h-[56px] w-[56px] shrink-0">
          <Image
            src={editor.imageUrl}
            alt={editor.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span className="text-text-1 typo-h3 flex items-center">{editor.name}</span>
          <p className="text-navy-300 typo-body-5-r">{editor.keywords.join(' ')}</p>
          <p className="typo-body-4-r mt-2 text-black">{editor.description}</p>
        </div>
      </div>
    </section>
  );
}
