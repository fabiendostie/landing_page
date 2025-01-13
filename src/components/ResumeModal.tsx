import ReactMarkdown from 'react-markdown';
import { X, FileDown } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export function ResumeModal({ isOpen, onClose, content }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative transform overflow-hidden rounded-lg bg-slate-900 text-left shadow-xl transition-all sm:my-8 w-full max-w-5xl max-h-[90vh] flex flex-col">
          <div className="bg-slate-900 px-8 pb-6 pt-5 sm:p-8 flex-1 overflow-hidden flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
              <div className="flex gap-4">
                <a
                  href="/assets/resumes/FDostie_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  English PDF
                </a>
                <a
                  href="/assets/resumes/CV_FDostie.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  French PDF
                </a>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="prose prose-invert prose-cyan max-w-none prose-headings:text-cyan-400 prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-8 prose-p:text-gray-300 prose-li:text-gray-300 overflow-y-auto flex-1 pr-6 prose-ul:mt-2 prose-ul:mb-6 prose-li:my-0.5 prose-p:my-2">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}