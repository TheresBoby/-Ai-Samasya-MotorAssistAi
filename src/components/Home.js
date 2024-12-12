// src/components/Home.js
import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  // State to manage modal visibility and selected chapter content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Sample chapter data
  const chapters = [
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'This chapter introduces the basic concepts of programming, including data types, variables, operators, and basic control structures.',
    },
    {
      id: 2,
      title: 'Web Development Basics',
      description: 'Learn the fundamentals of web development, including how to structure web pages with HTML, style them with CSS, and add interactivity with JavaScript.',
    },
    {
      id: 3,
      title: 'Data Structures',
      description: 'Data structures are ways of organizing and storing data efficiently. This chapter covers arrays, linked lists, stacks, queues, and other key structures.',
    },
    {
      id: 4,
      title: 'Machine Learning',
      description: 'Machine learning is a field of artificial intelligence that allows systems to learn and improve from experience. This chapter covers supervised and unsupervised learning.',
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      description: 'Cybersecurity involves protecting systems and data from cyber threats. This chapter introduces concepts like encryption, authentication, firewalls, and network security.',
    }
  ];

  // Function to handle card click (opens the modal)
  const openModal = (chapter) => {
    setSelectedChapter(chapter);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChapter(null);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Explore Our Courses</h1>
      <div className="cards-container">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id} 
            className="card" 
            onClick={() => openModal(chapter)} // Open modal when card is clicked
          >
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for displaying chapter content */}
      {isModalOpen && selectedChapter && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedChapter.title}</h2>
            <p>{selectedChapter.description}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
