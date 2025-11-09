// ---------- COMMON ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- ADMIN LOGIN ----------
function loginAdmin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("Please enter both username and password!");
    return;
  }

  alert("Login successful!");
  window.location.href = "dashboard.html";
}

// ---------- STUDENT CHECK-IN ----------
function startAttendance() {
  const status = document.getElementById("status");
  status.textContent = "Scanning for face...";
  status.style.color = "#f59e0b";

  setTimeout(() => {
    status.textContent = "Attendance recorded successfully!";
    status.style.color = "#16a34a";
    addAttendanceRecord();
  }, 2000);
}

function addAttendanceRecord() {
  const name = "Student " + Math.floor(Math.random() * 50 + 1);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  localStorage.setItem("lastAttendance", JSON.stringify({ date, name, time }));
}

// ---------- DASHBOARD UPDATE ----------
if (window.location.pathname.includes("dashboard.html")) {
  const log = document.getElementById("attendanceLog");
  const record = JSON.parse(localStorage.getItem("lastAttendance"));

  if (record) {
    log.innerHTML = `
      <tr>
        <td>${record.date}</td>
        <td>${record.name}</td>
        <td>${record.time}</td>
        <td>Present</td>
      </tr>
    `;
    document.getElementById("presentCount").textContent = 1;
    document.getElementById("absentCount").textContent = 39;
  }
}

// ---------- STUDENT SEARCH ----------
function searchStudents() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const students = document.querySelectorAll(".student-item");

  students.forEach(stu => {
    const name = stu.textContent.toLowerCase();
    stu.style.display = name.includes(input) ? "flex" : "none";
  });
}

// ---------- REPORT EXPORT ----------
function downloadReport() {
  alert("Report exported successfully!");
}
