import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function StoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { story } = location.state || {};

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to Stories</button>
      <h2>{story.title}</h2>
      {/* Add more story details here */}
    </div>
  );
}

export default StoryDetail;

