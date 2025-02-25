import React from 'react';
import { ProjectCard } from './ProjectCard';

const Project = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
      <ProjectCard
        projectName="Hotel Reservation System"
        projectDescription="A hotel reservation system that allows users to book rooms, view available rooms, and manage their reservations."
      />
      <ProjectCard
        projectName="Colegio de Montalban Enhanced Admission Management System"
        projectDescription="An admission management system that allows users to manage admissions, view admission records, and generate reports."
      />
      <ProjectCard
        projectName="HAMMS"
        projectDescription="A medicare website with the clinic information and services."
      />
    </div>
  );
};

export default Project;
