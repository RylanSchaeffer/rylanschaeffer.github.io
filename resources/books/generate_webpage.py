from add_books import add_books


def create_book_tiles_content(books):
    # The HTML content for this section of the page
    content = ''
    for title, goodreads_url, cover_url in books:
        # Append the tile for the book with its content filled in
        content += book_tile_content.format(
            book_title=title,
            book_goodreads_url=goodreads_url,
            book_cover_url=cover_url
        )
    return content


def main():
    books = add_books()
    open_books_page(books)


def open_books_page(books):
    # Create or overwrite the output file
    output_file = open('books.html', 'w')

    # Replace the placeholder for the book tiles with the actual dynamically generated content
    rendered_content = main_page_content.format(book_tiles=create_book_tiles_content(books))

    # Output the file
    output_file.write(main_page_head + rendered_content)
    output_file.close()


# Styles and scripting for the page
main_page_head = '''
<head>
    <meta charset="utf-8">
    <title>Rylan's Read Books</title>

    <!-- Bootstrap 3 -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap-theme.min.css">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
    <style type="text/css" media="screen">
        body {
            padding-top: 80px;
        }
        .hanging-close {
            position: absolute;
            top: -12px;
            right: -12px;
            z-index: 9001;
        }
        .book-tile {
            margin-bottom: 20px;
            padding-top: 20px;
        }
        .book-tile:hover {
            background-color: #EEE;
            cursor: pointer;
        }
        .scale-media {
            padding-bottom: 56.25%;
            position: relative;
        }
        .scale-media iframe {
            border: none;
            height: 100%;
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            background-color: white;
        }
    </style>
    <script type="text/javascript" charset="utf-8">
        // Animate in the books when the page loads
        $(document).ready(function () {
          $('.book-tile').hide().first().show("fast", function showNext() {
            $(this).next("div").show("fast", showNext);
          });
        });
    </script>
</head>
'''

# The main page layout and title bar
main_page_content = '''
<!DOCTYPE html>
<html lang="en">
  <body>
    <!-- Main Page Content -->
    <div class="container">
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Rylan's Read Books</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      {book_tiles}
    </div>
  </body>
</html>
'''

# A single book entry html template
book_tile_content = '''
<div class="col-sm-2 col-sm-2 col-sm-2 col-sm-2 col-sm-2 col-sm-2 book-tile text-center">
    <a href="{book_goodreads_url}"><img src="{book_cover_url}" width="200" height="311"></a>
    <h2>{book_title}</h2>
</div>
'''


if __name__ == '__main__':
    main()
