// src/components/ChapterPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ChapterPage.css';

const ChapterPage = () => {
  const { id } = useParams(); // Get the chapter id from the URL

  // Sample content for chapters (could be fetched from an API or database)
  const chapters = {
    1: {
      title: 'Introduction to Programming',
      notes: `This chapter introduces the basic concepts of programming, including data types, variables, operators, and basic control structures. It is essential to grasp these concepts to write your first programs.`
    },
    2: {
      title: 'Web Development Basics',
      notes: `Learn the fundamentals of web development, including how to structure web pages with HTML, style them with CSS, and add interactivity with JavaScript. This chapter is the foundation for creating dynamic websites.`
    },
    3: {
      title: 'Data Structures',
      notes: `Data structures are ways of organizing and storing data efficiently. This chapter covers arrays, linked lists, stacks, queues, and other key structures that are crucial for solving computational problems.`
    },
    4: {
      title: 'Machine Learning',
      notes: `Machine learning is a field of artificial intelligence that allows systems to learn and improve from experience. This chapter covers supervised and unsupervised learning, algorithms, and model evaluation techniques.`
    },
    5: {
      title: 'Cybersecurity Essentials',
      notes: `Cybersecurity involves protecting systems and data from cyber threats. This chapter introduces concepts like encryption, authentication, firewalls, and network security to help you understand how to defend against attacks.`
    }
  };

  const chapterContent = chapters[id];

  return (
    <div className="chapter-container">
      <h2>{chapterContent ? chapterContent.title : 'Chapter Not Found'}</h2>
      <p>{chapterContent ? chapterContent.notes : 'No content available for this chapter.'}</p>
    </div>
  );
};

export default ChapterPage;
