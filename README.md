# 93books - Refactored & Modernized 🌙📚

## What Changed?

### ❌ Old Way (What You Had)
- Separate HTML file for each book (HTWFIP.html, TPON.html, etc.)
- Separate CSS file for each book (HTWFIP.css, TPON.css, etc.)
- jQuery dependency for simple accordion
- Hardcoded book-1 through book-6 divs
- Lots of duplicate code

### ✅ New Way (What You Have Now)
- **One** data file for all 50 books (`books-data.js`)
- **One** template page for all books (`book.html`)
- **One** CSS file for all book pages (`book-page.css`)
- No jQuery - pure vanilla JavaScript
- Dynamic grid that auto-adjusts
- Easy to maintain and scale

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
```

**That's it!** The book will automatically:
- Show up on the index page
- Have its own working page at `book.html?id=7`
- Include the 3D rotating book effect (if you provided the URLs)
- Work with the accordion for sections

## What Works Out of the Box

✅ All 6 existing books are already in the data file
✅ Rotating 3D book animation on individual pages
✅ Click-to-expand accordion (no jQuery!)
✅ Responsive grid layout
✅ Starfield background animation
✅ Navigation

## To Use This

1. Replace your old files with these new ones
2. Keep your existing folders: `bookPics/`, `moonpics/`, `CSS/`
3. Add your remaining 44 books to `books-data.js`
4. Done!

## Pro Tips

- Leave `coverFront`, `coverBack`, and `spine` as empty strings (`""`) for books where you don't have the 3D cover URLs yet
- You can use HTML in the `content` field (like `<strong>`, `<br>`, etc.)
- The accordion sections are optional - leave the array empty if you just want the intro
- Book IDs should be unique and sequential (1, 2, 3...)

## Benefits of This Approach

1. **Add books in seconds** - Just one entry in the data file
2. **No code duplication** - One template handles everything
3. **Easy to update** - Change styling in one place, affects all books
4. **Modern JavaScript** - No jQuery dependency
5. **Responsive** - Works on mobile automatically
6. **Scalable** - Can easily handle 100+ books

## Questions?

The structure is straightforward:
- `books-data.js` = Your database
- `index.html` = Reads the database and creates the grid
- `book.html` = Reads the URL parameter (`?id=X`) and displays that book

That's it! 🚀
