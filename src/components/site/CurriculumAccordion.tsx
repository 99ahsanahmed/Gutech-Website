'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import type { CurriculumSemester } from '@/lib/site-data';

type CurriculumAccordionProps = {
  semesters: CurriculumSemester[];
};

export default function CurriculumAccordion({ semesters }: CurriculumAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="curriculum-accordion" aria-label="Semester-wise curriculum">
      {semesters.map((semester, index) => {
        const isOpen = openIndex === index;
        const regionId = `curriculum-panel-${index}`;

        return (
          <article key={semester.title} className={`curriculum-item${isOpen ? ' is-open' : ''}`}>
            <button
              className="curriculum-item__trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={regionId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>
                <strong>{semester.title}</strong>
                {semester.note ? <em>{semester.note}</em> : null}
              </span>
              <ChevronDown className={`curriculum-item__chevron${isOpen ? ' is-open' : ''}`} size={18} />
            </button>

            <div id={regionId} className="curriculum-item__content" role="region">
              <div className="curriculum-table-wrap">
                <table className="curriculum-table">
                  <thead>
                    <tr>
                      <th scope="col">Course</th>
                      <th scope="col">Title</th>
                      <th scope="col">Core</th>
                      <th scope="col">Credit Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.courses.map((course) => (
                      <tr key={`${semester.title}-${course.code}-${course.title}`}>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.core ?? '—'}</td>
                        <td>{course.creditHours}</td>
                      </tr>
                    ))}
                  </tbody>
                  {semester.totalCreditHours ? (
                    <tfoot>
                      <tr>
                        <td colSpan={3}>Total</td>
                        <td>{semester.totalCreditHours}</td>
                      </tr>
                    </tfoot>
                  ) : null}
                </table>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
