from lxml import html
import requests
import sqlite3


def add_books():
    conn = sqlite3.connect('booksdb.sqlite')
    cur = conn.cursor()

    while True:

        goodreads_url = raw_input('Goodreads URL (Press 0 to exit): ')

        if goodreads_url == '0':
            break

        r = requests.get(goodreads_url)

        if r.status_code != 200:
            print 'Error - Request status not 200: ' + str(r.status_code) + '\n'
            continue

        tree = html.fromstring(r.content)

        cover_url = tree.xpath('//img[@id = "coverImage"]/@src')[0]
        title = tree.xpath('//h1[@class = "bookTitle"]')[0].text.strip()
        author = tree.xpath('//a[@class = "authorName"]/span')[0].text
        genre = tree.xpath('//a[@class = "actionLinkLite bookPageGenreLink"]')[0].text

        # insert author into authors table
        cur.execute('''INSERT OR IGNORE INTO Authors (author)
            VALUES ( ? )''', (author,))
        cur.execute('SELECT id FROM Authors WHERE author = ? ', (author,))
        author_id = cur.fetchone()[0]

        # insert genre into Genres table
        cur.execute('''INSERT OR IGNORE INTO Genres (genre)
            VALUES ( ? )''', (genre,))
        cur.execute('SELECT id FROM Genres WHERE genre = ? ', (genre,))
        genre_id = cur.fetchone()[0]

        # insert book into books table
        cur.execute('''INSERT OR IGNORE INTO Books
                (title, author_id, genre_id, goodreads_url, cover_url)
                VALUES ( ?, ?, ?, ?, ?)''', (title, author_id, genre_id, goodreads_url, cover_url))

        conn.commit()

    cur.execute('SELECT title, goodreads_url, cover_url FROM Books ORDER BY title')

    books = cur.fetchall()

    conn.close()

    return books
