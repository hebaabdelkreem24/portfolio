
    // Skills Data
    const skillsData = {
        frontend: {
            summary: "Frontend development focuses on creating responsive, interactive user interfaces using modern frameworks and libraries. I specialize in React.js and Next.js for building fast, SEO-friendly applications.",
            skills: [
                { name: "React.js", icon: "fab fa-react", level: 90 },
                { name: "Next.js", icon: "fab fa-react", level: 85 },
                { name: "JavaScript", icon: "fab fa-js", level: 88 },
                { name: "HTML5", icon: "fab fa-html5", level: 92 },
                { name: "CSS3", icon: "fab fa-css3-alt", level: 88 },
                { name: "Tailwind CSS", icon: "fab fa-css3-alt", level: 85 },
                { name: "Bootstrap", icon: "fab fa-bootstrap", level: 85 },
                { name: "Redux", icon: "fas fa-code-branch", level: 80 }
            ]
        },
        backend: {
            summary: "Backend development involves creating robust server-side applications, RESTful APIs, and database management. I work with Node.js, Express, and MongoDB to build scalable solutions.",
            skills: [
                { name: "Node.js", icon: "fab fa-node-js", level: 85 },
                { name: "Express.js", icon: "fab fa-node-js", level: 85 },
                { name: "MongoDB", icon: "fas fa-database", level: 82 },
                { name: "RESTful APIs", icon: "fas fa-plug", level: 88 },
                { name: "JWT Auth", icon: "fas fa-shield-alt", level: 85 }
            ]
        },
        tools: {
            summary: "Tools and DevOps practices ensure smooth development workflows, version control, and deployment. I use Git for version control and follow Agile methodologies.",
            skills: [
                { name: "Git", icon: "fab fa-git-alt", level: 85 },
                { name: "GitHub", icon: "fab fa-github", level: 85 },
                { name: "VS Code", icon: "fas fa-code", level: 90 },
                { name: "Figma", icon: "fab fa-figma", level: 75 },
                { name: "Agile/Scrum", icon: "fas fa-users", level: 85 }
            ]
        },
        softskills: {
            summary: "Soft skills are essential for effective collaboration and project success. I excel in communication, problem-solving, and time management.",
            skills: [
                { name: "Communication", icon: "fas fa-comments", level: 90 },
                { name: "Problem Solving", icon: "fas fa-puzzle-piece", level: 88 },
                { name: "Time Management", icon: "fas fa-clock", level: 85 },
                { name: "Team Collaboration", icon: "fas fa-users", level: 88 },
                { name: "Leadership", icon: "fas fa-chart-line", level: 80 }
            ]
        }
    };

    // Experience Data
    const experiences = [
        {
            company: "Digilians",
            logo: "fas fa-building",
            title: "React Developer Trainee",
            period: "Feb 2026 – Present",
            description: "Improved application performance by 20% through strategic implementation of Next.js SSR and CSR rendering patterns. Architected scalable Redux-based state management solutions.",
            tech: ["React.js", "Next.js", "Redux", "Tailwind CSS"]
        },
        {
            company: "Freelance Yard",
            logo: "fas fa-laptop-code",
            title: "Freelance Full Stack Developer",
            period: "Aug 2024 – Present",
            description: "Increased user engagement by 25% by developing mobile-first, conversion-optimized React.js interfaces. Delivered 2 production-grade MERN stack applications.",
            tech: ["MERN Stack", "JWT", "RESTful APIs"]
        },
        {
            company: "NTI",
            logo: "fas fa-university",
            title: "Web Design Intern",
            period: "Jul 2023 – Jul 2023",
            description: "Designed and developed 10+ responsive web pages using HTML5, CSS3, and Bootstrap framework.",
            tech: ["HTML5", "CSS3", "Bootstrap", "Figma"]
        }
    ];

    // Projects Data
    const projects = [
        {
            title: "Cosmetic Chemistry Portal",
            icon: "fas fa-flask",
            tech: ["React.js", "Node.js", "RESTful APIs", "Tailwind CSS"],
            description: "An interactive service platform tailored for cosmetic chemistry solutions. Boosted user engagement by 25% through intuitive navigation design.",
            highlights: ["Responsive design", "API integration", "Performance optimized"]
        },
        {
            title: "E-Commerce Platform",
            icon: "fas fa-shopping-cart",
            tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
            description: "A scalable full-stack e-commerce platform with real-time inventory management and secure authentication.",
            highlights: ["JWT Auth", "Role-based access", "Real-time updates"]
        }
    ];

    // Render Skills
    function renderSkills(category) {
        const data = skillsData[category];
        const summaryEl = document.getElementById('categorySummary');
        const gridEl = document.getElementById('skillsGrid');
        
        summaryEl.innerHTML = data.summary;
        
        gridEl.innerHTML = data.skills.map(skill => `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Render Experience Timeline
    function renderExperience() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = experiences.map((exp, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="company-logo">
                        <i class="${exp.logo}"></i>
                    </div>
                    <h3>${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period"><i class="far fa-calendar-alt"></i> ${exp.period}</div>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${exp.description}</p>
                    <div class="tech-stack">
                        ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Projects
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-body">
                    <h3>${project.title}</h3>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${project.description}</p>
                    <div class="project-links">
                        <a href="#" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="#" class="btn-outline" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Navbar scroll effect and active section highlighting
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const backToTop = document.getElementById('backToTop');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            // Navbar background
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('visible');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('visible');
            }
            
            // Active section highlighting
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Mobile menu
    function initMobileMenu() {
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        let isOpen = false;
        
        mobileBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                navLinks.classList.add('mobile-open');
                mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navLinks.classList.remove('mobile-open');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                isOpen = false;
            });
        });
    }
    
    // Skill tabs
    function initSkillTabs() {
        const tabs = document.querySelectorAll('.skill-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const category = tab.getAttribute('data-category');
                renderSkills(category);
            });
        });
    }
    
    // Contact form
    function initContactForm() {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
    
    // Resume download
    function initResume() {
        const resumeBtn = document.getElementById('resumeBtn');
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume download will be available soon. Thank you for your interest!');
        });
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
    
    // Intersection Observer for fade-in animations
    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('section, .skill-card, .project-card, .service-card, .education-card, .stat-card, .contact-card').forEach(el => {
            el.classList.add('hidden');
            observer.observe(el);
        });
    }
    
    // Initialize everything
    document.addEventListener('DOMContentLoaded', () => {
        renderSkills('frontend');
        renderExperience();
        renderProjects();
        initNavbar();
        initMobileMenu();
        initSkillTabs();
        initContactForm();
        initResume();
        initSmoothScroll();
        initAnimations();
    });
