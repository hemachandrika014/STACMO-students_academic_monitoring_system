// importData.js
//const { sequelize, Student } = require('./models/student');
//const xlsx = require('xlsx');

// Function to import data from Excel
//const importData = async () => {
  /*try {
    // Read the Excel file
    const workbook = xlsx.readFile('students.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Iterate over rows and create Student instances
    for (const row of data) {
      console.log('Creating student:', row);

      // Check and handle the Backlog field
      const backlog = row.Backlog.toLowerCase() === 'yes';

      try {
        await Student.create({
          rollno: row.RollNo,
          name: row.Name,
          password: row.Password,
          attendance: row.Attendence,
          performance: row.Performance,
          grades: row.Grades,
          semesterResults: row.SemesterResults,
          previousResults: row.PreviousResults,
          backlog: backlog
        });
      } catch (error) {
        console.error('Error creating student:', error);
      }
    }

    console.log('Data import completed successfully.');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

// Sync database and import data
sequelize.sync({ force: true }).then(() => {
  importData();
}).catch(error => {
  console.error('Error syncing the database:', error);
});*/
// importData.js
const { sequelize, Student } = require('./models/student');
const xlsx = require('xlsx');

// Function to notify parents if a student has a backlog
const notifyParents = (student) => {
  console.log(`Notification: ${student.parentsName} (Parent of ${student.name}) has been notified about the backlog.`);
  // You can add actual notification logic here (e.g., sending an email or SMS)
};

// Function to import data from Excel
const importData = async () => {
  try {
    const workbook = xlsx.readFile('students.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    const headers = data[0].map(header => header.trim());
    const rows = data.slice(1).map(row => {
      const rowData = {};
      row.forEach((cell, index) => {
        rowData[headers[index]] = cell;
      });
      return rowData;
    });

    for (const row of rows) {
      console.log('Row data:', row);

      const backlog = row.Backlog.toLowerCase() === 'yes';

      if (!row.ParentsName || !row.ParentsPassword) {
        console.error('Missing parentsName or parentsPassword for row:', row);
        continue;
      }

      try {
        const student = await Student.create({
          rollNo: row.RollNo,
          name: row.Name,
          password: row.Password,
          attendance: row.Attendence,
          performance: row.Performance,
          grades: row.Grades,
          semesterResults: row.SemesterResults,
          previousResults: row.PreviousResults,
          backlog: backlog,
          parentsName: row.ParentsName.trim(),
          parentsPassword: row.ParentsPassword.trim()
        });

        // Notify parents if the student has a backlog
        if (backlog) {
          notifyParents(student);
        }
      } catch (error) {
        console.error('Error creating student:', error);
      }
    }

    console.log('Data import completed successfully.');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

// Sync database and import data
sequelize.sync({ force: true }).then(() => {
  importData();
}).catch(error => {
  console.error('Error syncing the database:', error);
});
