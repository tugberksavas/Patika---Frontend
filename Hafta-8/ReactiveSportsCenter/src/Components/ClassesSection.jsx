import React from 'react';

const ClassesSection = () => {
  function yoga() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Yoga?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Yoga Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/yoga.jpg";
  }

  function group() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Group?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Group Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/group.webp";
  }

  function solo() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Solo?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Solo Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/solo.jpg";
  }

  function stretch() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Stretch?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Stretch Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/stret.webp";
  } 

  return (
    <section className="classes" id="classes">
      <div className="class-container">
        <div className="bg-shape"></div>
        <h2>OUR CLASSES</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="button-container">
          <button id="yoga" onClick={yoga}>Yoga</button>
          <button id="group" onClick={group}>Group</button>
          <button id="solo" onClick={solo}>Solo</button>
          <button id="stretch" onClick={stretch}>Stretching</button>
        </div>
        <div id="features-container">
          <div>
            <h6>Why Are Your Yoga?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil
              recusandae. Atque, illum corporisodio pariatur ad harum non,
              molestias maiores molestiae sapiente perferendis veniam earum
              fugit ipsum repellendus architecto ducimus explicabo reiciendis
              alias quasi culpa libero amet similique nisi!
            </p>
            <h6>When comes Yoga Your Time?</h6>
            <p>Saturday-Sunday: 8:00am - 10:000am</p>
            <p>Monday-Tuesday: 8:00am - 10:000am</p>
            <p>Wednesday-Friday: 8:00am - 10:000am</p>
          </div>
          <img src="./img/yoga.jpg" alt="Yoga" />
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
