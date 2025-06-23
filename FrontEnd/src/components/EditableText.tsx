
import React, { useState } from 'react';
import { useAdmin } from '@/hooks/useAdmin';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Edit2, Check, X } from 'lucide-react';

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a';
  href?: string;
}

const EditableText = ({ text, onSave, className, tag = 'span', href }: EditableTextProps) => {
  const { isAdmin } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  if (!isAdmin) {
    const Tag = tag;
    return href ? (
      <a href={href} className={className}>{text}</a>
    ) : (
      <Tag className={className}>{text}</Tag>
    );
  }

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 bg-warm-yellow/20 p-2 rounded border border-warm-yellow/50">
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
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
    );
  }

  const Tag = tag;
  return (
    <div className="relative group">
      {href ? (
        <a href={href} className={className}>{text}</a>
      ) : (
        <Tag className={className}>{text}</Tag>
      )}
      <button
        onClick={() => setIsEditing(true)}
        className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 bg-warm-yellow text-dark-green p-1 rounded-full shadow-md transition-opacity"
      >
        <Edit2 className="w-3 h-3" />
      </button>
    </div>
  );
};

export default EditableText;
