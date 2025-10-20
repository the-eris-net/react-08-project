import { createContext, useState } from 'react';

export const BookMarkContext = createContext();

export function BookMarkProvider({ children }) {
  const [bookMarks, setBookMarks] = useState({});

  const toggleBookMark = (newBookmark) => {
    if (bookMarks[newBookmark.id]) {
      const updatedBookmarks = { ...bookMarks };
      delete updatedBookmarks[newBookmark.id];
      setBookMarks(updatedBookmarks);
    } else {
      setBookMarks((prevBookmarks) => ({
        ...prevBookmarks,
        [newBookmark.id]: newBookmark,
      }));
    }
  };

  return (
    <BookMarkContext value={{ bookMarks, toggleBookMark }}>
      {children}
    </BookMarkContext>
  );
}
