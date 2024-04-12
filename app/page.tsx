import React from "react";
import HeroImage from "custom-components/src/components/HeroImage/HeroImage";
import Card from "custom-components/src/components/Card/Card";
import "./globals.css";

function getImageLink(){
  return 'https://picsum.photos/200/200?r='+Math.random();
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero section */}
      <div className="hero">
        <HeroImage src={"https://picsum.photos/1200/300"} alt={"Hero Image"} />
        <h1 className="text-4xl font-bold mt-4">Welcome to my Portfolio!</h1>
        <p className="text-lg mt-2">
          Passionate and innovative technologist with expertise in software
          development and machine learning.
        </p>
        <a
          href="#projects"
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Explore My Projects
        </a>
      </div>
{/* Tech List section */}
<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4">Detailed Tech List</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      title="Programming Languages"
      content="Python, TypeScript, JavaScript, Java, PHP, Ruby"
    />

    <Card
      title="Databases"
      content="MySQL, MariaDB, MongoDB"
    />

    <Card
      title="Web Development"
      content="React, Vue.js, Flask, jQuery, Rails"
    />

    <Card
      title="Machine Learning"
      content="TensorFlow, Keras, Pytorch"
    />

    <Card
      title="Mobile Development"
      content="Flutter"
    />

    <Card
      title="Cloud Services"
      content="Firebase, Google Cloud, AWS"
    />

    <Card
      title="Version Control"
      content="Git"
    />

    <Card
      title="Other"
      content="Docker"
    />
  </div>
</section>

      <div>
        {/* Basic Information section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <ul className="list-disc pl-4">
            <li>Name: Anmol Sharma</li>
            <li>
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/devanmolsharma"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-blue-500"
                href="https://github.com/devanmolsharma"
              >
                GitHub
              </a>
            </li>
            <li>Email: keepupsharma@gmail.com</li>
            <li>Phone: +1 431-998-4088</li>
            <li>
              <a className="text-blue-500" href="https://anmolsharma.me">
                Portfolio
              </a>
            </li>
            <li>Location: Winnipeg</li>
            <li>
              Education: One Year Diploma in Computer Applications, INFOWIZ,
              Chandigarh (Nov 2021 - Oct 2022)
            </li>
            <li>
              Full Stack Web Development Course (Ongoing, ends Sep 2024): Red
              River College Polytechnic
            </li>
          </ul>
        </section>

        {/* Summary section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-lg">
            Passionate and innovative technologist with a strong foundation in
            diverse areas of software development and machine learning. With
            hands-on experience in technologies like React, Vue.js, Flutter,
            TensorFlow, and more, I have successfully contributed to various
            projects. I thrive on challenges and continuously seek to expand my
            skills in emerging technologies.
          </p>
        </section>

        {/* Projects section */}
        <section className="mt-8" id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Individual project cards */}
            <Card
            
              title="TutorialNet - Multilingual Learning"
              content="Developed an e-learning platform with features like an Admin Panel (using in-page React), site translation, login/signup, pagination, and more. Technologies used: Vue.js, PHP (Backend), MySQL (Database), Google Translate API, On-device Text-to-Speech, Bootstrap CSS."
              imageUrl={getImageLink()}
            />

            <Card
            
              title="AutoMake - AI-based Image Search, Generation, and Editing App (2022)"
              content="Designed and developed an application that utilizes AI for image search, generation, and editing. Technologies used: Flutter, TensorFlow Lite, Google Payments, Google Cloud ML, Firebase (Realtime Storage, Serverless Functions, OAuth)."
              imageUrl={getImageLink()}
            />

            <Card
              title="Portfolio Website (2023)"
              content="Designed and developed my portfolio website using React and MariaDB. Implemented dynamic project loading and commenting functionality."
              imageUrl={getImageLink()}
            />
          </div>
        </section>

        {/* Technical Skills section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <Card
          imageUrl={getImageLink()}
            content={`
                Programming Languages: Python, TypeScript, JavaScript, Java, PHP, Ruby
                Databases: MySQL, MariaDB, MongoDB
                Web Development: React, Vue.js, Flask, jQuery, Rails
                Machine Learning: TensorFlow, Keras, Pytorch
                Mobile Development: Flutter
                Cloud Services: Firebase, Google Cloud, AWS
                Version Control: Git
                Other: Docker
              `}
          />
        </section>

        {/* Volunteer Work section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
            imageUrl={getImageLink()}
              title="Skills Canada National Competition (May 2023)"
              content="Provided setup and support for various skill areas. Ensured each area had the necessary tools and resources for participants."
            />

            <Card
            imageUrl={getImageLink()}
              title="RRC Inspire Conference (October 2023)"
              content="Offered technical support and troubleshooting during presentations. Responded promptly to technical issues to ensure smooth event proceedings."
            />
          </div>
        </section>

        {/* Resources section */}
<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4">Resources</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a href="https://github.com/">
    <Card
      title="GitHub"
      
      content="GitHub is a platform for version control and collaboration that developers use to store and share their code."
      imageUrl="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
    /></a>

    <a href="https://stackoverflow.com/">
    <Card
      title="Stack Overflow"
      
      content="Stack Overflow is a question and answer site for professional and enthusiast programmers. It's a great resource for troubleshooting and learning from others' experiences."
      imageUrl="https://cdn-icons-png.flaticon.com/128/3171/3171906.png"
    /></a>

    <a href="https://developer.mozilla.org/en-US/">
    <Card
      title="MDN Web Docs"
      
      content="MDN Web Docs provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps. It's a comprehensive resource for web developers."
      imageUrl="https://t4.ftcdn.net/jpg/07/62/17/17/240_F_762171740_WnHyDq7r7xZ96gmDNMgNODB3lLTUn1OL.jpg"
    /></a>

    <a href="https://www.w3schools.com/">
    <Card
      title="W3Schools"
      
      content="W3Schools is a web developer information website, with tutorials and references relating to web development topics such as HTML, CSS, JavaScript, and others."
      imageUrl="data:image/png;base64,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"
    /></a>

    <a href="https://dev.to/">
    <Card
      title="Dev.to"
      
      content="Dev.to is a community of software developers getting together to help one another out. The platform is a place for sharing and discovering great ideas, having debates, and making friends."
      imageUrl="https://picsum.photos/200/200"
    /></a>

    <a href="https://css-tricks.com/">
    <Card
      title="CSS-Tricks"
      
      content="CSS-Tricks is a website about cascading style sheets, a style sheet language used for describing the presentation of a document written in a markup language like HTML. It offers tips, tricks, and techniques on various CSS topics."
      imageUrl="https://picsum.photos/200/200"
    /></a>

  </div>
</section>

        {/* Developer Setup section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Developer Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="VSCode setup"
              content="Installed necessary extensions for React and JavaScript development. Configured theme and font settings. Customized keybindings and editor preferences."
              imageUrl="/vscode.png" />

            <Card
              title="Terminal setup"
              content="Configured default shell and terminal preferences. Installed essential command-line tools and utilities. Set up aliases and shortcuts for common commands."
              imageUrl="/terminal.png"
            />

            <Card
              title="Preferred editor font"
              content="Using Fira Code with ligatures enabled for enhanced readability and coding experience."
              imageUrl="/vscode.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
