import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header row-10 d-flex justify-content-evenly">
        <span class="title col-5 d-flex flex-column">
            <div class="name col-lg-10">
                <h1>John Doe </h1><span class="name">Creative Technologist</span>
            </div>
            <p class="detail col-lg-12">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </span>
        <div class="col-3 rounded-circle picture">
            <img src="https://storage.googleapis.com/ace-project-1/profile.png" alt="profile"/>
        </div>
    </div>
    <section id="main">
    <div class="content d-flex col-11 justify-content-evenly">
        <div class="col-4 contact">
            <h1 class="headline">
                contact
            </h1>
            <div class="row col-12 contact__item d-flex justify-content-around">
                <span class="col-1 contact__item__icon">
                    <img src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"/>
                </span>
                <p class="col-10 contact__item__detail">
                    84 - 969877097
                </p>
            </div>
            <div class="row col-12 contact__item d-flex justify-content-around">
                <span class="col-1 contact__item__icon">
                    <img src="https://img.icons8.com/ios/50/000000/new-post.png"/>
                </span>
                <p class="col-10 contact__item__detail">
                    toannd.figmateam@gmail.com
                </p>
            </div>
            <div class="row col-12 contact__item d-flex justify-content-around">
                <span class="col-1 contact__item__icon">
                    <img src="https://img.icons8.com/windows/50/000000/company.png"/>
                </span>
                <p class="col-10 contact__item__detail">
                    Lita Co, Ltd.999 Conway Blvd.
                </p>
            </div>
            <div class="row col-12 contact__item d-flex justify-content-around">
                <span class="col-1 contact__item__icon">
                    <img src="https://img.icons8.com/ios-filled/50/000000/marker.png"/>
                </span>
                <p class="col-10 contact__item__detail">
                    California 90999, United States 
                </p>
            </div>
        </div>
        <div class="col-4 education">
            <h1 class="headline">
                Education
            </h1>
            <div class="education__detail">
                <h1 class="university">
                    Your University
                </h1>
                <ul>
                    <span class="major">
                        Your Major August 2017 - 2021(expected)
                    </span>
                    <li class="bullet__major">Bullet point descriptions should be concise and clear</li>
                    <li class="bullet__major">Include your cumulative grade point average if your GPA > 3.5</li>
                </ul>
            </div>
            <div class="education__detail">
                <h1 class="university">
                    Your University
                </h1>
                <ul>
                    <span class="major">
                        Your Major August 2017 - 2021(expected)
                    </span>
                    <li class="bullet__major">Bullet point descriptions should be concise and clear</li>
                    <li class="bullet__major">Include your cumulative grade point average if your GPA > 3.5</li>
                </ul>
            </div>
            <div class="education__detail">
                <h1 class="university">
                    Your University
                </h1>
                <ul>
                    <span class="major">
                        Your Major August 2017 - 2021(expected)
                    </span>
                    <li class="bullet__major">Bullet point descriptions should be concise and clear</li>
                    <li class="bullet__major">Include your cumulative grade point average if your GPA > 3.5</li>
                </ul>
            </div>

        </div>
    </div>
    </section>


    <section>
    <div class="project row col-11 justify-content-around">
        <div class="project__title col-9">
            <h1>Project/Experience</h1>
        </div>
        <div class="project__detail d-flex col-9">
            <img class="col-3 me-4"src="https://storage.googleapis.com/ace-project-1/dashboard.png" 
            alt="..."/>
            <div class="project__text__detail d-flex flex-column justify-content-between">
                <h1 class="project__text_title">Designing Dashboards</h1>
                <span class="project__date d-flex justify-content-between col-4">
                    <div class="project__year">
                        <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                </span>
                
                <p class="project__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div class="project__detail d-flex col-9">
            
            <img class="col-3 me-4"src="https://storage.googleapis.com/ace-project-1/potrait.png"  alt="..."/>
            <div class="project__text__detail d-flex flex-column justify-content-between">
                <h1 class="project__text_title">Vibrant Portraits of 2020</h1>
                <span class="project__date d-flex justify-content-between col-4">
                    <div class="project__year">
                        <p>2020</p>
                    </div>
                    <p>Illustration</p>
                </span>
                
                <p class="project__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div class="project__detail d-flex col-9">
            <img class="col-3 me-4"src="https://storage.googleapis.com/ace-project-1/malayan.png"alt="..."/>
            <div class="project__text__detail d-flex flex-column justify-content-between">
                <h1 class="project__text_title">36 Days of Malayalam type</h1>
                <span class="project__date d-flex justify-content-between col-4">
                    <div class="project__year">
                        <p>2018</p>
                    </div>
                     <p>Typography</p>
                </span>
                
                <p class="project__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    </div>
    </section>
    <section>
        <div class="footer m-5 d-flex flex-column align-items-center">
            <div class="footer__icon d-flex justify-content-around col-3">
                <a class=""href="#">
                    <img src="https://img.icons8.com/material-rounded/24/000000/facebook.png"/>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/ios-filled/24/000000/twitter.png"/>
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/android/24/000000/linkedin.png"/>
                </a>
            </div>
            <div class="footer__text">
                <p>Copyright ©2020 All rights reserved </p>
            </div>
        </div>
    </section>
    
]

    </div>
  );
}

export default App;
