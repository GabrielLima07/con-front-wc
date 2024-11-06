import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function Draggable({ id, isDraggingDisabled, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled: isDraggingDisabled,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, transform: CSS.Translate.toString(transform) }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...(!isDraggingDisabled ? listeners : {})} {...attributes}>
      {children}
    </div>
  );
}
