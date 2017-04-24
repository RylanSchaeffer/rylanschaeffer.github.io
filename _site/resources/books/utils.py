import sqlite3


def list_genres():
    conn = sqlite3.connect('booksdb.sqlite')
    cur = conn.cursor()
    cur.execute('SELECT * FROM Genres')
    for _, genre in cur.fetchall():
        print genre
    conn.close()


def list_authors():
    conn = sqlite3.connect('booksdb.sqlite')
    cur = conn.cursor()
    cur.execute('SELECT * FROM Authors')
    for _, author in cur.fetchall():
        print author
    conn.close()
