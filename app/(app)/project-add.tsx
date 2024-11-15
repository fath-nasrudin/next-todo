'use client';

import { Icons } from '@/components/icons';
import { useState } from 'react';
import { ProjectForm } from './project-form';

export const ProjectAdd = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        <Icons.add />
      </button>

      {showForm && <ProjectForm closeForm={() => setShowForm(false)} />}
    </>
  );
};
