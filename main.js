/*
 * main.js - CourseCatalyst JavaScript
 * 
 * This file contains all JavaScript functionality for the CourseCatalyst website including:
 * 
 * FEATURES IMPLEMENTED:
 * - Course data management and dynamic content loading
 * - Course detail page with URL parameter parsing
 * - EmailJS contact form integration with validation
 * - Dark mode toggle with localStorage persistence and prefers-color-scheme support
 * - Mobile navigation with keyboard accessibility
 * - tsParticles ocean bubble animation with performance optimizations
 * - Loading splash screen management
 * - Toast notifications for user feedback
 * - Accessibility features and keyboard navigation
 * - Performance optimizations for mobile and slow networks
 * 
 * EMAILJS SETUP INSTRUCTIONS:
 * 1. Sign up at https://www.emailjs.com/ and confirm your email
 * 2. Add an Email Service (e.g., Gmail) and note the SERVICE_ID
 * 3. Create an Email Template with placeholders: from_name, from_email, message
 * 4. Get your USER_ID from the dashboard
 * 5. Replace the placeholder values below with your actual EmailJS credentials
 * 6. Add your deployed website URL to EmailJS dashboard if required
 * 
 * EMAIL TEMPLATE VARIABLES:
 * Your EmailJS template should include these variables:
 * - {{from_name}} - The sender's name
 * - {{from_email}} - The sender's email
 * - {{message}} - The message content
 * - {{subject}} - The selected subject (optional)
 */

// ========================================
// EMAILJS CONFIGURATION
// ========================================

// Replace these with your actual EmailJS credentials from your dashboard
// Example values shown - replace with your real keys:
const EMAILJS_USER_ID = '1lJSYd6VHpelQSt9z';        // Example: 'user_abc123def456'
const EMAILJS_SERVICE_ID = 'service_o7gglxv';     // Example: 'service_gmail'  
const EMAILJS_TEMPLATE_ID = 'template_t69nolr';   // Example: 'template_contact'

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize EmailJS if we have credentials and it's available
    if (typeof emailjs !== 'undefined' && EMAILJS_USER_ID !== 'YOUR_PUBLIC_KEY_HERE') {
        emailjs.init({
            publicKey: EMAILJS_USER_ID
        });
        console.log('EmailJS initialized with public key:', EMAILJS_USER_ID);
    } else {
        console.error('EmailJS not available or credentials not configured');
        console.log('EmailJS available:', typeof emailjs !== 'undefined');
        console.log('Credentials configured:', EMAILJS_USER_ID !== 'YOUR_PUBLIC_KEY_HERE');
    }
});

// ========================================
// COURSE DATA
// ========================================

