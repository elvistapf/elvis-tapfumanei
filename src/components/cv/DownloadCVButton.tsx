"use client";

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { CVTemplate } from './CVTemplate';
import { cvData } from '@/lib/cvData';
import { Download } from 'lucide-react';

export function DownloadCVButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(<CVTemplate data={cvData} />).toBlob();
      
      const date = new Date();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const filename = `elvis-tapfumanei-cv-technical-delivery-${year}-${month}.pdf`;
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-medium rounded-lg hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download size={20} />
      {isGenerating ? 'Generating PDF...' : 'Download CV'}
    </button>
  );
}
