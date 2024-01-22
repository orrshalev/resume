const BEGINNING =
  `
%-------------------------Master of Science in Computer Science, Non-Thesis May. 2024
% Resume in Latex
% Author : Sourabh Bajaj
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-0.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-5pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{#1}
}

% Just in case someone needs a heading that does not need to be in a list
\\newcommand{\\resumeHeading}[4]{
    \\begin{tabular*}{0.99\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}


\\newcommand{\\resumeSubSubheading}[2]{
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-1pt}}

\\renewcommand{\\labelitemii}{$\\circ$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-10pt}}

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING-----------------
\\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
	\\textbf{\\href{https://orrshalev.dev/}{\\Large Orr Shalev}} & Email : \\href{mailto:shalev.orr@gmail.com}{shalev.orr@gmail.com} \\\\
	\\href{https://orrshalev.dev/}{https://orrshalev.dev/} & GitHub : \\href{https://github.com/orrshalev}{https://github.com/orrshalev} \\\\
\\end{tabular*}


%-----------EDUCATION-----------------
\\section{Education}
\\resumeSubHeadingListStart
\\vspace{-1pt}\\item
\\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
  \\textbf{University of Georgia} & Athens, GA \\\\
  \\textit{\\small Master of Science in Computer Science, Non-Thesis}; \\small 4.0 GPA & \\textit{\\small May 2024} \\\\
  \\textit{\\small Bachelor of Science in Computer Science}; \\small 3.95 GPA & \\textit{\\small May 2023} \\\\
  \\textbf{Honors}: \\textit{\\small summa cum laude, Phi Beta Kappa, Zell Miller Scholarship (full tuition),} & \\textit{} \\\\
  \\textit{\\small Scarbrough Family Scholarship, Hollingsworth Award} & \\textit{} \\\\
  \\textbf{Relevent Coursework}: \\textit{\\small Compilers-based Masters Project, Computer Architecture,} & \\textit{} \\\\
  \\textit{\\small Software Engineering, Operating Systems, Computer Networks} & \\textit{} \\\\
\\end{tabular*}\\vspace{-7pt}
\\resumeSubHeadingListEnd

`

const END =
  `
%--------PROGRAMMING SKILLS------------
\\resumeSubHeadingListStart
\\section{Skills}
\\resumeSubItem{\\textbf{Technologies}}
{: (proficient) Python, SQL, Typescript, Javascript, git, Docker, unix, C, (familiar) C++, Java, C\\#}
\\resumeSubHeadingListEnd

\\end{document}
`

type Entry = {
  title: string;
  organization: string;
  location: string;
  time: string;
  items: string[];
  include: boolean;
}

const jp = {
  title: 'AI \\& Data Science Summer Analyst',
  organization: 'JPMorgan Chase \\& Co.',
  location: 'Plano, TX',
  time: 'June 2022 -- August 2022 \\& June 2023 -- August 2023',
  items: [
    `Developed classification model for detection of long-running sql queries within internal database services`,
    `Improved long-running query identification by 54\\% over existing systems`,
    `Built and analyzed unsupervised learning models and cluster profiling to identify branch segments`,
    `Reported results to senior leadership, directly impacting business decision making for the One Chase initiative`,
    `Utilized Python machine learning libraries including pyspark, pandas, matplotlib, scikit-learn, mlflow`,
  ],
  include: true,

} satisfies Entry;

const lazification = {
  title: "Lazification in Graal Compiler",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "August 2023 -- Present",
  items: [
    "Applying static conversion of eager code to lazy code in Java compiler",
    "Implementing dynamic backward slicing algorithm, currently not in Graal codebase",
    "Utilizing graph theory and dependency analysis to optimize code for lazy evaluation"
  ],
  include: true,
} satisfies Entry;


const vr = {
  title: "VR Vocalization Experience with Biometric Data Collection",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "August 2022 -- December 2022",
  items: [
    "Developed VR application for HP Reverb G2 Omnicept headset using Unity Engine and C\\#",
    "Collected biometric data (eye tracking, heartbeat) and created specialized data analysis tools",
    "Tools include mapping of 3D eye tracking data to 2D sheet music and heartbeat analysis"
  ],
  include: false,
} satisfies Entry;

const vision = {
  title: "Computer Vison Applications with NeRF",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "September 2022 -- October 2022",
  items: [
    "Applied NeRF (neural radiance fields) to create 3D representations of peanut plants",
    "Trained, optimized, and analyzed models using TensorFlow in supercomputing GPU cluster"
  ],
  include: true,
} satisfies Entry;

const toolbox = {
  title: "Math Toolbox",
  organization: "\\href{https://www.mathtoolbox.org}{https://www.mathtoolbox.org}",
  location: "Athens, GA",
  time: "October 2021 -- Present",
  items: [
    "Created \\& maintained education-oriented website using Next.js, React.js, Tailwind CSS",
    "Self-managed project based on mathematical tools used in own undergraduate studies"
  ],
  include: true,
} satisfies Entry;

const dataComp = {
  title: "Data Science Competition 2021, 2nd Place",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "April 2021",
  items: [
    "Team-lead of group of 4 individuals from distinct fields",
    "Built machine learning models for credit card application approval in Python using pandas and scikit-learn",
    "Communicated results to panel of judges from industry and academia"

  ],
  include: true,
} satisfies Entry;

const trading = {
  title: "Quantitative Trading Algorithm",
  organization: "Personal Project",
  location: "Athens, GA",
  time: "February 2021",
  items: [
    "Designed variation of pair trading algorithm for automatically buying and selling financial securities",
    "Implemented algorithm with Python script using Robinhood and Alpaca APIs and used with own investments"
  ],
  include: true,
} satisfies Entry;

const fintech = {
  title: "Director of Events",
  organization: "Terry Fintech Society",
  location: "Athens, GA",
  time: "May 2022 -- May 2023",
  items: [
    "Key contributor to corporate outreach, booking approximately 20 recruiters and speakers for weekly meetings",
    "Gained key public speaking abilities through recruiting and organizing events for over 200 new members"
  ],
  include: true,
} satisfies Entry;

const tep = {
  title: "Scholarship Committee \\& Food Steward ",
  organization: "Tau Epsilon Phi Fraternity",
  location: "Athens, GA",
  time: "August 2020 -- May 2023",
  items: [
    "Helps members achieve academic success; fraternity top average GPA in university for Spring 2023",
    "Worked with catering company to deliver catering services to 70 members of fraternity"
  ],
  include: false,
} satisfies Entry;

const scarbrough = {
  title: "Scarborough Family Scholarship",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "April 2022",
  items: [
    "Won as part of the School of Computings Research Support Fund",
    "Award given to support undergraduate research within the University of Georgia"
  ],
  include: false,
} satisfies Entry;

const hollingsworth = {
  title: "Scarbrough Family Scholarship",
  organization: "University of Georgia",
  location: "Athens, GA",
  time: "December 2022",
  items: [
    "Granted for excellence in undergraduate mathematics studies",
    "Top students in selected mathematics courses are chosen to receive the award."
  ],
  include: false,
} satisfies Entry;

const entries = {
  professional: [jp],
  projects: [lazification, vr, vision, toolbox, dataComp, trading],
  leadership: [fintech, tep],
  honors: [scarbrough, hollingsworth],

}

export { BEGINNING, END, entries }
export type { Entry }
