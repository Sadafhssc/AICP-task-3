
function addJob() {
    const city = document.getElementById('city-name').value;
    const category = document.getElementById('category-name').value;
    const business = document.getElementById('business-name').value;
    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;
    

    if (category && city && business && name && experience) {
        let jobs = getJobsFromStorage();
        jobs.push({ title: business, location: city, experience: experience, category: category, name: name });
        localStorage.setItem('jobs', JSON.stringify(jobs));
        document.getElementById('job-title').value = '';
        document.getElementById('job-location').value = '';
        document.getElementById('job-experience').value = '';
     document.getElementById('job-category').value='';
     document.getElementById('job-name').value='';
    }
}

// Function to retrieve jobs from localStorage
function getJobsFromStorage() {
    const jobs = localStorage.getItem('jobs');
    return jobs ? JSON.parse(jobs) : [];
}

// Function to display jobs on the page
function displayJobs() {
    const empty = document.querySelector('.empty');
    const jobs = getJobsFromStorage();
    empty.innerHTML = '';

    jobs.forEach((job) => {
        let addJobContainer = document.querySelector('.add-job');
        let jobDiv = document.createElement('div'); // Changed variable name to jobDiv
        jobDiv.classList.add('border');
        jobDiv.innerHTML = `
             <h4>Title: ${job.name}</h4><br>
             Company: ${job.business}</h4><br>
            Location: ${job.city}<br>
            <b>Experience: ${job. experience}<b><br>
             Catagory: ${job.category}<br>
             <button>Apply</button>
        `;
        addJobContainer.appendChild(jobDiv);
    });
}