<!DOCTYPE html>
<html>
<head>
  <title>Smart Service Request Portal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      height: 100vh;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      width: 500px;
      padding: 40px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      color: white;
      animation: slideUp 0.6s ease;
    }

    h1 {
      text-align: center;
      margin-bottom: 10px;
      font-size: 26px;
      font-weight: 600;
    }

    .subtitle {
      text-align: center;
      margin-bottom: 30px;
      font-size: 14px;
      opacity: 0.8;
    }

    .form-group {
      margin-bottom: 18px;
    }

    label {
      font-size: 13px;
      margin-bottom: 6px;
      display: block;
      opacity: 0.85;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: none;
      outline: none;
      font-size: 14px;
    }

    textarea {
      resize: none;
      height: 70px;
    }

    input:focus, select:focus, textarea:focus {
      box-shadow: 0 0 8px #00c6ff;
    }

    .priority-high { color: #ff4d4d; }
    .priority-medium { color: #ffc107; }
    .priority-low { color: #28a745; }

    .btn {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 30px;
      font-size: 15px;
      cursor: pointer;
      margin-top: 10px;
      background: linear-gradient(to right, #00c6ff, #0072ff);
      color: white;
      transition: 0.3s;
    }

    .btn:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #00c6ff;
    }

    .success {
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
      color: #00ff99;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>

<body>

<div class="card">
  <h1>Smart Service Portal</h1>
  <div class="subtitle">Raise & Track Service Requests Easily</div>

  <div class="form-group">
    <label>Request Title</label>
    <input id="title" placeholder="Enter issue title">
  </div>

  <div class="form-group">
    <label>Category</label>
    <select id="category">
      <option value="IT">IT Support</option>
      <option value="Admin">Administration</option>
      <option value="Facilities">Facilities</option>
    </select>
  </div>

  <div class="form-group">
    <label>Description</label>
    <textarea id="description" placeholder="Describe your issue..."></textarea>
  </div>

  <div class="form-group">
    <label>Priority</label>
    <select id="priority" onchange="updatePriorityColor()">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  </div>

  <div class="form-group">
    <label>Your Name</label>
    <input id="name" placeholder="Enter your name">
  </div>

  <div class="form-group">
    <label>Your Email</label>
    <input id="email" placeholder="Enter your email">
  </div>

  <button class="btn" onclick="createRequest()">Submit Request</button>

  <div class="success" id="message"></div>
</div>

<script>
function updatePriorityColor() {
  const priority = document.getElementById("priority");
  priority.className = "";
  if(priority.value === "High") priority.classList.add("priority-high");
  if(priority.value === "Medium") priority.classList.add("priority-medium");
  if(priority.value === "Low") priority.classList.add("priority-low");
}

async function createRequest() {
  await fetch('http://localhost:3000/requests', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: title.value,
      category: category.value,
      description: description.value,
      priority: priority.value,
      requesterName: name.value,
      requesterEmail: email.value
    })
  });

  document.getElementById("message").innerText =
    "✔ Request Submitted Successfully!";
}
</script>

</body>
</html>
