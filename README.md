## File Structure

```
/93books
├── index.html          - Main page with book grid (auto-generated from data)
├── book.html           - Single template for ALL individual book pages
├── books-data.js       - ALL your books stored here
├── style.css           - Main styles + grid layout
├── books.css           - 3D book hover effects (unchanged)
├── book-page.css       - Individual book page styles
└── Background.js       - Starfield animation (unchanged)
```

## How to Add New Books

Just edit `books-data.js` and add a new entry:

```javascript
{
  id: 7,  // Increment this
  title: "Your Book Title",
  author: "Author Name",
  abbrev: "YBT",
  coverImage: "bookPics/YBT.jpg",  // For the grid
  coverFront: "URL",  // For 3D rotating book (optional)
  coverBack: "URL",   // For 3D rotating book (optional)
  spine: "URL",       // For 3D rotating book (optional)
  dateRead: "2024-01",
  genre: "Category",
  summary: {
    intro: "Brief intro paragraph",
    sections: [
      {
        title: "Section 1",
        content: "Your summary here. Use <br><br> for paragraphs."
      }
    ]
  }
}


