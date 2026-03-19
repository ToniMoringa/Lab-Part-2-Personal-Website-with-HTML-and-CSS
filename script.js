document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully");

    // Simple interaction: Alert when a project is clicked
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        project.addEventListener('click', () => {
            console.log("Project viewed!");
        });
    });
});