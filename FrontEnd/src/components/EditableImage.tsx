
import React, { useState } from 'react';
import { useAdmin } from '@/hooks/useAdmin';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Edit2, Check, X } from 'lucide-react';

interface EditableImageProps {
  src: string;
  alt: string;
  onSave: (newSrc: string) => void;
  className?: string;
}

const EditableImage = ({ src, alt, onSave, className }: EditableImageProps) => {
  const { isAdmin } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(src);

  if (!isAdmin) {
    return <img src={src} alt={alt} className={className} />;
  }

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(src);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        <img src={editValue} alt={alt} className={className} />
        <div className="flex items-center gap-2 bg-warm-yellow/20 p-2 rounded border border-warm-yellow/50">
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="URL da nova imagem"
            className="flex-1"
            autoFocus
          />
          <Button size="sm" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
            <Check className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <img src={src} alt={alt} className={className} />
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-warm-yellow text-dark-green p-2 rounded-full shadow-md transition-opacity"
      >
        <Edit2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default EditableImage;
