import { BEGINNING, END, entries } from './text';
import type { Entry } from './text';

const FILE_NAME = Bun.argv[2] || 'index';
const file = Bun.file(FILE_NAME + '.tex');
const writer = file.writer();
writer.write(BEGINNING);

const makeEntry = (entry: Entry): string => {
  if (!entry.include) {
    return '';
  }
  return ` 
  \\resumeSubheading{${entry.title}}{${entry.location}}{${entry.organization}}{${entry.time}}
  \\resumeItemListStart
  ${entry.items.map(item => `\\resumeItem{${item}}`).join('\n')}
  \\resumeItemListEnd
  `
}

if (entries.professional.some(entry => entry.include)) {
  writer.write(`
%-----------EXPERIENCE-----------------
\\section{Professional Experience}
\\resumeSubHeadingListStart

`)
  writer.write(
    entries.professional.map(makeEntry).join('\n')
  );
  writer.write(`\\resumeSubHeadingListEnd\n\n`)
}

if (entries.projects.some(entry => entry.include)) {
  writer.write(`
%-----------PROJECTS-----------------
\\section{Projects}
\\resumeSubHeadingListStart

`)
  writer.write(
    entries.projects.map(makeEntry).join('\n')
  );
  writer.write(`\\resumeSubHeadingListEnd\n\n`)
}

if (entries.leadership.some(entry => entry.include)) {
  writer.write(`
%-----------LEADERSHIP-----------------
\\section{Leadership}
\\resumeSubHeadingListStart

`)
  writer.write(
    entries.leadership.map(makeEntry).join('\n')
  );
  writer.write(`\\resumeSubHeadingListEnd\n\n`)
}

if (entries.honors.some(entry => entry.include)) {
  writer.write(`
%-----------HONORS-----------------
\\section{Honors}
\\resumeSubHeadingListStart

`)
  writer.write(
    entries.honors.map(makeEntry).join('\n')
  );
  writer.write(`\\resumeSubHeadingListEnd\n\n`)
}


writer.write(END);

writer.end();

console.log(`Generated ${FILE_NAME}.tex`);
