<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Diagnosis Result</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f0f2f5;
      padding-top: 40px;
    }
    .container {
      max-width: 700px;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    .result-box {
      margin-top: 20px;
      background: #e9ffe9;
      padding: 20px;
      border-left: 5px solid #28a745;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="text-center mb-4">Diagnosis Result</h2>

    <div id="result" class="result-box">
      <!-- Result content will be displayed here -->
    </div>
  </div>

  <script>
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    const name = urlParams.get('name');
    const bp = urlParams.get('bp');
    const sugar = urlParams.get('sugar');
    const symptoms = urlParams.getAll('symptoms');
    const history = urlParams.getAll('history');
    const lifestyle = urlParams.getAll('lifestyle');

    let diagnosis = "Unknown";
    let medicine = "N/A";
    let advice = "Please consult a certified doctor.";
    let specialist = "General Physician";

    if (symptoms.includes("fever") && symptoms.includes("cough")) {
      diagnosis = "Flu or Viral Infection";
      medicine = "Paracetamol, Fluids, Rest";
      advice = "Stay hydrated, rest, and monitor temperature.";
      specialist = "General Physician";
    } else if (sugar === "high" || history.includes("diabetes")) {
      diagnosis = "Possible Diabetes";
      medicine = "Consult doctor for Metformin or insulin.";
      advice = "Low sugar diet, regular exercise.";
      specialist = "Endocrinologist";
    } else if (bp === "high" || history.includes("hypertension")) {
      diagnosis = "High Blood Pressure";
      medicine = "Amlodipine, Losartan (doctor prescribed)";
      advice = "Low salt, exercise, stress reduction.";
      specialist = "Cardiologist";
    } else if (symptoms.includes("headache") && lifestyle.includes("high screen")) {
      diagnosis = "Migraine / Tension Headache";
      medicine = "Painkillers, rest, avoid screens.";
      advice = "Manage sleep and reduce stress.";
      specialist = "Neurologist";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h5>Diagnosis Report for ${name}</h5>
      <p><strong>Possible Condition:</strong> ${diagnosis}</p>
      <p><strong>Suggested Medicine:</strong> ${medicine}</p>
      <p><strong>Health Advice:</strong> ${advice}</p>
      <p><strong>Consult:</strong> ${specialist}</p>
    `;
  </script>
</body>
</html>
