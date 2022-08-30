import React from "react";
import college from "../../assets/college.jpg";

const AboutCollege = () => {
  return (
    <div>
      <div class="hero h-96">
        <div class="hero-content flex-col lg:flex-row">
          <img src={college} class="w-96 max-h-96 rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-1xl font-bold text-start">
              Welcome To Haji Asmat College
            </h1>
            <p class="py-6 text-start">
              The University of Dhaka (also known as Dhaka University, or
              abbreviated as DU) is a public research university located in
              Dhaka, Bangladesh. It is the oldest university in Bangladesh. On
              the first day of July 1921, the university opened its doors to
              students.[4][5][6][7] Today, it is the largest public research
              university in Bangladesh, with a student body of 37,018 and a
              faculty of 1,992. It was identified by AsiaWeek as one of the top
              100 universities in Asia.[8] Nawab Bahadur Sir Khwaja Salimullah,
              who played a pioneering role in establishing the university in
              Dhaka, donated 600 acres of land from his estate for this
              purpose.[9] It has made significant contributions to the modern
              history of Bangladesh.[4][5][10][7] After the Partition of India,
              it became the focal point of progressive and democratic movements
              in Pakistan. Its students and teachers played a central role in
              the rise of Bengali nationalism and the independence of Bangladesh
              in 1971. The university's distinguished alumni include Muhammad
              Yunus (winner 2006 Nobel Peace Prize, pioneer of microcredit),
              Natyaguru Nurul Momen (pioneer litereteur, theatre & cultural
              doyen; who was both an early student and teacher of DU), Muhammad
              Shahidullah (educator, philologist and linguist)
            </p>
          </div>
        </div>
      </div>
      <div class="divider gap-1"></div>
    </div>
  );
};

export default AboutCollege;
