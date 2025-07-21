import React from 'react';
import authors from '../data/author'; 

const Authors = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Authors</h1>
      <div className="space-y-4">
        {authors.map((author) => (
          <div key={author.id}>
            <p>
              <strong>{author.name}</strong>: {author.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