const courses = {
    "c-programming": {
        id: "c-programming",
        title: "C Programming – Foundations of Computer Science",
        short: "Learn C programming from basics to advanced concepts, covering syntax, control structures, functions, pointers, and memory management.",
        description: "This course dives into **C programming**, the language that laid the foundation for most modern programming languages. You'll start with basic syntax, data types, and operators, then move on to control flow (if, loops, switch), functions, arrays, strings, pointers, structures, and file handling. Special emphasis will be on memory management, debugging, and writing clean, efficient code. The course is designed for beginners but also offers deeper insights for intermediate learners aiming to strengthen their fundamentals for technical interviews or system-level programming.",
        level: "Beginner to Intermediate",
        type: "Programming Language",
        notes: [
            { title: "C Programming Language – GeeksforGeeks", url: "https://www.geeksforgeeks.org/c/c-programming-language/" }
        ],
        videos: [
            { title: "C Programming in Telugu – Code with Saroop", url: "https://youtu.be/pdPRdhify1Q?si=6JJOs3EqQn2VrdvE" },
            { title: "C Programming in Hindi – Apna College", url: "https://youtu.be/irqbmMNs2Bo?si=WPwoh_7W_7Hr3Ks9" }
        ],
        hindiResources: [
            { title: "C Programming in Hindi – Apna College", url: "https://youtu.be/irqbmMNs2Bo?si=WPwoh_7W_7Hr3Ks9" }
        ],
        interviewQuestions: [
            { title: "C Interview Questions – Set 1", url: "https://drive.google.com/file/d/1EKd7Ms-Ui_vKE7HChGf9GxyFefM9F29_/view?usp=drive_link" },
            { title: "C Interview Questions – Set 2", url: "https://drive.google.com/file/d/1xsS_SmerfZwyx9471ggLxCcRch8py0di/view?usp=sharing" },
            { title: "C Interview Questions – Set 3", url: "https://drive.google.com/file/d/1NkJRsiMLff_-64BGYKjFuZPny-qoYquD/view?usp=sharing" }
        ]
    },
    "css": {
        id: "css",
        title: "CSS – Styling the Modern Web",
        short: "Learn CSS to design and style responsive, beautiful, and interactive web pages.",
        description: "This course covers **CSS**, the language that brings life and design to HTML web pages. You'll learn the fundamentals of selectors, colors, typography, and layout, followed by modern features like Flexbox, Grid, transitions, animations, and media queries for responsive design. With practical examples and real-world projects, you'll be able to style websites from scratch and create user-friendly, mobile-first designs that stand out on any device. Perfect for beginners looking to break into front-end development and intermediates aiming to refine their styling skills.",
        level: "Beginner to Intermediate",
        type: "Web Development / Styling Language",
        notes: [
            { title: "CSS Tutorial – GeeksforGeeks", url: "https://www.geeksforgeeks.org/css/css-tutorial/" }
        ],
        videos: [
            { title: "CSS in Telugu – Code With Swaroop", url: "https://youtu.be/Oi9QvyK8zvk?si=7BuvAViFqQrPCM36" },
            { title: "CSS in Hindi – CodeHelp by Babbar", url: "https://youtu.be/dSJM4Gyh8jE?si=-zg7nZos-qkDNenr" }
        ],
        hindiResources: [
            { title: "CSS in Hindi – CodeHelp by Babbar", url: "https://youtu.be/dSJM4Gyh8jE?si=-zg7nZos-qkDNenr" }
        ],
        interviewQuestions: [
            // CSS interview questions can be added here when available
        ]
    },
    "javascript": {
        id: "javascript",
        title: "JavaScript – Modern Web Development",
        short: "Learn JavaScript fundamentals, ES6+, DOM manipulation, and asynchronous programming for interactive websites.",
        description: "This course covers **JavaScript**, the programming language of the web. Starting from variables, data types, and operators, you'll progress to control flow, functions, arrays, objects, and DOM manipulation. You'll also explore modern ES6+ features like arrow functions, template literals, and modules, along with asynchronous programming using callbacks, promises, and async/await. Perfect for both beginners and those looking to sharpen their front-end development skills, this course equips you to build dynamic and interactive web applications.",
        level: "Beginner to Intermediate",
        type: "Programming Language / Web Development",
        notes: [
            { title: "JavaScript Tutorial – W3Schools", url: "https://www.w3schools.com/js/" }
        ],
        videos: [
            { title: "JavaScript in Telugu – Suresh Techs", url: "https://youtu.be/n87Hns72pBM?si=t2jpyEEFhYZf8WMG" },
            { title: "JavaScript in Hindi – Thapa Technical", url: "https://youtu.be/13gLB6hDHR8?si=jUJEnL-HaWdVC96p" }
        ],
        hindiResources: [
            { title: "JavaScript in Hindi – Thapa Technical", url: "https://youtu.be/13gLB6hDHR8?si=jUJEnL-HaWdVC96p" }
        ],
        interviewQuestions: [
            // JavaScript interview questions can be added here when available
        ]
    },
    "aptitude": {
        id: "aptitude",
        title: "Aptitude – Placement Preparation",
        short: "Master important aptitude topics for campus placements and competitive exams.",
        description: "Covers essential aptitude concepts including quantitative aptitude, logical reasoning, and problem-solving skills. Perfect for students preparing for placements and competitive tests.",
        level: "Beginner to Advanced",
        type: "Placement Preparation",
        notes: [
            { title: "Most Important Aptitude Topics – GeeksforGeeks", url: "https://www.geeksforgeeks.org/aptitude/most-important-aptitude-topics-for-placements/" }
        ],
        videos: [
            { title: "Aptitude for Placements", url: "https://youtu.be/tnc9ojITRg4?si=WgJq3ru96DrFUJ2m" }
        ],
        hindiResources: [
            { title: "Aptitude for Placements", url: "https://youtu.be/tnc9ojITRg4?si=WgJq3ru96DrFUJ2m" }
        ],
        interviewQuestions: []
    },
    "dsa": {
        id: "dsa",
        title: "Data Structures and Algorithms – Mastering Problem Solving",
        short: "Learn essential data structures, algorithms, and problem-solving techniques.",
        description: "Detailed coverage of arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithm analysis. Designed to boost coding interview performance.",
        level: "Beginner to Advanced",
        type: "Programming Fundamentals",
        notes: [
            { title: "DSA Tutorial – GeeksforGeeks", url: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/" }
        ],
        videos: [
            { title: "DSA in Telugu – Engineering Animutyam", url: "https://youtube.com/playlist?list=PLjzLBp9HHZWiJrhfJzTAEbwdpQIfUXtwP&si=qpfIfIxN6B5sND-X" },
            { title: "DSA in Hindi – CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&si=CJau5mEvGPbvRPAe" }
        ],
        hindiResources: [
            { title: "DSA in Hindi – CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi&si=CJau5mEvGPbvRPAe" }
        ],
        interviewQuestions: []
    },
    "reactjs": {
        id: "reactjs",
        title: "ReactJS – Building Interactive UIs",
        short: "Learn React basics, hooks, and component-driven development.",
        description: "Covers core React concepts like components, props, state, hooks, and lifecycle methods, along with building dynamic and responsive web apps.",
        level: "Beginner to Intermediate",
        type: "Front-End Development",
        notes: [
            { title: "React Official Documentation", url: "https://react.dev/learn" }
        ],
        videos: [
            { title: "React in Telugu – Suresh Techs", url: "https://youtu.be/o87aTPuJf9o?si=OtpHjQxysWqYDa0x" },
            { title: "React in Hindi – Codestep", url: "https://youtu.be/LuNPCSNr-nE?si=i-5bfG3f8uvN70rn" }
        ],
        hindiResources: [
            { title: "React in Hindi – Codestep", url: "https://youtu.be/LuNPCSNr-nE?si=i-5bfG3f8uvN70rn" }
        ],
        interviewQuestions: []
    },
    "nodejs": {
        id: "nodejs",
        title: "NodeJS – Server-Side JavaScript",
        short: "Build scalable backend applications using NodeJS.",
        description: "Covers NodeJS basics, modules, file system operations, event-driven architecture, and creating RESTful APIs.",
        level: "Beginner to Intermediate",
        type: "Backend Development",
        notes: [
            { title: "NodeJS Tutorial – GeeksforGeeks", url: "https://www.geeksforgeeks.org/node-js/nodejs/" }
        ],
        videos: [
            { title: "NodeJS in Telugu – Tech Jashwanth", url: "https://youtu.be/RpCliBS_xA4?si=8_aOj0NY0f0idi7j" },
            { title: "NodeJS in Hindi – CodeWithHarry", url: "https://youtu.be/BLl32FvcdVM?si=lQb76WNGA0nM3Uz2" }
        ],
        hindiResources: [
            { title: "NodeJS in Hindi – CodeWithHarry", url: "https://youtu.be/BLl32FvcdVM?si=lQb76WNGA0nM3Uz2" }
        ],
        interviewQuestions: []
    },
    "mongodb": {
        id: "mongodb",
        title: "MongoDB – NoSQL Database Mastery",
        short: "Learn MongoDB fundamentals for modern applications.",
        description: "Covers MongoDB basics, CRUD operations, schema design, indexing, aggregation, and working with MongoDB Atlas.",
        level: "Beginner to Intermediate",
        type: "Database",
        notes: [
            { title: "MongoDB Official Learning", url: "https://learn.mongodb.com/" },
            { title: "MongoDB Cheat Sheet – GeeksforGeeks", url: "https://www.geeksforgeeks.org/mongodb/mongodb-cheat-sheet/" }
        ],
        videos: [
            { title: "MongoDB in Telugu – Dodagatta Nihar", url: "https://youtu.be/KJK2oJ4ZJCQ?si=ZeOkSYNnnHxzVh-Y" },
            { title: "MongoDB in Hindi – Thapa Technical", url: "https://youtu.be/tww-gbNPOcA?si=dHhPAd79_mymqfRj" }
        ],
        hindiResources: [
            { title: "MongoDB in Hindi – Thapa Technical", url: "https://youtu.be/tww-gbNPOcA?si=dHhPAd79_mymqfRj" }
        ],
        interviewQuestions: []
    },
    "reasoning": {
        id: "reasoning",
        title: "Logical Reasoning – Placement Preparation",
        short: "Enhance problem-solving skills for competitive exams and interviews.",
        description: "Focuses on logical puzzles, verbal reasoning, analytical reasoning, and critical thinking techniques.",
        level: "Beginner to Advanced",
        type: "Placement Preparation",
        notes: [
            { title: "Logical Reasoning Topics – Indeed", url: "https://in.indeed.com/career-advice/career-development/logical-reasoning-topics" }
        ],
        videos: [
            { title: "Logical Reasoning Playlist", url: "https://youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK&si=f5x0jSI-AjqAGQu-" }
        ],
        hindiResources: [
            { title: "Logical Reasoning Playlist", url: "https://youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK&si=f5x0jSI-AjqAGQu-" }
        ],
        interviewQuestions: [
            { title: "65 Logical Reasoning Questions – Naukri", url: "https://www.naukri.com/campus/career-guidance/65-logical-reasoning-questions-and-answers-for-freshers" }
        ]
    },
    "mern-stack": {
        id: "mern-stack",
        title: "MERN Stack – Full Stack JavaScript Development",
        short: "Learn MongoDB, Express, React, and Node to build full-stack apps.",
        description: "Complete guide to MERN stack development, covering backend, frontend, database integration, and deployment.",
        level: "Intermediate to Advanced",
        type: "Full-Stack Development",
        notes: [
            { title: "MERN Stack Guide – GeeksforGeeks", url: "https://www.geeksforgeeks.org/mern/understand-mern-stack/" }
        ],
        videos: [
            { title: "MERN Stack in Telugu – Telugu Skillhub", url: "https://youtu.be/ZAKPpviadF8?si=mfeKCn3tBaxkkfng" },
            { title: "MERN Stack in Hindi – Thapa Technical", url: "https://www.youtube.com/watch?v=fSmp7Cv-c_0&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc" }
        ],
        hindiResources: [
            { title: "MERN Stack in Hindi – Thapa Technical", url: "https://www.youtube.com/watch?v=fSmp7Cv-c_0&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc" }
        ],
        interviewQuestions: []
    },
    "cpp": {
        id: "cpp",
        title: "C++ – Object-Oriented Programming Mastery",
        short: "Learn C++ from basics to advanced object-oriented concepts.",
        description: "Covers C++ syntax, OOP concepts, STL, pointers, memory management, and competitive programming applications.",
        level: "Beginner to Advanced",
        type: "Programming Language",
        notes: [
            { title: "C++ Tutorial – W3Schools", url: "https://www.w3schools.com/cpp/" }
        ],
        videos: [
            { title: "C++ Complete Course – CodeWithHarry", url: "https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&si=NWhgYdxkdFa4_xID" },
            { title: "C++ in Hindi – Saurabh Shukla", url: "https://youtube.com/playlist?list=PLqleLpAMfxGDq9Ehl8FUstcRrCRQPQO7n&si=YHmtC-JCXWurm4su" }
        ],
        hindiResources: [
            { title: "C++ in Hindi – Saurabh Shukla", url: "https://youtube.com/playlist?list=PLqleLpAMfxGDq9Ehl8FUstcRrCRQPQO7n&si=YHmtC-JCXWurm4su" }
        ],
        interviewQuestions: [
            { title: "C++ Interview Questions", url: "https://drive.google.com/file/d/1zd9t27XISnQaf8J28qOn1ZHhWZBI2NsM/view?usp=sharing" }
        ]
    },
    "python": {
        id: "python",
        title: "Python – From Basics to Advanced Programming",
        short: "Learn Python syntax, libraries, and frameworks for versatile development.",
        description: "Covers Python fundamentals including variables, data types, control structures, functions, and OOP, along with modules, file handling, and exception handling. Also explores advanced topics like decorators, generators, and working with popular libraries for data science, web development, and automation. Perfect for beginners and professionals aiming for career-ready skills.",
        level: "Beginner to Advanced",
        type: "Programming Language",
        notes: [
            { title: "Python Tutorial – TutorialsPoint", url: "https://www.tutorialspoint.com/python/index.htm" }
        ],
        videos: [
            { title: "Python in Telugu – Code with Swaroop", url: "https://youtu.be/fHKPQEVCX-s?si=hWeLMBRKQ3ryWiI7" },
            { title: "Python Complete Course – Apna College", url: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=RpWNEiS1xyflbmhf" }
        ],
        hindiResources: [
            { title: "Python Complete Course – Apna College", url: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=RpWNEiS1xyflbmhf" }
        ],
        interviewQuestions: [
            { title: "Python Interview Questions", url: "https://drive.google.com/file/d/1asE4Hhu86BQML7ydSWIZnlInEAt6CY8P/view?usp=sharing" }
        ]
    },
    "java": {
        id: "java",
        title: "Java – Object-Oriented Development",
        short: "Master Java syntax, OOP principles, and build robust applications.",
        description: "Covers Java basics like syntax, data types, and control flow, progressing to OOP concepts, collections framework, multithreading, exception handling, and JDBC. Includes guidance for building desktop, web, and enterprise-level applications.",
        level: "Beginner to Advanced",
        type: "Programming Language",
        notes: [
            { title: "Java Tutorial – W3Schools", url: "https://www.w3schools.com/java/" }
        ],
        videos: [
            { title: "Java Complete Course – Kunal Kushwaha", url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=X80rZPjYgJNZR9gO" },
            { title: "Java Programming – Telusko", url: "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=TrSh6jPhROJ9TCAI" }
        ],
        hindiResources: [
            { title: "Java Complete Course – Kunal Kushwaha", url: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=X80rZPjYgJNZR9gO" }
        ],
        interviewQuestions: [
            { title: "Java Interview Questions", url: "https://drive.google.com/file/d/1GFxcVsqHvecIQxuF8EwT_N3PKcHIJXvk/view?usp=sharing" }
        ]
    },
    "machine-learning": {
        id: "machine-learning",
        title: "Machine Learning – Data-Driven Intelligence",
        short: "Learn machine learning algorithms, model building, and data analysis.",
        description: "Covers the fundamentals of machine learning, including supervised and unsupervised learning, regression, classification, clustering, and model evaluation. Explores key algorithms like linear regression, decision trees, random forests, k-means, and neural networks. Includes practical projects using Python libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow. Perfect for data enthusiasts aiming to build intelligent applications.",
        level: "Beginner to Advanced",
        type: "Data Science / AI",
        notes: [
            { title: "Machine Learning Tutorial – GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/" }
        ],
        videos: [
            { title: "Machine Learning in Telugu – Telugu Skillhub", url: "https://youtu.be/J5bXOOmkopc?si=exampleTelugu" },
            { title: "Machine Learning Complete Course", url: "https://youtu.be/i_LwzRVP7bg?si=TJP59fnUTXimcePS" }
        ],
        hindiResources: [
            { title: "Machine Learning Complete Course", url: "https://youtu.be/i_LwzRVP7bg?si=TJP59fnUTXimcePS" }
        ],
        interviewQuestions: [
            // Machine Learning interview questions can be added here when available
        ]
    },
    "sql": {
        id: "sql",
        title: "SQL – Structured Query Language for Databases",
        short: "Master SQL queries, joins, and database management.",
        description: "Covers SQL basics including SELECT, INSERT, UPDATE, DELETE, and advanced topics like joins, subqueries, indexes, stored procedures, and database normalization. Perfect for backend developers, analysts, and anyone working with relational databases.",
        level: "Beginner to Intermediate",
        type: "Database",
        notes: [
            { title: "SQL Tutorial – W3Schools", url: "https://www.w3schools.com/sql/" }
        ],
        videos: [
            { title: "SQL in Telugu – Naresh i Technologies", url: "https://youtu.be/HXV3zeQKqGY?si=exampleTelugu" },
            { title: "SQL in Hindi – CodeWithHarry", url: "https://youtu.be/5OdVJbNCSso?si=exampleHindi" }
        ],
        hindiResources: [
            { title: "SQL in Hindi – CodeWithHarry", url: "https://youtu.be/5OdVJbNCSso?si=exampleHindi" }
        ],
        interviewQuestions: [
            // SQL interview questions can be added here when available
        ]
    }
};

// ========================================
// COURSE RENDERING FUNCTIONS
// ========================================

function renderCoursesPage() {
    const coursesContainer = document.getElementById('courses-container');
    if (!coursesContainer) return; // Not on courses page
    
    // Clear any existing content
    coursesContainer.innerHTML = '';
    
    // Check if we have any courses
    const courseEntries = Object.entries(courses);
    if (courseEntries.length === 0) {
        coursesContainer.innerHTML = `
            <div class="no-courses">
                <h3>No Courses Available</h3>
                <p>Courses are being updated. Please check back soon!</p>
            </div>
        `;
        return;
    }
    
    // Render each course
    courseEntries.forEach(([courseId, course]) => {
        const courseCard = document.createElement('article');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.short}</p>
                <div class="course-meta">
                    <span class="course-level">${course.level || 'Beginner'}</span>
                    <span class="course-type">${course.type || 'Programming'}</span>
                </div>
                <a href="course-detail.html?course=${courseId}" class="btn btn-primary">View Details</a>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

function renderFeaturedCourses() {
    const featuredContainer = document.getElementById('featured-courses-container');
    if (!featuredContainer) return; // Not on homepage
    
    // Clear any existing content
    featuredContainer.innerHTML = '';
    
    // Check if we have any courses
    const courseEntries = Object.entries(courses);
    if (courseEntries.length === 0) {
        featuredContainer.innerHTML = `
            <div class="no-courses">
                <h3>Coming Soon</h3>
                <p>We're preparing amazing courses for you!</p>
            </div>
        `;
        return;
    }
    
    // Show first 3-4 courses as featured (or all if less than 4)
    const featuredCourses = courseEntries.slice(0, 4);
    
    featuredCourses.forEach(([courseId, course]) => {
        const courseCard = document.createElement('article');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.short}</p>
                <a href="course-detail.html?course=${courseId}" class="btn btn-outline">View Details</a>
            </div>
        `;
        featuredContainer.appendChild(courseCard);
    });
}

// ========================================
// THEME MANAGEMENT
// ========================================

class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Set initial theme
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (systemPrefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }

        // Listen for theme toggle clicks
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme toggle button aria-label
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme');
    }
}

// ========================================
// MOBILE NAVIGATION
// ========================================

class MobileNavigation {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.mobileLinks = document.querySelectorAll('.mobile-nav-link');
        
        this.init();
    }

    init() {
        if (!this.navToggle || !this.mobileMenu) return;

        // Toggle menu on button click
        this.navToggle.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking on links
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navToggle.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle keyboard navigation
        this.navToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleMenu();
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen()) {
                this.closeMenu();
                this.navToggle.focus();
            }
        });
    }

    toggleMenu() {
        if (this.isMenuOpen()) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.navToggle.setAttribute('aria-expanded', 'true');
        this.mobileMenu.setAttribute('aria-hidden', 'false');
        
        // Focus first menu item
        const firstLink = this.mobileMenu.querySelector('.mobile-nav-link');
        if (firstLink) {
            firstLink.focus();
        }
    }

    closeMenu() {
        this.navToggle.setAttribute('aria-expanded', 'false');
        this.mobileMenu.setAttribute('aria-hidden', 'true');
    }

    isMenuOpen() {
        return this.navToggle.getAttribute('aria-expanded') === 'true';
    }
}

// ========================================
// PARTICLES MANAGER
// ========================================

class ParticlesManager {
    constructor() {
        this.container = document.getElementById('tsparticles');
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isSlowConnection = this.detectSlowConnection();
        this.isMobile = window.innerWidth < 768;
        
        this.init();
    }

    detectSlowConnection() {
        // Check for slow network connection
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
            }
        }
        return false;
    }

    init() {
        if (!this.container || this.isReducedMotion) {
            console.log('Particles disabled: reduced motion or container not found');
            return;
        }

        // Load particles with appropriate configuration
        this.loadParticles();
    }

    getParticleCount() {
        if (this.isSlowConnection) return 20;
        if (this.isMobile) return 30;
        return 50;
    }

    getParticleConfig() {
        return {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: this.isSlowConnection ? 30 : 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: !this.isMobile,
                        mode: "push",
                    },
                    onHover: {
                        enable: !this.isMobile,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#ffffff", "#7fdbff", "#39cccc", "#0074d9"],
                },
                links: {
                    enable: false,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "top",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: this.isSlowConnection ? 1 : 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: this.getParticleCount(),
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.3,
                        sync: false,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 8 },
                    random: true,
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 1,
                        sync: false,
                    },
                },
            },
            detectRetina: true,
        };
    }

    async loadParticles() {
        try {
            if (typeof tsParticles !== 'undefined') {
                await tsParticles.load("tsparticles", this.getParticleConfig());
                console.log('Particles loaded successfully');
            } else {
                console.warn('tsParticles library not found');
            }
        } catch (error) {
            console.error('Error loading particles:', error);
        }
    }
}

// ========================================
// LOADING MANAGER
// ========================================

class LoadingManager {
    constructor() {
        this.splash = document.getElementById('loading-splash');
        this.minDisplayTime = 1000; // Minimum time to show splash
        this.maxDisplayTime = 3000; // Maximum time to show splash
        this.startTime = Date.now();
        
        this.init();
    }

    init() {
        if (!this.splash) return;

        // Hide splash after minimum time and when page is loaded
        const hideAfterMinTime = () => {
            const elapsed = Date.now() - this.startTime;
            const remainingTime = Math.max(0, this.minDisplayTime - elapsed);
            
            setTimeout(() => {
                this.hideSplash();
            }, remainingTime);
        };

        // Hide splash when page is fully loaded or after max time
        if (document.readyState === 'complete') {
            hideAfterMinTime();
        } else {
            window.addEventListener('load', hideAfterMinTime);
            
            // Fallback: hide after max time regardless
            setTimeout(() => {
                this.hideSplash();
            }, this.maxDisplayTime);
        }
    }

    hideSplash() {
        if (this.splash && !this.splash.classList.contains('hidden')) {
            this.splash.classList.add('hidden');
            
            // Remove from DOM after transition
            setTimeout(() => {
                if (this.splash && this.splash.parentNode) {
                    this.splash.parentNode.removeChild(this.splash);
                }
            }, 500);
        }
    }
}

// ========================================
// COURSE DETAIL MANAGER
// ========================================

class CourseDetailManager {
    constructor() {
        this.init();
    }

    init() {
        // Only run on course detail page
        if (!window.location.pathname.includes('course-detail.html')) return;

        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('course');

        if (courseId && courses[courseId]) {
            this.renderCourse(courses[courseId]);
        } else {
            this.showNotFound();
        }
    }

    renderCourse(course) {
        // Update page title
        document.title = `${course.title} - CourseCatalyst`;
        document.getElementById('page-title').textContent = `${course.title} - CourseCatalyst`;

        // Update breadcrumb
        const breadcrumbCurrent = document.getElementById('breadcrumb-current');
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = course.title;
        }

        // Update course header
        document.getElementById('course-title').textContent = course.title;
        document.getElementById('course-description').textContent = course.description;

        // Render notes
        this.renderNotes(course.notes);

        // Render videos
        this.renderVideos(course.videos);

        // Render Hindi resources
        this.renderHindiResources(course.hindiResources);

        // Render interview questions
        this.renderInterviewQuestions(course.interviewQuestions);

        // Render related courses
        this.renderRelatedCourses(course.id);

        // Show course content
        document.getElementById('course-content').style.display = 'block';
    }

    renderNotes(notes) {
        const container = document.getElementById('notes-list');
        if (!container || !notes) return;

        container.innerHTML = notes.map(note => `
            <a href="${note.url}" class="resource-card" target="_blank" rel="noopener noreferrer">
                <h4>${note.title}</h4>
                <p>Download PDF notes and study materials</p>
            </a>
        `).join('');
    }

    renderVideos(videos) {
        const container = document.getElementById('videos-list');
        if (!container || !videos) return;

        container.innerHTML = videos.map(video => `
            <a href="${video.url}" class="resource-card" target="_blank" rel="noopener noreferrer">
                <h4>${video.title}</h4>
                <p>Watch comprehensive video tutorials</p>
            </a>
        `).join('');
    }

    renderHindiResources(hindiResources) {
        const container = document.getElementById('hindi-list');
        if (!container || !hindiResources) return;

        container.innerHTML = hindiResources.map(resource => `
            <a href="${resource.url}" class="resource-card" target="_blank" rel="noopener noreferrer">
                <h4>${resource.title}</h4>
                <p>Learn in Hindi with these resources</p>
            </a>
        `).join('');
    }

    renderInterviewQuestions(interviewQuestions) {
        const container = document.getElementById('interview-questions-list');
        if (!container || !interviewQuestions) return;

        container.innerHTML = interviewQuestions.map(question => `
            <a href="${question.url}" class="resource-card" target="_blank" rel="noopener noreferrer">
                <h4>${question.title}</h4>
                <p>Practice interview questions and prepare for technical interviews</p>
            </a>
        `).join('');
    }

    renderRelatedCourses(currentCourseId) {
        const container = document.getElementById('related-courses-list');
        if (!container) return;

        // Get 3 random courses excluding current one
        const otherCourses = Object.values(courses).filter(course => course.id !== currentCourseId);
        const relatedCourses = this.shuffleArray(otherCourses).slice(0, 3);

        container.innerHTML = relatedCourses.map(course => `
            <article class="course-card">
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <p>${course.short}</p>
                    <a href="course-detail.html?course=${course.id}" class="btn btn-primary">View Details</a>
                </div>
            </article>
        `).join('');
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showNotFound() {
        document.getElementById('course-not-found').style.display = 'block';
        document.title = 'Course Not Found - CourseCatalyst';
    }
}

// ========================================
// CONTACT FORM MANAGER
// ========================================

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        // Check if EmailJS is configured
        if (EMAILJS_USER_ID === 'YOUR_USER_ID_HERE' || typeof emailjs === 'undefined') {
            this.showToast('Configuration Required', 
                'EmailJS is not configured. Please check the setup instructions.', 
                'error');
            return;
        }

        this.setLoadingState(true);

        try {
            const formData = new FormData(this.form);
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                subject: formData.get('subject') || 'General Inquiry',
                message: formData.get('message')
            };

            // Check if EmailJS is properly initialized
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS is not loaded');
            }

            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            
            this.showToast('Message Sent!', 
                'Thank you for your message. We\'ll get back to you soon.', 
                'success');
            
            this.form.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // More detailed error message
            let errorMessage = 'There was an error sending your message. Please try again later.';
            if (error.message) {
                console.error('Detailed error:', error.message);
                if (error.message.includes('not loaded')) {
                    errorMessage = 'Email service is not properly configured. Please contact the administrator.';
                } else if (error.message.includes('Invalid')) {
                    errorMessage = 'Email configuration error. Please contact the administrator.';
                }
            }
            
            this.showToast('Send Failed', errorMessage, 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    validateForm() {
        const name = this.form.querySelector('#name');
        const email = this.form.querySelector('#email');
        const message = this.form.querySelector('#message');
        
        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            this.showFieldError(name, 'Name is required');
            isValid = false;
        } else if (name.value.trim().length < 2) {
            this.showFieldError(name, 'Name must be at least 2 characters');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            this.showFieldError(email, 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email.value)) {
            this.showFieldError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            this.showFieldError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            this.showFieldError(message, 'Message must be at least 10 characters');
            isValid = false;
        }

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        
        switch (field.type) {
            case 'text':
                if (field.name === 'name') {
                    if (!value) {
                        this.showFieldError(field, 'Name is required');
                        return false;
                    } else if (value.length < 2) {
                        this.showFieldError(field, 'Name must be at least 2 characters');
                        return false;
                    }
                }
                break;
                
            case 'email':
                if (!value) {
                    this.showFieldError(field, 'Email is required');
                    return false;
                } else if (!this.isValidEmail(value)) {
                    this.showFieldError(field, 'Please enter a valid email address');
                    return false;
                }
                break;
                
            case 'textarea':
                if (!value) {
                    this.showFieldError(field, 'Message is required');
                    return false;
                } else if (value.length < 10) {
                    this.showFieldError(field, 'Message must be at least 10 characters');
                    return false;
                }
                break;
        }

        this.clearFieldError(field);
        return true;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setLoadingState(isLoading) {
        if (!this.submitBtn) return;

        const btnText = this.submitBtn.querySelector('.btn-text');
        const btnLoading = this.submitBtn.querySelector('.btn-loading');

        if (isLoading) {
            this.submitBtn.disabled = true;
            this.submitBtn.classList.add('btn-loading');
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'flex';
        } else {
            this.submitBtn.disabled = false;
            this.submitBtn.classList.remove('btn-loading');
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
        }
    }

    showToast(title, message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        const titleElement = toast.querySelector('.toast-title');
        const messageElement = toast.querySelector('.toast-description');

        if (titleElement) titleElement.textContent = title;
        if (messageElement) messageElement.textContent = message;

        toast.className = `toast ${type}`;
        toast.classList.add('show');

        // Auto hide after 5 seconds
        setTimeout(() => {
            this.hideToast();
        }, 5000);

        // Close button functionality
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.onclick = () => this.hideToast();
        }
    }

    hideToast() {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.remove('show');
        }
    }
}

// ========================================
// LAZY LOADING MANAGER
// ========================================

class LazyLoadManager {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ========================================
// SCROLL MANAGER
// ========================================

class ScrollManager {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update focus for accessibility
                    target.focus();
                }
            }
        });

        // Header shadow on scroll
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = 'none';
                }
            });
        }
    }
}

// ========================================
// ACCESSIBILITY MANAGER
// ========================================

class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        // Ensure skip to main content functionality
        this.addSkipToMainLink();
        
        // Keyboard navigation enhancements
        this.enhanceKeyboardNavigation();
        
        // Announce page changes for screen readers
        this.announcePageChanges();
    }

    addSkipToMainLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100000;
            border-radius: 4px;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure main content is focusable
        const main = document.querySelector('main');
        if (main && !main.hasAttribute('tabindex')) {
            main.setAttribute('tabindex', '-1');
            main.setAttribute('id', 'main');
        }
    }

    enhanceKeyboardNavigation() {
        // Trap focus in mobile menu when open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    const focusableElements = mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        }
    }

    announcePageChanges() {
        // Create aria-live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'aria-live-region';
        document.body.appendChild(liveRegion);
    }
}

// ========================================
// APPLICATION INITIALIZATION
// ========================================

class CourseCatalystApp {
    constructor() {
        this.managers = [];
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        try {
            // Initialize all managers
            this.managers.push(new LoadingManager());
            this.managers.push(new ThemeManager());
            this.managers.push(new MobileNavigation());
            this.managers.push(new ParticlesManager());
            this.managers.push(new CourseDetailManager());
            this.managers.push(new ContactFormManager());
            this.managers.push(new LazyLoadManager());
            this.managers.push(new ScrollManager());
            this.managers.push(new AccessibilityManager());

            // Render courses on appropriate pages
            renderCoursesPage();        // For courses.html
            renderFeaturedCourses();    // For index.html

            console.log('CourseCatalyst initialized successfully');
        } catch (error) {
            console.error('Error initializing CourseCatalyst:', error);
        }
    }

    // Public API for accessing managers
    getManager(managerName) {
        return this.managers.find(manager => 
            manager.constructor.name.toLowerCase().includes(managerName.toLowerCase())
        );
    }
}

// ========================================
// GLOBAL ERROR HANDLING
// ========================================

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Could send error reports to analytics service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error reports to analytics service here
});

// ========================================
// START APPLICATION
// ========================================

// Initialize the application
const app = new CourseCatalystApp();

// Export for potential external access
window.CourseCatalyst = {
    app,
    courses,
    version: '1.0.0'
};
