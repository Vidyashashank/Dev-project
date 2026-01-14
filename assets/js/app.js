// Developer credentials (static demo)
const developers = [
  { id: "developer", password: "dev123" },
  { id: "admin", password: "admin123" }
];

// Login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  const valid = developers.find(
    dev => dev.id === user && dev.password === pass
  );

  if (valid) {
    localStorage.setItem("devAuth", "true");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Access denied. Developers only.";
  }
}

// Check authentication
function checkAuth() {
  if (localStorage.getItem("devAuth") !== "true") {
    window.location.href = "index.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("devAuth");
  window.location.href = "index.html";
}

// Join meeting
function joinMeeting() {
  window.location.href = "meeting.html";
}

// Start Jitsi meeting
function startMeeting() {
  const meetingDiv = document.getElementById("meeting");

  new JitsiMeetExternalAPI("meet.jit.si", {
    roomName: "DevMeetProPrivateRoom",
    width: "100%",
    height: "100%",
    parentNode: meetingDiv,
    userInfo: {
      displayName: "Verified Developer"
    }
  });
}
