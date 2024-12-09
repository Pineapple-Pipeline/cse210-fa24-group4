class AboutUs extends HTMLElement {
  /**
   * Lifecycle method that is called when the custom element is added to the DOM.
   * It sets up the inner HTML of the `AboutUs` component, which includes
   * rendering a team section with details of team members. The section consists
   * of a grid layout, where each team member is represented by their name and role.
   * Additionally, it includes styles for the component to ensure proper display.
   */
  connectedCallback() {
    const teamMembers = [
      { name: "Nikhil Gautam", role: "Project Manager" },
      { name: "Samyak Mehta", role: "Frontend Developer" },
      { name: "Jake Norbie", role: "Backend Developer" },
      { name: "Adrian Layer", role: "UX Designer" },
      { name: "Tim Kraemer", role: "Data Scientist" },
      { name: "Anusha Ravachandran", role: "QA Engineer" },
      { name: "Yunhao Ziang", role: "DevOps Engineer" },
      { name: "Laura Tian", role: "Technical Writer" },
      { name: "Hailey Li", role: "Product Owner" },
    ];

    const teamGrid = teamMembers
      .map(
        (member) => `
          <div class="team-member">
            <h2>${member.name}</h2>
            <p>${member.role}</p>
          </div>
        `,
      )
      .join("");

    this.innerHTML = `
      <style>
        .about-us {
          color: white;
          background-color: #333;
          padding: 20px;
          border-radius: 8px;
        }
        .about-us h1 {
          font-size: 2em;
          margin-bottom: 20px;
        }
        .about-us p {
          font-size: 1.2em;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
        }
        .team-member {
          background-color: #444;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
        }
        .team-member h2 {
          font-size: 1.5em;
          margin-bottom: 10px;
        }
        .team-member p {
          font-size: 1em;
          margin: 0;
        }
      </style>
      <div class="about-us">
        <h1>About Us</h1>
        <p>Welcome to our application! We are dedicated to providing the best tools for your needs.</p>
        <p>Our team is composed of experienced developers who are passionate about creating useful and efficient software solutions.</p>
        <p>Feel free to explore our features and tools. If you have any questions, don't hesitate to contact us.</p>
        <div class="team-grid">
          ${teamGrid}
        </div>
      </div>
    `;
  }
}

// Register the custom element
customElements.define("about-us", AboutUs);
