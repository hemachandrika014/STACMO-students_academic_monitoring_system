
// public/scripts.js
/*document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const rollno = document.getElementById('rollno').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rollno, password })
    });
  
    const result = await response.json();
  
    if (result.success) {
      // Redirect to dashboard with student data
      localStorage.setItem('student', JSON.stringify(result.student));
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('login-error').innerText = result.message;
    }
  });*/
  // public/scripts.js
  /*document.getElementById('userType').addEventListener('change', function () {
    const userType = this.value;
    if (userType === 'student') {
      document.getElementById('rollNoLabel').style.display = 'block';
      document.getElementById('rollNo').style.display = 'block';
      document.getElementById('parentNameLabel').style.display = 'none';
      document.getElementById('parentName').style.display = 'none';
    } else if (userType === 'parent') {
      document.getElementById('rollNoLabel').style.display = 'none';
      document.getElementById('rollNo').style.display = 'none';
      document.getElementById('parentNameLabel').style.display = 'block';
      document.getElementById('parentName').style.display = 'block';
    }
  });
  
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const userType = document.getElementById('userType').value;
    const rollNo = document.getElementById('rollNo').value;
    const parentName = document.getElementById('parentName').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userType, rollNo, parentName, password })
    });
  
    const result = await response.json();
  
    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('login-error').innerText = result.message;
    }
  });
  /*document.addEventListener('DOMContentLoaded', () => {
    const userTypeSelect = document.getElementById('userType');
    const rollNoLabel = document.getElementById('rollNoLabel');
    const rollNoInput = document.getElementById('rollNo');
    const parentNameLabel = document.getElementById('parentNameLabel');
    const parentNameInput = document.getElementById('parentName');
    
    userTypeSelect.addEventListener('change', () => {
      const userType = userTypeSelect.value;
      if (userType === 'student') {
        rollNoLabel.style.display = 'block';
        rollNoInput.style.display = 'block';
        rollNoInput.required = true;
        
        parentNameLabel.style.display = 'none';
        parentNameInput.style.display = 'none';
        parentNameInput.required = false;
      } else if (userType === 'parent') {
        rollNoLabel.style.display = 'none';
        rollNoInput.style.display = 'none';
        rollNoInput.required = false;
        
        parentNameLabel.style.display = 'block';
        parentNameInput.style.display = 'block';
        parentNameInput.required = true;
      }
    });
    
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const userType = userTypeSelect.value;
      const rollNo = rollNoInput.value;
      const parentName = parentNameInput.value;
      const password = document.getElementById('password').value;
  
      let loginData;
      if (userType === 'student') {
        loginData = { userType, rollNo, password };
      } else {
        loginData = { userType, parentName, password };
      }
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
  
        const result = await response.json();
  
        if (result.success) {
          localStorage.setItem('user', JSON.stringify(result.student));
          window.location.href = 'dashboard.html';
        } else {
          document.getElementById('login-error').innerText = result.message;
        }
      } catch (error) {
        document.getElementById('login-error').innerText = 'An error occurred. Please try again.';
      }
    });
  });*/
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const userType = document.getElementById('userType').value;
    const rollNo = document.getElementById('rollNo').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userType, rollNo, password })
    });
  
    const result = await response.json();
  
    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.user));
      if (userType === 'parent' && result.user.backlog) {
        alert('Your ward has a backlog.');
      }
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('login-error').innerText = result.message;
    }
  });
  
  
  