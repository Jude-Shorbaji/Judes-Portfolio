import "./App.css";

const projects = [
  {
    index: "01",
    title: "Lerobot VLA",
    description:
      "A sensor-fusion rover that maps its environment and makes navigation decisions at the edge.",
    stack: "Lerobot · Hugging Face · Google Colab · VLA",
  },
];

const posts = [
  {
    date: "January 4, 2025",
    title: "My first venture into VLA's",
    href: "/lerobot-vla",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function LerobotVlaPage() {
  return (
    <main className="project-page">
      <nav className="site-nav">
        <a className="logo" href="/">
          <span>Jude Shorbaji</span>
        </a>
        <a className="back-link" href="/">
          ← Back to portfolio
        </a>
      </nav>
      <article className="project-article">
        <p className="eyebrow">Project 01 · Robotics · January 2025</p>
        <h1>
          LeRobot <i>VLA</i>
        </h1>
        <p className="article-lede">
          My first venture into visual language action models, explored through
          imitation learning, and LeRobot.
        </p>
        <div className="article-grid">
          <div>
            <p className="section-kicker">01 / The question</p>
            <h2>Can a robot turn language and vision into useful action?</h2>
          </div>
          <div className="article-copy">
            <p>
              Over the winter break, I trained a robot. I obtained an
              open-source Visual Language Action model and robot arm produced by
              Lerobot. Using their prebuilt PyTorch tools, I collected data to
              fine-tune their VLA for my environment, enabling my robot arm to
              pick up a green LEGO block and place it into a box.
            </p>
            <p>
              Although the task seemed simple, this was my first time working on
              a project with physical limitations, and I quickly encountered
              several challenges regarding my setup. From a robot part breaking
              due to a servo motor failure, to creating lighting that prevented
              shadows and maintained homogeneity in the data I collected,
              troubleshooting my hardware took a large portion of my time, and I
              learned a lot about how resource-consuming data collection in
              robotics can be. 50,000 video frames, 20,000 training steps,
              late-night hours, and several energy drinks later, it worked!
            </p>
            <p>
              This project was also a great introduction to some of the
              technical skills and terms in robotics and machine learning. I
              learned the difference between locomotion and manipulation in
              robots, as well as the difference between imitation and
              reinforcement training. I also learned more about resources such
              as Hugging Face, a platform that makes it easy to store and share
              data and models, and Google Colab, which I used to borrow a more
              powerful GPU and speed up the training process.
            </p>
          </div>
        </div>
        <div className="article-callout">
          <span>Stack</span>
          <strong>Lerobot · Hugging Face · Google Colab · VLA</strong>
        </div>
      </article>
    </main>
  );
}

function App() {
  if (window.location.pathname === "/lerobot-vla") {
    return <LerobotVlaPage />;
  }

  return (
    <main>
      <nav className="site-nav">
        <a className="logo" href="#about">
          <span>Jude Shorbaji</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#posts">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="section about-section" id="about">
        <div className="section-kicker">01 / About me</div>
        <div className="about-content">
          <p className="eyebrow">
            Electrical and Computer Engineer · Rutgers University - New
            Brunswick · Class of 2028
          </p>
          <h1>
            Exploring the
            <br />
            <i>Frontier of Intelligent Robotics</i>
          </h1>
          <div className="intro-row">
            <p className="intro">
              A computer engineering student focused on robotics and artificial
              intellegence and researching visual languange action models.
            </p>
          </div>
          <div className="about-details">
            <div>
              <span>Currently</span>
              <strong>Experimenting with simulated robotics</strong>
            </div>
            <div>
              <span>Based in</span>
              <strong>New Jersey · New York · Massachusetts</strong>
            </div>
            <div>
              <span>Interests</span>
              <strong>
                {" "}
                Robotics, Visual Language Action Models, Research and Discovery
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section posts-section" id="posts">
        <div className="section-kicker">02 / Recent blog posts</div>
        <div className="content-column">
          <div className="section-heading">
            <h2>Recent Experiences</h2>
          </div>
          <div className="post-list">
            {posts.map((post) => (
              <a className="post" href={post.href} key={post.title}>
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-kicker">03 / Recent projects</div>
        <div className="content-column">
          <div className="section-heading">
            <h2>Things I&apos;ve made.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href="/lerobot-vla"
                key={project.title}
              >
                <div className="project-card-top">
                  <span>{project.index}</span>
                  <span className="project-arrow">
                    <Arrow />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="stack">{project.stack}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-meta">
          <div className="section-kicker">04 / Contact me</div>
          <div className="contact-links">
            <a className="email-link" href="mailto:jude.shorbaji@rutgers.edu">
              Email
              <Arrow />
            </a>
            <a
              className="email-link"
              href="https://www.linkedin.com/in/judeshorbaji/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
        <div className="contact-content"></div>
        <footer>
          <span>05/2026 Jude Shorbaji</span>
          <a href="#about">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}

export default App;
