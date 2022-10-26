import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Home.css';

export const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Pedro</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className="skills">
        <h1>skills</h1>
        <ol className='list'>
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, SCSS, NPM, MaterialUI, GitHub</span>
          </li>
        </ol>
        <ol className='list'>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, MongoDB, ExpressJS</span>
          </li>
        </ol>
        <ol className='list'>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
