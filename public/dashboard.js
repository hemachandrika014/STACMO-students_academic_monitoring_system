/*document.addEventListener('DOMContentLoaded', () => {
    const student = JSON.parse(localStorage.getItem('student'));
  
    if (!student) {
      window.location.href = '/';
      return;
    }
  
    const studentNameSpan = document.getElementById('student-name');
    const studentInfoDiv = document.getElementById('student-info');
  
    // Display student's name
    studentNameSpan.textContent = student.name;
  
    // Function to display student information based on button click
    const displayInfo = (info) => {
      studentInfoDiv.innerHTML = info;
    };
  
    // Event listeners for each button
    document.getElementById('attendance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Attendance:</strong> ${student.attendance}%</p>`);
    });
  
    document.getElementById('grades-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Grades:</strong> ${student.grades}</p>`);
    });
  
    document.getElementById('performance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Performance:</strong> ${student.performance}</p>`);
    });
  
    document.getElementById('semester-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Semester Results:</strong> ${student.semesterResults}</p>`);
    });
  
    document.getElementById('previous-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Previous Results:</strong> ${student.previousResults}</p>`);
    });
  });*/
  
  // public/dashboard.js
  /*document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      window.location.href = '/';
      return;
    }
  
    const userNameSpan = document.getElementById('user-name');
    const userInfoDiv = document.getElementById('user-info');
  
    userNameSpan.textContent = user.name;
  
    const displayInfo = (info) => {
      userInfoDiv.innerHTML = info;
    };
  
    document.getElementById('attendance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Attendance:</strong> ${user.attendance}%</p>`);
    });
  
    document.getElementById('grades-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Grades:</strong> ${user.grades}</p>`);
    });
  
    document.getElementById('performance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Performance:</strong> ${user.performance}</p>`);
    });
  
    document.getElementById('semester-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Semester Results:</strong> ${user.semesterResults}</p>`);
    });
  
    document.getElementById('previous-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Previous Results:</strong> ${user.previousResults}</p>`);
    });
  
    if (user.backlog) {
      document.getElementById('backlogNotification').style.display = 'block';
    }
  });*/
  document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      window.location.href = '/';
      return;
    }

    const userNameSpan = document.getElementById('user-name');
    const userInfoDiv = document.getElementById('user-info');

    userNameSpan.textContent = user.name;

    const displayInfo = (info) => {
      userInfoDiv.innerHTML = info;
    };

    document.getElementById('attendance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Attendance:</strong> ${user.attendance}%</p>`);
    });

    document.getElementById('grades-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Grades:</strong> ${user.grades}</p>`);
    });

    document.getElementById('performance-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Performance:</strong> ${user.performance}</p>`);
    });

    document.getElementById('semester-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Semester Results:</strong> ${user.semesterResults}</p>`);
    });

    document.getElementById('previous-results-btn').addEventListener('click', () => {
      displayInfo(`<p><strong>Previous Results:</strong> ${user.previousResults}</p>`);
    });

    if (user.backlog) {
      document.getElementById('backlogNotification').style.display = 'block';
    }

    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = '/';
    });
  });


  