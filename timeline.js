document.addEventListener("DOMContentLoaded", () => {
  const timelineData = [
    {
      date: "2013",
      content:
        "(YEAR 1-10) PRIMARY AND SECONDARY SCHOOL IN WUXI UNITED INTERNATIONAL SCHOOL<br><br> I studied IGCSE in WUIS and get the following scores:<br> Mathematics(0580) A*<br> International Mathematics(0607) A*<br> Computer Science A*<br> Business Management A*<br> Physics/Chemistry/Chinese (first language) B<br> English (second language) C"
    },
    {
      date: "2023",
      content:
        "(YEAR 12) HIGH SCHOOL IN DULWICH HIGH SCHOOL SUZHOU<br><br>Waiting for AS result<br>IELTS 7.5"
    },
    { date: "2025", content: "UNIVERSITY IN ???" }
  ];

  const timelineContainer = document.getElementById("timeline-container");

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    const date = document.createElement("div");
    date.classList.add("timeline-date");
    date.textContent = item.date;

    const content = document.createElement("div");
    content.classList.add("timeline-content");
    content.innerHTML = item.content; // 使用 innerHTML 而不是 textContent

    if (index % 2 === 0) {
      timelineItem.appendChild(date);
      timelineItem.appendChild(content);
    } else {
      timelineItem.appendChild(content);
      timelineItem.appendChild(date);
    }

    timelineContainer.appendChild(timelineItem);
  });

  const timelineLine = document.createElement("div");
  timelineLine.classList.add("timeline-line");
  timelineContainer.appendChild(timelineLine);
});
